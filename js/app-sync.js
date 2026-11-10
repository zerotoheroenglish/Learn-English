/* ============================================================
   ACCOUNT & CLOUD SYNC — Firebase (free Spark plan)
   Each user signs in (Google or email) and their progress is kept in
   Firestore at users/{uid}. Nothing is synced until someone signs in.
   FIREBASE_CONFIG comes from Firebase console → Project settings → Web app.
   These values are public by design; Firestore security rules make sure
   every user can only read and write their own document.
============================================================ */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyALeVqXtkAM1-1B_VTtc8hO4-GCKtmExhY",
  authDomain: "learn-english-4d913.firebaseapp.com",
  projectId: "learn-english-4d913",
  storageBucket: "learn-english-4d913.firebasestorage.app",
  messagingSenderId: "982003629558",
  appId: "1:982003629558:web:4697f88723f8a3155b5bd7"
};
(() => {
  const btn = document.getElementById('acct-btn');
  if (!FIREBASE_CONFIG || !btn) return;
  btn.hidden = false;
  const PREFIX = 'hoc-tieng-anh-', META = PREFIX + 'sync-meta', UIDK = PREFIX + 'sync-uid', BASEK = PREFIX + 'sync-base';
  const SKIP = new Set([PREFIX + 'voice', META, UIDK, BASEK, PREFIX + 'autofix-open', PREFIX + 'backup-at', PREFIX + 'backup-nag', PREFIX + 'backup-every', PREFIX + 'ipa-cache', PREFIX + 'talk-key', PREFIX + 'talk-model', PREFIX + 'talk-models', PREFIX + 'talk-prov', PREFIX + 'talk-key-groq', PREFIX + 'talk-model-groq', PREFIX + 'talk-models-groq', PREFIX + 'talk-key-openai', PREFIX + 'talk-model-openai', PREFIX + 'talk-models-openai', PREFIX + 'syncbar-at', PREFIX + 'syncbar-mute', PREFIX + 'sync-dev', PREFIX + 'push', PREFIX + 'ob-new', PREFIX + 'guest-v205']);   // v128: cache IPA tự tạo lại được, không cần đẩy lên tài khoản   // device-specific / bookkeeping
  const FB = 'https://www.gstatic.com/firebasejs/10.12.2/';
  const $ = id => document.getElementById(id);
  const sheet = $('asheet'), msg = $('acct-msg');
  let auth = null, db = null, user = null, syncing = false, again = false, lastSync = 0, pushTimer = null, applying = false, pendingSignin = false, status = '';
  // v201: mỗi máy một mã riêng, để biết bản ghi trên tài khoản do máy nào vừa ghi
  let DEV = '';
  try { DEV = localStorage.getItem(PREFIX + 'sync-dev') || ''; if (!DEV) { DEV = Math.random().toString(36).slice(2, 10) + Date.now().toString(36); localStorage.setItem(PREFIX + 'sync-dev', DEV); } } catch (e) { DEV = 'x' + Math.random().toString(36).slice(2, 10); }
  /* v201: tiến độ từ máy khác được chép vào máy này trong lúc app đang mở, nhưng các màn hình vẫn giữ bản cũ trong bộ nhớ.
     Lần ghi kế tiếp của màn hình đó sẽ đè mất phần của máy kia. Vì vậy ta nhớ "bản cũ mà màn hình đang giữ" (stale)
     và khi màn hình ghi, gộp ba chiều: thay đổi của màn hình này + phần máy kia đã thêm. */
  const stale = {};

  // ---- remember when each key last changed on this device ----
  const readMeta = () => { try { return JSON.parse(localStorage.getItem(META) || '{}') || {}; } catch (e) { return {}; } };
  const writeMeta = m => { applying = true; try { localStorage.setItem(META, JSON.stringify(m)); } catch (e) {} applying = false; };
  const tracked = k => typeof k === 'string' && k.startsWith(PREFIX) && !SKIP.has(k);
  const proto = Storage.prototype, oSet = proto.setItem, oRemove = proto.removeItem;
  proto.setItem = function (k, v) {
    // v201: vừa đăng xuất và dọn máy → chặn mọi lần ghi muộn (vd. lưu hoạt động khi tải lại trang) để tiến độ cũ không quay lại
    if (window.__htaWiped && this === window.localStorage && tracked(k)) return;
    if (!applying && this === window.localStorage && k in stale) {
      const mine = String(v), cur = this.getItem(k), was = stale[k];
      stale[k] = mine;                                   // màn hình giờ giữ đúng giá trị nó vừa ghi
      if (cur != null && ADD.has(k.slice(PREFIX.length))) { try { v = addMerge(mine, cur); } catch (e) {} }
      else if (cur != null && was != null && cur !== was) { try { v = merge3(was, mine, cur, 1, 0); } catch (e) {} }
    }
    const track = !applying && this === window.localStorage && tracked(k) && this.getItem(k) !== String(v);
    oSet.call(this, k, v);
    if (track) { const m = readMeta(); m[k] = Date.now(); writeMeta(m); schedulePush(); }
  };
  proto.removeItem = function (k) {
    if (!applying && this === window.localStorage) delete stale[k];
    const track = !applying && this === window.localStorage && tracked(k) && this.getItem(k) !== null;
    oRemove.call(this, k);
    if (track) { const m = readMeta(); m[k] = Date.now(); writeMeta(m); schedulePush(); }
  };
  function schedulePush() { if (!user) return; clearTimeout(pushTimer); pushTimer = setTimeout(() => syncNow('change'), 2500); }

  function localSnapshot() {
    const data = {}, meta = readMeta();
    for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (tracked(k)) data[k.slice(PREFIX.length)] = localStorage.getItem(k); }
    const ts = {};
    Object.keys(meta).forEach(k => { const s = k.slice(PREFIX.length); ts[s] = meta[k]; if (!(s in data) && tracked(k)) data[s] = null; });
    return { data, ts };
  }
  // Three-way merge for lists/objects changed on both sides since the last sync:
  // keep everything the other device added, plus what this device added, minus what this device removed.
  const parse = v => { try { return JSON.parse(v); } catch (e) { return undefined; } };
  const isList = x => Array.isArray(x) && x.every(y => typeof y !== 'object');
  /* v202: nhật ký theo ngày (hoạt động, ôn thẻ, từ vựng) chỉ có THÊM, không bao giờ bớt.
     Gộp theo kiểu "lấy hết các ngày của cả hai máy, mỗi ô lấy số lớn hơn" — không bao giờ để một máy
     xoá ngày học của máy kia (lỗi làm chuỗi ngày học trên máy tính ít hơn điện thoại). */
  const ADD = new Set(['activity', 'sr-log', 'vocab-log']);
  function mx(x, y) {
    if (typeof x === 'number' && typeof y === 'number') return Math.max(x, y);
    if (Array.isArray(x) && Array.isArray(y)) { const n = Math.max(x.length, y.length), o = []; for (let i = 0; i < n; i++) o.push(i in x ? (i in y ? mx(x[i], y[i]) : x[i]) : y[i]); return o; }
    if (x && y && typeof x === 'object' && typeof y === 'object') { const o = Object.assign({}, y); Object.keys(x).forEach(k => { o[k] = k in y ? mx(x[k], y[k]) : x[k]; }); return o; }
    return x != null ? x : y;
  }
  const addMerge = (a, b) => { const A = parse(a), B = parse(b); return A && B && typeof A === 'object' && typeof B === 'object' ? JSON.stringify(mx(A, B)) : (a != null ? a : b); };
  function merge3(base, local, cloud, lt, ct) {
    const B = parse(base), L = parse(local), C = parse(cloud);
    if (isList(L) && isList(C)) {
      const b = new Set(isList(B) ? B : []), l = new Set(L);
      const out = new Set(C);
      L.forEach(x => { if (!b.has(x)) out.add(x); });
      b.forEach(x => { if (!l.has(x)) out.delete(x); });
      return JSON.stringify([...out]);
    }
    if (L && C && typeof L === 'object' && typeof C === 'object' && !Array.isArray(L) && !Array.isArray(C)) {
      const b = B && typeof B === 'object' && !Array.isArray(B) ? B : {}, out = Object.assign({}, C);
      Object.keys(L).forEach(k => { if (JSON.stringify(L[k]) !== JSON.stringify(b[k])) out[k] = L[k]; });
      Object.keys(b).forEach(k => { if (!(k in L)) delete out[k]; });
      return JSON.stringify(out);
    }
    return lt >= ct ? local : cloud;
  }
  // first sync of a device that already has progress: combine both instead of overwriting
  function union(a, b) {
    try {
      const A = JSON.parse(a), B = JSON.parse(b);
      if (Array.isArray(A) && Array.isArray(B)) {
        if (A.every(x => typeof x !== 'object') && B.every(x => typeof x !== 'object')) return JSON.stringify([...new Set([...B, ...A])]);
        return a.length >= b.length ? a : b;
      }
      if (A && B && typeof A === 'object' && typeof B === 'object') return JSON.stringify(Object.assign({}, B, A));
    } catch (e) {}
    return a;
  }

  // v134: so sánh theo NỘI DUNG (bỏ qua thứ tự khoá trong JSON), tránh báo “có tiến độ mới” khi thật ra không có gì đổi
  function canon(x) {
    if (x == null) return x;
    let o; try { o = JSON.parse(x); } catch (e) { return x; }
    const srt = v => Array.isArray(v) ? v.map(srt) : v && typeof v === 'object' ? Object.keys(v).sort().reduce((a, k) => { a[k] = srt(v[k]); return a; }, {}) : v;
    return JSON.stringify(srt(o));
  }
  const eq = (a, b) => a === b || (a != null && b != null && canon(a) === canon(b));

  /* v172: TÀI KHOẢN CÓ NHIỀU DỮ LIỆU
     Firestore chỉ cho mỗi tài khoản 1 MB (tính theo byte: chữ có dấu tiếng Việt tốn 2–3 byte).
     Khi tiến độ vượt ngưỡng, các mục lớn nhất được nén (gzip) và cất ở trường "z" thay vì "data".
     Tài khoản nhỏ không đổi gì cả, nên máy còn bản app cũ vẫn đồng bộ như trước. */
  const BUDGET = 950000, ZMIN = 2000;
  const canZip = typeof CompressionStream === 'function' && typeof DecompressionStream === 'function';
  const te = typeof TextEncoder === 'function' ? new TextEncoder() : null;
  const bytes = str => te ? te.encode(str).length : unescape(encodeURIComponent(str)).length;
  async function zip(str) {
    const st = new window.Blob([str]).stream().pipeThrough(new CompressionStream('gzip'));
    return new Uint8Array(await new Response(st).arrayBuffer());
  }
  async function unzip(u8) {
    const st = new window.Blob([u8]).stream().pipeThrough(new DecompressionStream('gzip'));
    return new Response(st).text();
  }
  // đọc tiến độ trên tài khoản: ghép phần thường và phần đã nén
  async function readCloud(cloud) {
    const data = Object.assign({}, cloud.data || {}), z = cloud.z || {};
    const zk = Object.keys(z);
    if (zk.length && !canZip) throw Object.assign(new Error('no-unzip'), { code: 'no-unzip' });
    for (const k of zk) { const b = z[k]; data[k] = await unzip(b && typeof b.toUint8Array === 'function' ? b.toUint8Array() : b); }
    return data;
  }
  // chuẩn bị bản ghi lên tài khoản: chỉ nén khi vượt ngưỡng, nén mục lớn nhất trước
  async function packCloud(out, outTs) {
    const data = Object.assign({}, out), z = {};
    let size = bytes(JSON.stringify({ v: 1, data, ts: outTs })) + 200;
    if (size > BUDGET && canZip) {
      const big = Object.keys(data).filter(k => typeof data[k] === 'string' && data[k].length >= ZMIN).sort((a, b) => data[b].length - data[a].length);
      for (const k of big) {
        if (size <= BUDGET) break;
        const plain = bytes(JSON.stringify(k)) + bytes(JSON.stringify(data[k])) + 2;
        const u8 = await zip(data[k]);
        const packed = bytes(k) + u8.length + 16;
        if (packed >= plain) continue;
        z[k] = firebase.firestore.Blob.fromUint8Array(u8); delete data[k];
        size += packed - plain;
      }
    }
    if (size > BUDGET) throw Object.assign(new Error('too-big'), { code: 'too-big' });
    const doc = { v: 1, data, ts: outTs };
    if (Object.keys(z).length) doc.z = z;
    return doc;
  }

  async function syncNow(reason) {
    if (!user || !db) return;
    if (syncing) { again = true; return; }
    syncing = true; setStatus('syncing');
    const uid = user.uid, prevUid = localStorage.getItem(UIDK);
    let changes = [], merged = null, fresh = false;
    try {
      const ref = db.collection('users').doc(uid);
      await db.runTransaction(async tx => {
        changes = [];
        const snap = await tx.get(ref);
        const cloud = snap.exists ? snap.data() : {};
        fresh = !snap.exists;
        const cData = await readCloud(cloud), cTs = cloud.ts || {};
        const { data: lData, ts: lTs } = localSnapshot();
        const firstHere = !prevUid, otherUser = prevUid && prevUid !== uid;
        let base = {};
        try { base = JSON.parse(localStorage.getItem(BASEK) || '{}') || {}; } catch (e) {}
        const out = {}, outTs = {}, now = Date.now();
        new Set([...Object.keys(cData), ...Object.keys(lData)]).forEach(k => {
          const lv = k in lData ? lData[k] : undefined, cv = k in cData ? cData[k] : undefined;
          const lt = lTs[k] || 0, ct = cTs[k] || 0;
          let v, t;
          const bv = k in base ? base[k] : undefined;
          if (!otherUser && ADD.has(k) && lv != null && cv != null) { v = eq(lv, cv) ? lv : addMerge(lv, cv); t = eq(v, cv) ? ct : now; }
          else if (otherUser) { v = cv === undefined ? null : cv; t = ct || now; }                      // another account on this device: use theirs
          else if (firstHere && lv != null && cv != null && lv !== cv) { v = union(lv, cv); t = now; }
          else if (lv === undefined) { v = cv; t = ct; }
          else if (cv === undefined) { v = lv; t = lt || now; }
          else if (eq(lv, cv)) { v = lv; t = Math.max(lt, ct); }
          else if (bv !== undefined && eq(lv, bv)) { v = cv; t = ct; }                                // only the cloud changed
          else if (bv !== undefined && eq(cv, bv)) { v = lv; t = lt || now; }                         // only this device changed
          else if (lv != null && cv != null) { v = merge3(bv, lv, cv, lt, ct); t = now; }            // both changed
          else if (lt >= ct) { v = lv; t = lt; } else { v = cv; t = ct; }
          out[k] = v; outTs[k] = t;
          if (!eq(v, lv === undefined ? null : lv) && !(v == null && lv == null)) changes.push([k, v, t]);
        });
        // v201: không có gì mới so với tài khoản → khỏi ghi (đỡ tốn lượt ghi, và máy khác không bị báo nhầm)
        const same = snap.exists && Object.keys(out).every(k => (out[k] == null && cData[k] == null) || eq(out[k], cData[k]))
          && Object.keys(cData).every(k => k in out);
        if (!same) {
          const doc = await packCloud(out, outTs);
          doc.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
          doc.dev = DEV;
          tx.set(ref, doc);
        }
        merged = out;
      });
      // apply what came from the cloud, without marking it as a local change
      const meta = readMeta();
      const live = reason !== 'startup' && reason !== 'signin';   // app đang mở: màn hình có thể đang giữ bản cũ
      applying = true;
      changes.forEach(([k, v, t]) => {
        const full = PREFIX + k;
        if ((meta[full] || 0) > t) return;      // changed here while syncing: keep the newer local value
        if (live && !(full in stale)) { try { stale[full] = localStorage.getItem(full); } catch (e) {} }
        try { if (v === null) localStorage.removeItem(full); else localStorage.setItem(full, v); } catch (e) {}
        meta[full] = t;
      });
      applying = false;
      writeMeta(meta);
      applying = true;
      try { localStorage.setItem(UIDK, uid); if (merged) localStorage.setItem(BASEK, JSON.stringify(merged)); } catch (e) {}
      applying = false;
      lastSync = Date.now(); setStatus('ok');
      // v204: tài khoản mới tinh (chưa có gì trên mây) vừa đăng nhập/tạo → mở màn chào mừng + bài kiểm tra trình độ
      if (fresh && reason === 'signin') {
        const nm = (user.displayName || (user.email || '').split('@')[0] || '').trim();
        try { localStorage.setItem(PREFIX + 'ob-new', nm || '1'); } catch (e) {}
        close();
        try { window.dispatchEvent(new CustomEvent('hta-new-account', { detail: { name: nm } })); } catch (e) {}
      }
      if (changes.length) { try { window.dispatchEvent(new CustomEvent('hta-synced', { detail: changes.map(c => c[0]) })); } catch (e) {} remoteChanged(reason, changes); }
    } catch (e) {
      applying = false;
      const big = e && (e.code === 'too-big' || (e.code === 'invalid-argument' && /size|maximum|bytes/i.test(e.message || '')));
      setStatus('err', big ? (canZip ? 'Dữ liệu quá lớn để đồng bộ. Hãy xoá bớt bài nghe tự tạo hoặc lịch sử dịch cũ, rồi bấm Đồng bộ ngay.'
          : 'Dữ liệu quá lớn để đồng bộ trên trình duyệt này. Hãy cập nhật trình duyệt (iPhone: iOS 16.4 trở lên) rồi thử lại.')
        : e && e.code === 'no-unzip' ? 'Trình duyệt này quá cũ để đọc tiến độ trên tài khoản. Hãy cập nhật trình duyệt (iPhone: iOS 16.4 trở lên).'
        : e && e.code === 'permission-denied' ? 'Không có quyền ghi dữ liệu (kiểm tra Firestore rules).'
        : 'Chưa đồng bộ được — kiểm tra mạng. App sẽ thử lại.');
    } finally {
      syncing = false;
      if (again) { again = false; syncNow('change'); }
    }
  }

  // progress from another device arrived: the screens read storage at start-up, so refresh them
  // cài đặt giao diện / vị trí đang xem: cập nhật ngầm, không cần báo
  const QUIET = /^(folded|season2?|autofix|shadow-(ytpos|ytdur|segpos|set|bbc-seen)|yt-seg|ipa-filter|ipa-cache|tr-ctx|tr-keep|qb-lv|qb-g|ex-level|ex-bank|ex-step|ex-v2|grammar-(track|level)|tense-level|irr-(level|cdir)|para-lv|vocab-(front|goal)|sr-set|talk-set|talk-ai|pron-(accent|rate)|backup-(at|nag))$/;
  const BAR_GAP = 5 * 60000, BAR_MUTE = 3 * 3600000;
  function remoteChanged(reason, changes) {
    const real = (changes || []).filter(c => !QUIET.test(c[0]));
    if (!real.length) return;                                   // chỉ đổi cài đặt giao diện → không báo
    let recent = 0;
    try { recent = +sessionStorage.getItem('hta-sync-reload') || 0; } catch (e) {}
    const away = reason === 'focus' && hiddenFor > 120000;      // v201: quay lại app sau ≥ 2 phút → tải lại luôn cho đúng
    if ((reason === 'startup' || reason === 'signin' || away) && Date.now() - recent > 15000) {
      try { sessionStorage.setItem('hta-sync-reload', String(Date.now())); } catch (e) {}
      showBar(reason === 'signin' ? 'Đã tải tiến độ từ tài khoản…' : 'Đã cập nhật tiến độ từ máy khác…', false);
      leaving = true;
      setTimeout(() => location.reload(), 700);
      return;
    }
    // tối đa 1 lần mỗi 30 phút; bấm ✕ thì im lặng 3 giờ. Tiến độ vẫn được lưu, lần mở app sau sẽ thấy.
    let last = 0, mute = 0;
    try { last = +localStorage.getItem('hoc-tieng-anh-syncbar-at') || 0; mute = +localStorage.getItem('hoc-tieng-anh-syncbar-mute') || 0; } catch (e) {}
    const now = Date.now();
    if (now < mute || now - last < BAR_GAP || !$('sync-bar').hidden) return;
    try { localStorage.setItem('hoc-tieng-anh-syncbar-at', String(now)); } catch (e) {}
    showBar('Có tiến độ mới từ máy khác', true);
  }
  let barTimer = 0;
  function showBar(text, withBtn) {
    $('sync-bar-text').textContent = text;
    $('sync-bar-btn').hidden = !withBtn;
    $('sync-bar-x').hidden = !withBtn;
    $('sync-bar').hidden = false;
    clearTimeout(barTimer);
    if (withBtn) barTimer = setTimeout(() => { $('sync-bar').hidden = true; }, 10000);
  }
  $('sync-bar-btn').addEventListener('click', () => location.reload());
  $('sync-bar-x').addEventListener('click', () => {
    $('sync-bar').hidden = true;
    try { localStorage.setItem('hoc-tieng-anh-syncbar-mute', String(Date.now() + BAR_MUTE)); } catch (e) {}
  });

  function setStatus(st, text) {
    status = st;
    const el = $('acct-status');
    el.className = 'acct-status' + (st === 'ok' ? ' ok' : st === 'err' ? ' err' : '');
    el.textContent = st === 'syncing' ? '⏳ Đang đồng bộ…'
      : st === 'ok' ? '✓ Đã đồng bộ lúc ' + new Date(lastSync).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
      : '⚠️ ' + (text || 'Chưa đồng bộ được');
  }
  /* v205: chưa đăng nhập → tiến độ không được lưu. Nhắc rõ ngay đầu trang. */
  const gbar = document.createElement('div');
  gbar.className = 'guest-bar'; gbar.setAttribute('role', 'note');
  { const t = document.createElement('span');
    t.textContent = (window.HS && HS.guestGrace)
      ? '⚠️ Từ nay, chưa đăng nhập thì tiến độ không được lưu. Đăng nhập ngay để giữ tiến độ hiện có — nếu không, lần mở app sau sẽ bị xoá.'
      : '⚠️ Bạn chưa đăng nhập — tiến độ học sẽ mất khi mở lại app.';
    const b = document.createElement('button'); b.type = 'button'; b.className = 'guest-bar-btn'; b.textContent = 'Đăng nhập để lưu';
    b.addEventListener('click', () => btn.click());
    gbar.appendChild(t); gbar.appendChild(b);
    const host = document.querySelector('.hero-inner'); if (host) host.appendChild(gbar); }
  const paintGuest = () => { let has = false; try { has = !!localStorage.getItem(UIDK); } catch (e) {} gbar.hidden = !!user || has; };
  paintGuest();
  function render() {
    paintGuest();
    $('acct-out').hidden = !!user; $('acct-in').hidden = !user;
    btn.classList.toggle('on', !!user);
    if (user) {
      const name = user.displayName || (user.email || '').split('@')[0] || 'Bạn';
      $('acct-label').textContent = name.split(' ').slice(-1)[0];
      $('acct-name').textContent = name; $('acct-mail').textContent = user.email || '';
      const av = $('acct-avatar');
      if (user.photoURL) { av.style.backgroundImage = `url("${user.photoURL}")`; av.textContent = ''; }
      else { av.style.backgroundImage = ''; av.textContent = name.trim().charAt(0).toUpperCase(); }
    } else $('acct-label').textContent = 'Đăng nhập';
  }
  /* v203: lời báo hiện ngay dưới các nút vừa bấm (trước đây nằm tận cuối bảng, dưới mục "Dữ liệu trên máy này",
     nên bấm "Tạo tài khoản" mà lỗi thì người dùng không thấy gì) */
  const say = (t, ok) => {
    const anchor = user ? document.querySelector('#acct-in .acct-row') : $('acct-form');
    if (anchor && msg.previousElementSibling !== anchor) anchor.after(msg);
    msg.textContent = t || ''; msg.className = 'acct-msg' + (ok ? ' ok' : '') + (t && !ok ? ' bad' : '');
    if (t) { try { msg.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) { msg.scrollIntoView(false); } }
  };
  const ERR = {
    'auth/invalid-email': 'Email chưa đúng định dạng.', 'auth/missing-password': 'Bạn chưa nhập mật khẩu.',
    'auth/weak-password': 'Mật khẩu cần ít nhất 6 ký tự.', 'auth/email-already-in-use': 'Email này đã có tài khoản — bấm "Đăng nhập".',
    'auth/invalid-credential': 'Sai email hoặc mật khẩu.', 'auth/wrong-password': 'Sai mật khẩu.', 'auth/user-not-found': 'Chưa có tài khoản với email này — bấm "Tạo tài khoản".',
    'auth/too-many-requests': 'Thử sai quá nhiều lần. Đợi một lát rồi thử lại.', 'auth/network-request-failed': 'Không có mạng. Kiểm tra kết nối rồi thử lại.',
    'auth/popup-closed-by-user': 'Bạn đã đóng cửa sổ đăng nhập.', 'auth/cancelled-popup-request': '',
    'auth/popup-blocked': 'Trình duyệt chặn cửa sổ đăng nhập Google. Hãy dùng đăng nhập bằng email.',
    'auth/operation-not-supported-in-this-environment': 'Không mở được đăng nhập Google ở đây (thường gặp khi mở app từ màn hình chính iPhone). Hãy dùng đăng nhập bằng email.',
    'auth/unauthorized-domain': 'Trang web này chưa được thêm vào Firebase (Authorized domains).',
    'auth/operation-not-allowed': 'Cách đăng nhập này chưa được bật trong Firebase.'
  };
  const fail = e => say(e && ERR[e.code] !== undefined ? ERR[e.code] : 'Có lỗi: ' + ((e && (e.code || e.message)) || 'không rõ'));

  // ---- load Firebase only when it's needed ----
  let ready = null;
  function loadFirebase() {
    if (ready) return ready;
    const add = (base, f) => new Promise((res, rej) => { const sc = document.createElement('script'); sc.src = base + f; sc.onload = res; sc.onerror = rej; document.head.appendChild(sc); });
    const loadFrom = base => add(base, 'firebase-app-compat.js').then(() => Promise.all([add(base, 'firebase-auth-compat.js'), add(base, 'firebase-firestore-compat.js')]));
    ready = (window.firebase && window.firebase.auth ? Promise.resolve()
      : loadFrom(FB).catch(() => loadFrom('https://cdn.jsdelivr.net/npm/firebase@10.12.2/')))
      .then(() => {
        const app = firebase.apps && firebase.apps.length ? firebase.app() : firebase.initializeApp(FIREBASE_CONFIG);
        auth = firebase.auth(app); db = firebase.firestore(app);
        auth.onAuthStateChanged(u => {
          const was = user; user = u || null; render();
          userCbs.forEach(cb => { try { cb(user); } catch (e) {} });
          if (user && (!was || was.uid !== user.uid)) { syncNow(pendingSignin ? 'signin' : 'startup'); pendingSignin = false; listen(user.uid); }
          if (!user) listen(null);
        });
      });
    ready.catch(() => { ready = null; });
    return ready;
  }
  /* v201: nghe thay đổi trên tài khoản. Máy khác vừa lưu tiến độ → máy này đồng bộ ngay,
     không cần đợi chuyển tab hay mở lại app (máy tính để tab mở cả ngày vẫn nhận được). */
  let unlisten = null, remoteTimer = 0, leaving = false, hiddenAt = 0, hiddenFor = 0;
  function listen(uid) {
    if (unlisten) { try { unlisten(); } catch (e) {} unlisten = null; }
    if (!uid || !db) return;
    try {
      unlisten = db.collection('users').doc(uid).onSnapshot(sn => {
        if (!sn || (sn.metadata && sn.metadata.hasPendingWrites) || !sn.exists) return;
        const d = sn.data() || {};
        if (d.dev === DEV || leaving) return;
        clearTimeout(remoteTimer);
        remoteTimer = setTimeout(() => { if (user && user.uid === uid) syncNow('remote'); }, 1200);
      }, () => {});
    } catch (e) {}
  }
  // dự phòng: mạng chập chờn làm rơi tín hiệu → cứ 5 phút (khi đang xem app) kiểm tra lại một lần
  setInterval(() => { if (user && document.visibilityState === 'visible' && !syncing && Date.now() - lastSync > 5 * 60000) syncNow('poll'); }, 60000);
  // shared with the feedback module
  const userCbs = [];
  window.HTA_FB = { load: loadFirebase, get db() { return db; }, get user() { return user; }, onUser: cb => { userCbs.push(cb); } };
  // signed-in before on this device? connect straight away; otherwise wait until the sheet is opened
  if (localStorage.getItem(UIDK)) loadFirebase().catch(() => {});

  const open = () => { sheet.hidden = false; document.body.classList.add('vsheet-open'); say(''); if (user) setStatus(status || 'ok');
    loadFirebase().catch(() => say('Không tải được phần đăng nhập. Kiểm tra mạng rồi thử lại.')); };
  const close = () => { sheet.hidden = true; document.body.classList.remove('vsheet-open'); };
  btn.addEventListener('click', open);
  sheet.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', close));

  const busyBtns = on => ['acct-signin', 'acct-signup', 'acct-google', 'acct-forgot'].forEach(id => { const b = $(id); if (b) b.disabled = on; });
  const withAuth = (fn, wait) => async () => {
    say(wait || ''); busyBtns(true);
    let loaded = false;
    try { await loadFirebase(); loaded = true; pendingSignin = true; await fn(); say(''); }
    catch (e) { pendingSignin = false; if (!loaded) say('Không tải được phần đăng nhập. Kiểm tra mạng rồi thử lại.'); else fail(e); }
    busyBtns(false);
  };
  $('acct-google').addEventListener('click', withAuth(() => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())));
  const creds = () => [$('acct-email').value.trim(), $('acct-pass').value];
  const credsOk = () => { const [e, p] = creds(); if (!e) { say('Nhập email trước nhé.'); return false; } if (!p) { say('Nhập mật khẩu trước nhé.'); return false; } return true; };
  $('acct-form').addEventListener('submit', e => { e.preventDefault(); if (credsOk()) withAuth(() => auth.signInWithEmailAndPassword(...creds()), 'Đang đăng nhập…')(); });
  $('acct-signup').addEventListener('click', () => {
    if (!credsOk()) return;
    const [e, p] = creds();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) { say('Email chưa đúng định dạng (ví dụ: ten@gmail.com).'); return; }
    if (p.length < 6) { say('Mật khẩu cần ít nhất 6 ký tự.'); return; }
    withAuth(() => auth.createUserWithEmailAndPassword(e, p), 'Đang tạo tài khoản…')();
  });
  $('acct-forgot').addEventListener('click', async () => {
    const email = $('acct-email').value.trim();
    if (!email) { say('Nhập email của bạn vào ô Email trước.'); return; }
    try { await loadFirebase(); await auth.sendPasswordResetEmail(email); say('Đã gửi email đặt lại mật khẩu. Kiểm tra hộp thư (cả mục Spam).', true); } catch (e) { fail(e); }
  });
  $('acct-sync').addEventListener('click', () => syncNow('manual'));
  // let people remove everything they stored with us
  $('acct-del').addEventListener('click', async () => {
    const b = $('acct-del');
    if (b.dataset.sure !== '1') {
      b.dataset.sure = '1'; b.textContent = '⚠️ Bấm lần nữa để xoá vĩnh viễn tài khoản và tiến độ trên tài khoản';
      setTimeout(() => { b.dataset.sure = ''; b.textContent = 'Xoá tài khoản và dữ liệu đã lưu…'; }, 5000);
      return;
    }
    b.dataset.sure = ''; b.textContent = 'Xoá tài khoản và dữ liệu đã lưu…';
    try {
      const u = auth.currentUser;
      if (!u) return;
      await db.collection('users').doc(u.uid).delete();
      await u.delete();
      applying = true; try { localStorage.removeItem(UIDK); localStorage.removeItem(BASEK); localStorage.removeItem(META); } catch (e) {} applying = false;
      say('Đã xoá tài khoản và dữ liệu trên tài khoản. Tiến độ trên máy này vẫn còn.', true);
    } catch (e) {
      if (e && e.code === 'auth/requires-recent-login') say('Để bảo mật, hãy đăng xuất rồi đăng nhập lại, sau đó bấm xoá lần nữa.');
      else fail(e);
    }
  });
  // v191: đăng xuất = lưu nốt lên tài khoản rồi xoá tiến độ khỏi máy này (người khác dùng máy sẽ bắt đầu sạch).
  // Chưa lưu được (mất mạng…) thì không đăng xuất, để không mất dữ liệu.
  $('acct-out-btn').addEventListener('click', async () => {
    const b = $('acct-out-btn');
    if (b.disabled) return;
    b.disabled = true; const old = b.textContent; b.textContent = 'Đang lưu lên tài khoản…';
    try {
      await syncNow('manual');
      for (let i = 0; i < 60 && syncing; i++) await new Promise(r => setTimeout(r, 250));   // đợi lần đồng bộ đang chạy
      if (status !== 'ok') { say('Chưa lưu được tiến độ lên tài khoản (kiểm tra mạng), nên chưa đăng xuất để không mất dữ liệu. Thử lại khi có mạng nhé.'); return; }
      listen(null);
      await auth.signOut();
      applying = true;
      try { localStorage.removeItem(UIDK); localStorage.removeItem(BASEK); localStorage.removeItem(META); } catch (e) {}
      applying = false;
      b.textContent = 'Đang dọn máy…';
      if (window.hsWipeAccountData) await window.hsWipeAccountData();
      say('Đã đăng xuất và xoá tiến độ khỏi máy này. Đăng nhập lại là có lại toàn bộ.', true);
      setTimeout(() => location.reload(), 900);
    } catch (e) { fail(e); }
    finally { b.disabled = false; b.textContent = old; }
  });
  // coming back to the app: pick up progress made on another device
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') hiddenAt = Date.now();
    else hiddenFor = hiddenAt ? Date.now() - hiddenAt : 0;
    if (document.visibilityState === 'visible' && user && Date.now() - lastSync > 30000) syncNow('focus');
    if (document.visibilityState === 'hidden' && user && pushTimer) { clearTimeout(pushTimer); pushTimer = null; syncNow('change'); }
  });
})();
