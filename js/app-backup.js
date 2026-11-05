/* v128 — Sao lưu / khôi phục và thông tin bộ nhớ (trong khung Tài khoản & đồng bộ) */
(() => {
  const HS = window.HS || {}, P = 'hoc-tieng-anh-', BK = P + 'backup-at', SEEN = P + 'backup-nag';
  const $ = id => document.getElementById(id);
  const box = $('hs-box'); if (!box) return;
  const DEVICE = new Set([P + 'voice', P + 'sync-meta', P + 'sync-uid', P + 'sync-base', P + 'autofix-open', BK, SEEN, P + 'talk-key', P + 'talk-model', P + 'talk-models', P + 'talk-prov', P + 'talk-key-groq', P + 'talk-model-groq', P + 'talk-models-groq', P + 'talk-key-openai', P + 'talk-model-openai', P + 'talk-models-openai']);
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
    L.push(signedIn() ? '☁️ Đã đăng nhập: tiến độ còn được lưu trên tài khoản.' : '☁️ Chưa đăng nhập: tiến độ chỉ nằm trên máy này.');
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

  $('hs-export').addEventListener('click', doExport);
  $('hs-import').addEventListener('click', () => { $('hs-file').value = ''; $('hs-file').click(); });
  $('hs-file').addEventListener('change', e => { const f = e.target.files && e.target.files[0]; if (f) doImport(f); });
  const acct = $('acct-btn'); if (acct) acct.addEventListener('click', () => setTimeout(render, 0));
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
  // nhắc sao lưu: chưa đăng nhập, đã có tiến độ, hơn 14 ngày chưa sao lưu; nhắc tối đa 1 lần/tuần
  setTimeout(() => {
    try {
      if (signedIn() || keys().length < 8) return;
      const last = +localStorage.getItem(BK) || 0, nag = +localStorage.getItem(SEEN) || 0, now = Date.now();
      if (now - last < 14 * 864e5 || now - nag < 7 * 864e5) return;
      localStorage.setItem(SEEN, String(now));
      toast('💾 Tiến độ chỉ lưu trên máy này. Tải file sao lưu hoặc đăng nhập để không bị mất.', 12000);
    } catch (e) {}
  }, 20000);
})();
