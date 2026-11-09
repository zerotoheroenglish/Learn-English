/* v128 — Sao lưu / khôi phục và thông tin bộ nhớ (trong khung Tài khoản & đồng bộ) */
(() => {
  const HS = window.HS || {}, P = 'hoc-tieng-anh-', BK = P + 'backup-at', SEEN = P + 'backup-nag';
  const $ = id => document.getElementById(id);
  const box = $('hs-box'); if (!box) return;
  const EVK = P + 'backup-every';
  const DEVICE = new Set([P + 'voice', P + 'sync-meta', P + 'sync-uid', P + 'sync-base', P + 'autofix-open', BK, SEEN, EVK, P + 'talk-key', P + 'talk-model', P + 'talk-models', P + 'talk-prov', P + 'talk-key-groq', P + 'talk-model-groq', P + 'talk-models-groq', P + 'talk-key-openai', P + 'talk-model-openai', P + 'talk-models-openai']);
  const kb = n => n < 1024 * 1024 ? Math.max(1, Math.round(n / 1024)) + ' KB' : (n / 1048576).toFixed(1) + ' MB';
  const keys = () => { const o = []; for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k && k.startsWith(P)) o.push(k); } return o; };
  const lsBytes = () => keys().reduce((s, k) => s + (k.length + (localStorage.getItem(k) || '').length) * 2, 0);
  const fmtDate = t => new Date(t).toLocaleString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  const LIMIT = 5 * 1024 * 1024;
  const signedIn = () => { try { return !!localStorage.getItem(P + 'sync-uid'); } catch (e) { return false; } };

  function render() {
    const used = lsBytes(), pct = Math.min(100, Math.round(used / LIMIT * 100));
    const bar = $('hs-bar'); bar.style.width = Math.max(2, pct) + '%'; bar.className = pct >= 80 ? 'hot' : '';
    const last = +localStorage.getItem(BK) || 0;
    const L = [];
    L.push(`📦 Tiến độ đang dùng <b>${kb(used)}</b> / khoảng 5 MB của trình duyệt (${pct}%).`);
    L.push(HS.idb ? `🗂 Bản dự phòng trong IndexedDB: <b>đang bật</b> — nếu bộ nhớ chính bị trống, app tự chép lại.` : `🗂 Trình duyệt này không cho dùng IndexedDB (thường do chế độ ẩn danh).`);
    if (HS.persisted === true) L.push('🔒 Lưu bền vững: <b>đã bật</b> — trình duyệt sẽ không tự xoá khi máy thiếu dung lượng.');
    else if (HS.persisted === false) L.push('🔓 Lưu bền vững: <b>chưa được cấp</b> — trình duyệt có thể tự dọn khi máy đầy. Thêm app ra màn hình chính để an toàn hơn.');
    L.push(signedIn() ? '☁️ Đã đăng nhập: tiến độ còn được lưu trên tài khoản.' : '⚠️ Chưa đăng nhập: tiến độ không được lưu — mở lại app là mất. Đăng nhập để lưu.');
    L.push(last ? `🕒 Sao lưu gần nhất: <b>${fmtDate(last)}</b>` : '🕒 Bạn <b>chưa tải file sao lưu</b> lần nào.');
    if (HS.quotaHit || pct >= 80) L.push('⚠️ Bộ nhớ trình duyệt sắp đầy. Hãy tải file sao lưu, rồi xoá bớt bài nghe tự tạo hoặc lịch sử dịch cũ.');
    const hold = (HS.hold || []).length;
    if (hold) L.push(`⚠️ Còn <b>${hold} mục</b> chưa khôi phục được vì bộ nhớ trình duyệt đầy. Các mục này vẫn được giữ an toàn trong bản dự phòng và có trong file sao lưu. Dọn bớt dữ liệu rồi bấm <button type="button" class="acct-link" id="hs-retry">Thử khôi phục lại</button>.`);
    $('hs-lines').innerHTML = L.map(x => `<div>${x}</div>`).join('');
    const rt = $('hs-retry');
    if (rt) rt.addEventListener('click', async () => {
      rt.disabled = true;
      const r = await HS.retryHold();
      if (r.done) await r.done;
      say(r.fail ? `Khôi phục thêm được ${r.ok}/${r.total} mục. Vẫn còn ${r.fail} mục chưa đủ chỗ.` : `Đã khôi phục đủ ${r.ok} mục. App đang tải lại…`, !r.fail);
      if (!r.fail && r.ok) setTimeout(() => location.reload(), 900); else render();
    });
  }

  function snapshot() {
    const data = {};
    keys().forEach(k => { if (!DEVICE.has(k)) data[k.slice(P.length)] = localStorage.getItem(k); });
    return { app: 'hoc-tieng-anh', v: 1, at: new Date().toISOString(), keys: Object.keys(data).length, data };
  }
  async function doExport() {
    const snap = snapshot();
    if ((HS.hold || []).length && HS.idbAll) {
      try { const all = await HS.idbAll(); HS.hold.forEach(k => { if (typeof all[k] === 'string' && !DEVICE.has(k)) snap.data[k.slice(P.length)] = all[k]; }); snap.keys = Object.keys(snap.data).length; } catch (e) {}
    }
    const d = new Date(), pad = n => String(n).padStart(2, '0');
    const name = `hoc-tieng-anh-sao-luu-${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}.json`;
    const blob = new Blob([JSON.stringify(snap)], { type: 'application/json' });
    const ios = /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    let done = false;
    if (ios && navigator.canShare) {
      try {
        const file = new File([blob], name, { type: 'application/json' });
        if (navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: 'Sao lưu Học Tiếng Anh' }); done = true; }
      } catch (e) { if (e && e.name === 'AbortError') return; }
    }
    if (!done) {
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name;
      document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
    }
    try { localStorage.setItem(BK, String(Date.now())); } catch (e) {}
    render();
    say(`Đã tạo file sao lưu (${snap.keys} mục). Hãy cất file vào iCloud Drive / Google Drive.`, true);
  }
  function say(t, ok) { const m = $('acct-msg'); if (m) { m.textContent = t; m.className = 'acct-msg' + (ok ? ' ok' : ''); } }

  function doImport(file) {
    const r = new FileReader();
    r.onload = () => {
      let snap = null;
      try { snap = JSON.parse(r.result); } catch (e) {}
      if (!snap || snap.app !== 'hoc-tieng-anh' || !snap.data || typeof snap.data !== 'object') return say('File này không phải bản sao lưu của app Học Tiếng Anh.');
      // v137: nhận mọi tên khoá (chữ hoa / thường, số, gạch dưới, dấu chấm…), chỉ loại khoá rỗng, quá dài hoặc có khoảng trắng / ký tự điều khiển
      const okKey = k => typeof k === 'string' && k.length > 0 && k.length <= 160 && !/[\u0000-\u0020\u007f]/.test(k);
      const all = Object.keys(snap.data);
      const ks = all.filter(k => okKey(k) && typeof snap.data[k] === 'string');
      const skipped = all.length - ks.length;
      if (!ks.length) return say('File sao lưu không có dữ liệu.');
      const when = snap.at ? fmtDate(Date.parse(snap.at)) : 'không rõ ngày';
      // v152: xem trước nội dung, so sánh với tiến độ đang có rồi mới khôi phục
      const data2 = {}; ks.forEach(k => { data2[k] = snap.data[k]; });
      preview(data2, `File sao lưu ngày ${when}`, (+snap.v > 1 ? '⚠️ File được tạo từ phiên bản app mới hơn; một số mục có thể chưa dùng được ở bản này. ' : '') + (skipped ? skipped + ' mục không hợp lệ sẽ được bỏ qua.' : ''), () => applyData(data2));
      return;
      // (cách cũ, giữ lại để tham khảo)
      const newer = +snap.v > 1 ? '\n\n⚠️ File được tạo từ phiên bản app mới hơn; một số mục có thể chưa dùng được ở bản này.' : '';
      if (!confirm(`Khôi phục bản sao lưu ngày ${when} (${ks.length} mục)?\n\nTiến độ hiện tại trên máy này sẽ được thay bằng tiến độ trong file.${skipped ? '\n(' + skipped + ' mục không hợp lệ sẽ bị bỏ qua.)' : ''}${newer}`)) return;
      // thay toàn bộ: xoá mục cũ (trừ cài đặt riêng của máy), ghi mục trong file
      const keep = new Set(ks.map(k => P + k));
      keys().forEach(k => { if (!DEVICE.has(k) && !keep.has(k)) { try { localStorage.removeItem(k); } catch (e) {} } });
      let ok = 0, fail = 0;
      ks.forEach(k => { if (DEVICE.has(P + k)) return; try { localStorage.setItem(P + k, snap.data[k]); ok++; } catch (e) { fail++; } });
      // mục chưa đủ chỗ: đã được giữ trong bản dự phòng (IndexedDB) và vào danh sách chờ khôi phục
      say(fail ? `Mới khôi phục được ${ok}/${ok + fail} mục. ${fail} mục chưa ghi được vì bộ nhớ trình duyệt đầy; các mục này vẫn được giữ trong bản dự phòng. Dọn bớt dữ liệu rồi bấm “Thử khôi phục lại”.` : `Đã khôi phục đủ ${ok} mục. App đang tải lại…`, !fail);
      if (fail) render();
      if (!fail) setTimeout(() => location.reload(), 900);
    };
    r.onerror = () => say('Không đọc được file.');
    r.readAsText(file);
  }

  /* ---------- v152: khôi phục (dùng chung cho file và bản sao tự động), có lưu bản "trước khi khôi phục" để hoàn tác ---------- */
  async function applyData(data) {
    try { await snapPut('undo', snapshot(), 'Trước khi khôi phục'); } catch (e) {}
    const ks = Object.keys(data);
    const keep = new Set(ks.map(k => P + k));
    keys().forEach(k => { if (!DEVICE.has(k) && !keep.has(k)) { try { localStorage.removeItem(k); } catch (e) {} } });
    let ok = 0, fail = 0;
    ks.forEach(k => { if (DEVICE.has(P + k)) return; try { localStorage.setItem(P + k, data[k]); ok++; } catch (e) { fail++; } });
    say(fail ? `Mới khôi phục được ${ok}/${ok + fail} mục; ${fail} mục chưa ghi được vì bộ nhớ trình duyệt đầy.` : `Đã khôi phục ${ok} mục. App đang tải lại…`, !fail);
    if (fail) render(); else setTimeout(() => location.reload(), 900);
  }
  /* ---------- tóm tắt nội dung một bản sao (để so sánh trước khi khôi phục) ---------- */
  function summarize(get) {
    const J = k => { try { const v = get(k); return v ? JSON.parse(v) : null; } catch (e) { return null; } };
    const obj = k => { const v = J(k); return v && typeof v === 'object' ? v : {}; };
    const n = o => Object.keys(o).length;
    const srs = obj('vocab-srs'), gx = obj('grammar-srs'), mk = obj('mistakes'), rd = obj('read'), wr = obj('write'), ls = obj('listen2'), sp = obj('speak2'), sh = obj('shadow-prog'), act = obj('activity'), cards = obj('sr-cards'), irr = obj('irr-srs');
    const days = Object.keys(act).map(Number).filter(Boolean).sort((a, b) => b - a);
    const toDate = d => { const x = new Date(d * 864e5 + new Date().getTimezoneOffset() * 60000); return x.getDate() + '/' + (x.getMonth() + 1) + '/' + x.getFullYear(); };
    return [
      ['📚 Từ vựng đã nhớ chắc', Object.values(srs).filter(r => r && (r.s || 0) >= 3).length],
      ['📚 Từ đang theo dõi', n(srs)],
      ['📐 Bài ngữ pháp đã làm', Object.values(gx).filter(r => r && r.n).length],
      ['🔀 Động từ bất quy tắc đã ôn', n(irr)],
      ['📖 Sổ từ của bạn', n(cards)],
      ['📕 Lỗi chưa khắc phục', Object.values(mk).filter(x => x && !x.fx).length],
      ['📖 Bài đọc đã làm', Object.values(rd).filter(x => x && x.best != null).length],
      ['🎧 Hội thoại đã nghe', Object.values(ls).filter(x => x && x.best != null).length],
      ['✍️ Đề viết đã chấm', Object.values(wr).filter(x => x && x.best != null).length],
      ['🎤 Đề nói đã luyện', Object.values(sp).filter(x => x && x.n).length],
      ['🎙️ Bài Shadowing đã luyện', n(sh)],
      ['📅 Số ngày có học (nhật ký mới)', days.length],
      ['📅 Ngày học gần nhất', days.length ? toDate(days[0]) : '—']
    ];
  }
  function preview(data, title, note, onRestore) {
    const cur = summarize(k => localStorage.getItem(P + k)), nxt = summarize(k => data[k]);
    const ov = document.createElement('div'); ov.className = 'hs-modal'; ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true');
    const box2 = document.createElement('div'); box2.className = 'hs-mbox';
    const h = document.createElement('h3'); h.textContent = '👁 Xem trước khi khôi phục'; box2.appendChild(h);
    const sub = document.createElement('p'); sub.className = 'acct-note'; sub.textContent = title + ' · ' + Object.keys(data).length + ' mục dữ liệu.'; box2.appendChild(sub);
    const tb = document.createElement('table'); tb.className = 'hs-cmp';
    tb.innerHTML = '<thead><tr><th></th><th>Trên máy</th><th>Trong bản sao</th></tr></thead>';
    const body = document.createElement('tbody');
    cur.forEach(([label, a], i) => {
      const b = nxt[i][1], tr = document.createElement('tr');
      const less = typeof a === 'number' && typeof b === 'number' && b < a;
      tr.innerHTML = `<td></td><td>${a}</td><td class="${less ? 'less' : b !== a ? 'more' : ''}">${b}${less ? ' ↓' : ''}</td>`;
      tr.firstChild.textContent = label;
      body.appendChild(tr);
    });
    tb.appendChild(body); box2.appendChild(tb);
    const lost = cur.some(([, a], i) => typeof a === 'number' && typeof nxt[i][1] === 'number' && nxt[i][1] < a);
    const warn = document.createElement('p'); warn.className = 'acct-note hs-warn';
    warn.textContent = (lost ? '⚠️ Bản sao có ít tiến độ hơn hiện tại ở các dòng có dấu ↓. ' : '') + 'Khôi phục sẽ THAY toàn bộ tiến độ trên máy bằng bản sao này. App tự lưu lại tiến độ hiện tại để bạn có thể hoàn tác. ' + (note || '');
    box2.appendChild(warn);
    const row = document.createElement('div'); row.className = 'acct-row';
    const go = document.createElement('button'); go.className = 'btn-primary'; go.textContent = '↩️ Khôi phục bản này';
    const no = document.createElement('button'); no.className = 'btn-ghost'; no.textContent = 'Huỷ';
    const close = () => { ov.remove(); document.removeEventListener('keydown', esc); };
    const esc = e => { if (e.key === 'Escape') close(); };
    go.addEventListener('click', () => { close(); onRestore(); });
    no.addEventListener('click', close);
    ov.addEventListener('click', e => { if (e.target === ov) close(); });
    document.addEventListener('keydown', esc);
    row.appendChild(go); row.appendChild(no); box2.appendChild(row);
    ov.appendChild(box2); document.body.appendChild(ov);
    setTimeout(() => { try { no.focus(); } catch (e) {} }, 30);
  }
  /* ---------- bản sao tự động mỗi ngày (IndexedDB riêng, giữ 7 bản) ---------- */
  const SDB = 'hta-snap', KEEP = 7;
  let sdbP = null;
  const sdb = () => sdbP || (sdbP = new Promise((res, rej) => {
    try { if (!window.indexedDB) return rej(new Error('no idb')); const r = indexedDB.open(SDB, 1); r.onupgradeneeded = () => { r.result.createObjectStore('meta'); r.result.createObjectStore('data'); }; r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); } catch (e) { rej(e); }
  }));
  const req = rq => new Promise((res, rej) => { rq.onsuccess = () => res(rq.result); rq.onerror = () => rej(rq.error); });
  async function snapPut(key, snap, label) {
    const db = await sdb(), str = JSON.stringify(snap.data);
    const tx = db.transaction(['meta', 'data'], 'readwrite');
    tx.objectStore('data').put(snap.data, key);
    tx.objectStore('meta').put({ at: Date.now(), keys: snap.keys, size: str.length * 2, sig: sig(str), label: label || '' }, key);
    await new Promise((res, rej) => { tx.oncomplete = res; tx.onerror = () => rej(tx.error); tx.onabort = () => rej(tx.error); });
  }
  async function snapMeta() {
    const db = await sdb(), tx = db.transaction('meta'), st = tx.objectStore('meta');
    const [ks, vs] = await Promise.all([req(st.getAllKeys()), req(st.getAll())]);
    return ks.map((k, i) => Object.assign({ key: k }, vs[i]));
  }
  async function snapData(key) { const db = await sdb(); return req(db.transaction('data').objectStore('data').get(key)); }
  async function snapDel(key) { const db = await sdb(); const tx = db.transaction(['meta', 'data'], 'readwrite'); tx.objectStore('meta').delete(key); tx.objectStore('data').delete(key); return new Promise(r => { tx.oncomplete = r; tx.onerror = r; }); }
  function sig(str) { let h = 2166136261; const step = Math.max(1, Math.floor(str.length / 200000)); for (let i = 0; i < str.length; i += step) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return str.length + ':' + (h >>> 0); }
  const dayNo = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / 864e5);
  let snapping = false;
  async function autoSnap(force) {
    if (snapping || keys().length < 5) return; snapping = true;
    try {
      const d = dayNo(), list = await snapMeta(), days = list.filter(x => typeof x.key === 'number').sort((a, b) => b.key - a.key);
      if (!force && days[0] && days[0].key === d) return;
      const snap = snapshot(), s2 = sig(JSON.stringify(snap.data));
      if (!force && days[0] && days[0].sig === s2) return;          // không có gì thay đổi
      await snapPut(d, snap);
      const all = (await snapMeta()).filter(x => typeof x.key === 'number').sort((a, b) => b.key - a.key);
      for (const x of all.slice(KEEP)) await snapDel(x.key);
      renderSnaps();
    } catch (e) {} finally { snapping = false; }
  }
  async function renderSnaps() {
    const el = $('hs-snaps'); if (!el) return;
    let list = [];
    try { list = await snapMeta(); } catch (e) { el.innerHTML = '<div class="acct-note">🗓️ Trình duyệt này không cho lưu bản sao tự động (thường do chế độ ẩn danh).</div>'; return; }
    list.sort((a, b) => (b.at || 0) - (a.at || 0));
    el.innerHTML = '';
    const h = document.createElement('div'); h.className = 'hs-sh';
    h.textContent = `🗓️ Bản sao tự động trên máy (${list.filter(x => typeof x.key === 'number').length}/${KEEP}) · tự lưu mỗi ngày bạn học`;
    el.appendChild(h);
    if (!list.length) { const p2 = document.createElement('div'); p2.className = 'acct-note'; p2.textContent = 'Chưa có bản nào. App sẽ tự lưu bản đầu tiên sau ít phút.'; el.appendChild(p2); }
    list.forEach(x => {
      const r = document.createElement('div'); r.className = 'hs-snap' + (x.key === 'undo' ? ' undo' : '');
      const t = document.createElement('span'); t.textContent = (x.key === 'undo' ? '↶ ' + (x.label || 'Trước khi khôi phục') + ' · ' : '') + fmtDate(x.at) + ' · ' + x.keys + ' mục · ' + kb(x.size || 0);
      const b1 = document.createElement('button'); b1.className = 'btn-ghost'; b1.textContent = x.key === 'undo' ? '↶ Hoàn tác' : '👁 Xem'; b1.type = 'button';
      b1.addEventListener('click', async () => { try { const data = await snapData(x.key); if (!data) return say('Không đọc được bản sao này.'); preview(data, (x.key === 'undo' ? 'Bản trước lần khôi phục gần nhất' : 'Bản sao tự động') + ' · ' + fmtDate(x.at), '', () => applyData(data)); } catch (e) { say('Không đọc được bản sao này.'); } });
      const b2 = document.createElement('button'); b2.className = 'btn-ghost'; b2.textContent = '⬇️'; b2.type = 'button'; b2.title = 'Tải bản này thành file'; b2.setAttribute('aria-label', 'Tải bản này thành file');
      b2.addEventListener('click', async () => { try { const data = await snapData(x.key); if (!data) return; const blob = new Blob([JSON.stringify({ app: 'hoc-tieng-anh', v: 1, at: new Date(x.at).toISOString(), keys: Object.keys(data).length, data })], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); const d = new Date(x.at); a.download = `hoc-tieng-anh-sao-luu-${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}.json`; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500); } catch (e) {} });
      r.appendChild(t); r.appendChild(b1); r.appendChild(b2); el.appendChild(r);
    });
  }
  // chu kỳ nhắc tải file: mặc định 14 ngày (chưa đăng nhập) / 30 ngày (đã đăng nhập, vì còn bản trên tài khoản)
  const every = () => { try { const v = localStorage.getItem(EVK); if (v != null && v !== '') return +v; } catch (e) {} return signedIn() ? 30 : 14; };
  const evSel = $('hs-every');
  if (evSel) { evSel.value = String(every()); evSel.addEventListener('change', () => { try { localStorage.setItem(EVK, evSel.value); } catch (e) {} say(+evSel.value ? `Sẽ nhắc tải file sao lưu nếu quá ${evSel.value} ngày chưa tải.` : 'Đã tắt nhắc sao lưu.', true); }); }
  window.hsSnapNow = () => autoSnap(true);
  // v191: đăng xuất → xoá tiến độ của tài khoản khỏi máy (đã lưu trên tài khoản), kể cả bản sao tự động,
  // để người dùng khác trên cùng máy bắt đầu sạch. Chỉ giữ vài cài đặt của máy.
  const KEEP_ON_WIPE = new Set([P + 'voice', P + 'onboard', P + 'autofix-open', EVK]);
  window.hsWipeAccountData = async () => {
    window.__htaWiped = true;
    keys().forEach(k => { if (!KEEP_ON_WIPE.has(k)) try { localStorage.removeItem(k); } catch (e) {} });
    try { const db = await sdb(); const tx = db.transaction(['meta', 'data'], 'readwrite'); tx.objectStore('meta').clear(); tx.objectStore('data').clear(); await new Promise(r => { tx.oncomplete = r; tx.onerror = r; tx.onabort = r; }); } catch (e) {}
    await new Promise(r => setTimeout(r, 700));   // đợi bản dự phòng IndexedDB ghi xong việc xoá
  };

  $('hs-export').addEventListener('click', doExport);
  $('hs-import').addEventListener('click', () => {
    // v205: chưa đăng nhập thì tiến độ không được giữ → khôi phục xong mở lại app là mất. Đăng nhập trước đã.
    if (!signedIn()) {
      say('Hãy đăng nhập (hoặc tạo tài khoản) ở phía trên trước, rồi bấm "Khôi phục từ file" — tiến độ sẽ được lưu vào tài khoản.');
      const m = $('acct-msg'); if (m) try { m.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (e) {}
      const em = $('acct-email'); if (em) setTimeout(() => { try { em.focus({ preventScroll: true }); } catch (e) {} }, 400);
      return;
    }
    $('hs-file').value = ''; $('hs-file').click();
  });
  $('hs-file').addEventListener('change', e => { const f = e.target.files && e.target.files[0]; if (f) doImport(f); });
  const acct = $('acct-btn'); if (acct) acct.addEventListener('click', () => setTimeout(() => { render(); renderSnaps(); if (evSel) evSel.value = String(every()); }, 0));
  window.addEventListener('hs-ready', render);
  render();

  // thông báo nhỏ, không chặn màn hình
  const bar = document.createElement('div'); bar.className = 'sync-bar hs-bar-msg'; bar.hidden = true;
  bar.innerHTML = '<span></span><button>Mở</button>'; document.body.appendChild(bar);
  const toast = (t, ms) => { bar.querySelector('span').textContent = t; bar.hidden = false; clearTimeout(bar._t); bar._t = setTimeout(() => { bar.hidden = true; }, ms || 9000); };
  bar.querySelector('button').addEventListener('click', () => { bar.hidden = true; if (acct) acct.click(); });
  let restored = null;
  try { const v = sessionStorage.getItem('hta-idb-restored'); sessionStorage.removeItem('hta-idb-restored'); if (v) restored = /^\d+$/.test(v) ? { ok: +v, fail: 0, total: +v } : JSON.parse(v); } catch (e) {}
  if (restored && restored.ok) {
    if (!restored.fail) toast(`Đã tự khôi phục đủ ${restored.ok} mục tiến độ từ bản dự phòng trên máy.`);
    else toast(`⚠️ Mới khôi phục được ${restored.ok}/${restored.total} mục. Còn ${restored.fail} mục chưa khôi phục được vì bộ nhớ trình duyệt đầy (vẫn được giữ trong bản dự phòng). Bấm “Mở” để xem và thử lại.`, 20000);
  }
  let quotaShown = false;
  window.addEventListener('hs-quota', () => { if (quotaShown) return; quotaShown = true; render(); toast('⚠️ Bộ nhớ trình duyệt đã đầy — một số tiến độ chưa lưu được. Hãy tải file sao lưu và dọn bớt.', 15000); });
  // v152: bản sao tự động: ~25 giây sau khi mở app và khi rời app (mỗi ngày tối đa 1 bản, chỉ khi có thay đổi)
  setTimeout(() => autoSnap(false), 25000);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') autoSnap(false); });
  // nhắc sao lưu theo chu kỳ người dùng chọn (mặc định 14 ngày; đã đăng nhập: 30 ngày); nhắc tối đa 1 lần/tuần
  setTimeout(() => {
    try {
      const ev = every();
      if (!ev || keys().length < 8) return;
      const last = +localStorage.getItem(BK) || 0, nag = +localStorage.getItem(SEEN) || 0, now = Date.now();
      if (now - last < ev * 864e5 || now - nag < Math.min(7, ev) * 864e5) return;
      localStorage.setItem(SEEN, String(now));
      toast(signedIn() ? `💾 Đã ${last ? Math.floor((now - last) / 864e5) + ' ngày' : 'lâu'} chưa tải file sao lưu. Tiến độ vẫn có trên tài khoản, nhưng nên giữ thêm một file riêng.` : '💾 Tiến độ chỉ lưu trên máy này. Tải file sao lưu hoặc đăng nhập để không bị mất.', 12000);
    } catch (e) {}
  }, 20000);
})();
