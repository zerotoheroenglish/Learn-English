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
  const SKIP = new Set([PREFIX + 'voice', META, UIDK, BASEK, PREFIX + 'autofix-open', PREFIX + 'backup-at', PREFIX + 'backup-nag', PREFIX + 'ipa-cache', PREFIX + 'talk-key', PREFIX + 'talk-model', PREFIX + 'talk-models', PREFIX + 'syncbar-at', PREFIX + 'syncbar-mute']);   // v128: cache IPA tự tạo lại được, không cần đẩy lên tài khoản   // device-specific / bookkeeping
  const FB = 'https://www.gstatic.com/firebasejs/10.12.2/';
  const $ = id => document.getElementById(id);
  const sheet = $('asheet'), msg = $('acct-msg');
  let auth = null, db = null, user = null, syncing = false, again = false, lastSync = 0, pushTimer = null, applying = false, pendingSignin = false, status = '';

  // ---- remember when each key last changed on this device ----
  const readMeta = () => { try { return JSON.parse(localStorage.getItem(META) || '{}') || {}; } catch (e) { return {}; } };
  const writeMeta = m => { applying = true; try { localStorage.setItem(META, JSON.stringify(m)); } catch (e) {} applying = false; };
  const tracked = k => typeof k === 'string' && k.startsWith(PREFIX) && !SKIP.has(k);
  const proto = Storage.prototype, oSet = proto.setItem, oRemove = proto.removeItem;
  proto.setItem = function (k, v) {
    const track = !applying && this === window.localStorage && tracked(k) && this.getItem(k) !== String(v);
    oSet.call(this, k, v);
    if (track) { const m = readMeta(); m[k] = Date.now(); writeMeta(m); schedulePush(); }
  };
  proto.removeItem = function (k) {
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
  async function syncNow(reason) {
    if (!user || !db) return;
    if (syncing) { again = true; return; }
    syncing = true; setStatus('syncing');
    const uid = user.uid, prevUid = localStorage.getItem(UIDK);
    let changes = [], merged = null;
    try {
      const ref = db.collection('users').doc(uid);
      await db.runTransaction(async tx => {
        changes = [];
        const snap = await tx.get(ref);
        const cloud = snap.exists ? snap.data() : {};
        const cData = cloud.data || {}, cTs = cloud.ts || {};
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
          if (otherUser) { v = cv === undefined ? null : cv; t = ct || now; }                      // another account on this device: use theirs
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
        if (JSON.stringify(out).length > 900000) throw Object.assign(new Error('too-big'), { code: 'too-big' });
        tx.set(ref, { v: 1, data: out, ts: outTs, updatedAt: firebase.firestore.FieldValue.serverTimestamp() });
        merged = out;
      });
      // apply what came from the cloud, without marking it as a local change
      const meta = readMeta();
      applying = true;
      changes.forEach(([k, v, t]) => {
        const full = PREFIX + k;
        if ((meta[full] || 0) > t) return;      // changed here while syncing: keep the newer local value
        try { if (v === null) localStorage.removeItem(full); else localStorage.setItem(full, v); } catch (e) {}
        meta[full] = t;
      });
      applying = false;
      writeMeta(meta);
      applying = true;
      try { localStorage.setItem(UIDK, uid); if (merged) localStorage.setItem(BASEK, JSON.stringify(merged)); } catch (e) {}
      applying = false;
      lastSync = Date.now(); setStatus('ok');
      if (changes.length) remoteChanged(reason, changes);
    } catch (e) {
      applying = false;
      setStatus('err', e && e.code === 'too-big' ? 'Dữ liệu quá lớn để đồng bộ (bài nghe tự tạo quá dài).'
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
  const BAR_GAP = 30 * 60000, BAR_MUTE = 3 * 3600000;
  function remoteChanged(reason, changes) {
    const real = (changes || []).filter(c => !QUIET.test(c[0]));
    if (!real.length) return;                                   // chỉ đổi cài đặt giao diện → không báo
    let recent = 0;
    try { recent = +sessionStorage.getItem('hta-sync-reload') || 0; } catch (e) {}
    if ((reason === 'startup' || reason === 'signin') && Date.now() - recent > 15000) {
      try { sessionStorage.setItem('hta-sync-reload', String(Date.now())); } catch (e) {}
      showBar(reason === 'signin' ? 'Đã tải tiến độ từ tài khoản…' : 'Đã cập nhật tiến độ từ máy khác…', false);
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
  function render() {
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
  const say = (t, ok) => { msg.textContent = t || ''; msg.className = 'acct-msg' + (ok ? ' ok' : ''); };
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
          if (user && (!was || was.uid !== user.uid)) { syncNow(pendingSignin ? 'signin' : 'startup'); pendingSignin = false; }
        });
      });
    ready.catch(() => { ready = null; });
    return ready;
  }
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

  const withAuth = fn => async () => { say(''); try { await loadFirebase(); pendingSignin = true; await fn(); } catch (e) { pendingSignin = false; fail(e); } };
  $('acct-google').addEventListener('click', withAuth(() => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())));
  const creds = () => [$('acct-email').value.trim(), $('acct-pass').value];
  $('acct-form').addEventListener('submit', e => { e.preventDefault(); withAuth(() => auth.signInWithEmailAndPassword(...creds()))(); });
  $('acct-signup').addEventListener('click', withAuth(() => auth.createUserWithEmailAndPassword(...creds())));
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
  $('acct-out-btn').addEventListener('click', async () => {
    try { await syncNow('manual'); await auth.signOut(); say('Đã đăng xuất. Tiến độ vẫn còn trên máy này.', true); } catch (e) { fail(e); }
  });
  // coming back to the app: pick up progress made on another device
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && user && Date.now() - lastSync > 30000) syncNow('focus');
    if (document.visibilityState === 'hidden' && user && pushTimer) { clearTimeout(pushTimer); pushTimer = null; syncNow('change'); }
  });
})();
