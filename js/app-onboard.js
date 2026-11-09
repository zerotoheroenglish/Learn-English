/* ============================================================
   v177 · MÀN CHÀO NGƯỜI MỚI + CHIA SẺ THÀNH TÍCH
   - Màn chào 3 bước chỉ hiện với người mở app lần đầu (chưa có tiến độ nào).
     Người dùng cũ được đánh dấu là đã xem, không bị làm phiền.
   - Chia sẻ: vẽ ảnh 1080×1350 (chuỗi ngày học / trình độ), chia sẻ qua menu của máy
     hoặc tải ảnh về + sao chép lời giới thiệu khi máy không hỗ trợ chia sẻ ảnh.
============================================================ */
(function () {
  const P = 'hoc-tieng-anh-', FLAG = P + 'onboard';
  const E = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  const appUrl = () => /^https?:$/.test(location.protocol) ? location.origin + location.pathname.replace(/index\.html$/, '') : '';
  const appHost = () => { const u = appUrl(); return u ? u.replace(/^https?:\/\//, '').replace(/\/$/, '') : ''; };

  /* ---------------- chia sẻ thành tích ---------------- */
  const NAVY = '#14213D', POP = '#FFD23F';
  function rr(ctx, x, y, w, h, r) {
    ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }
  function sticker(ctx, x, y, w, h, r, fill, sh) {
    rr(ctx, x + sh, y + sh, w, h, r); ctx.fillStyle = NAVY; ctx.fill();
    rr(ctx, x, y, w, h, r); ctx.fillStyle = fill; ctx.fill(); ctx.lineWidth = 8; ctx.strokeStyle = NAVY; ctx.stroke();
  }
  const DISP = '"Bricolage Grotesque", "Be Vietnam Pro", system-ui, sans-serif', BODY = '"Be Vietnam Pro", system-ui, sans-serif';
  async function fontsReady() {
    try { await Promise.all([document.fonts.load('800 120px "Bricolage Grotesque"'), document.fonts.load('700 40px "Be Vietnam Pro"'), document.fonts.load('800 40px "Be Vietnam Pro"')]); } catch (e) {}
  }
  function footer(ctx, W, H) {
    ctx.fillStyle = NAVY; rr(ctx, 70, H - 170, W - 140, 100, 50); ctx.fill();
    ctx.fillStyle = POP; rr(ctx, 96, H - 150, 60, 60, 16); ctx.fill();
    ctx.fillStyle = NAVY; ctx.font = `800 30px ${DISP}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('En', 126, H - 119);
    ctx.textAlign = 'left'; ctx.fillStyle = '#FFFFFF'; ctx.font = `800 34px ${DISP}`; ctx.fillText('Học Tiếng Anh', 180, H - 132);
    ctx.fillStyle = '#C9D3EA'; ctx.font = `600 24px ${BODY}`; ctx.fillText(appHost() || 'Học miễn phí trên điện thoại', 180, H - 98);
  }
  function drawStreak(ctx, W, H, d) {
    ctx.fillStyle = '#FFFFFF'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = NAVY; ctx.font = `800 52px ${DISP}`; ctx.textBaseline = 'alphabetic'; ctx.textAlign = 'left';
    ctx.fillText('Mình đang học', 90, 170); ctx.fillText('tiếng Anh mỗi ngày', 90, 236);
    sticker(ctx, 90, 300, W - 190, 770, 56, POP, 18);
    ctx.fillStyle = NAVY; ctx.font = `800 300px ${DISP}`; ctx.textBaseline = 'alphabetic';
    const num = String(d.n); ctx.fillText(num, 140, 640);
    const nw = ctx.measureText(num).width;
    ctx.font = `800 76px ${DISP}`; ctx.fillText('ngày', 160 + nw, 560);
    ctx.font = `700 40px ${BODY}`; ctx.fillText('liên tiếp', 162 + nw, 625);
    const L = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'], gap = (W - 190 - 100) / 7;
    L.forEach((lab, i) => {
      const cx = 140 + gap * i + gap / 2 - 20, cy = 800, st = (d.week || [])[i] || 'fut';
      ctx.beginPath(); ctx.arc(cx, cy, 34, 0, Math.PI * 2);
      ctx.fillStyle = st === 'on' ? NAVY : st === 'fut' ? 'rgba(0,0,0,0)' : '#FFFFFF'; ctx.fill();
      ctx.lineWidth = 7; ctx.strokeStyle = NAVY; ctx.setLineDash(st === 'fut' ? [10, 8] : []); ctx.stroke(); ctx.setLineDash([]);
      if (i === d.today) { ctx.beginPath(); ctx.arc(cx, cy, 46, 0, Math.PI * 2); ctx.lineWidth = 5; ctx.stroke(); }
      ctx.fillStyle = NAVY; ctx.font = `800 28px ${BODY}`; ctx.textAlign = 'center'; ctx.fillText(lab, cx, cy + 86);
    });
    ctx.textAlign = 'left';
    if (d.best > d.n) { ctx.font = `700 34px ${BODY}`; ctx.fillText(`Kỷ lục của mình: ${d.best} ngày`, 140, 1000); }
    else { ctx.font = `700 34px ${BODY}`; ctx.fillText('Chuỗi dài nhất từ trước tới giờ!', 140, 1000); }
    footer(ctx, W, H);
  }
  function drawPlace(ctx, W, H, d) {
    ctx.fillStyle = '#FFFFFF'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = NAVY; ctx.font = `800 52px ${DISP}`; ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
    ctx.fillText('Trình độ tiếng Anh', 90, 170); ctx.fillText('của mình là', 90, 236);
    sticker(ctx, 90, 290, W - 190, 380, 56, POP, 18);
    ctx.fillStyle = NAVY; ctx.textAlign = 'center'; ctx.font = `800 260px ${DISP}`; ctx.fillText(d.lv, 90 + (W - 190) / 2, 580);
    ctx.font = `700 36px ${BODY}`;
    const NAME = { A1: 'Mới bắt đầu', A2: 'Sơ cấp', B1: 'Trung cấp', B2: 'Trung cao cấp', C1: 'Nâng cao' };
    ctx.fillText(NAME[d.lv] || '', 90 + (W - 190) / 2, 640);
    ctx.textAlign = 'left';
    (d.per || []).forEach(([k, ok, n], i) => {
      const y = 740 + i * 72, bx = 210, bw = W - 140 - bx - 140, p = n ? ok / n : 0;
      ctx.fillStyle = NAVY; ctx.font = `800 40px ${DISP}`; ctx.fillText(k, 96, y + 32);
      rr(ctx, bx, y, bw, 40, 20); ctx.fillStyle = '#EEF1F7'; ctx.fill(); ctx.lineWidth = 5; ctx.strokeStyle = NAVY; ctx.stroke();
      if (p > 0) { rr(ctx, bx, y, Math.max(40, bw * p), 40, 20); ctx.fillStyle = k === d.lv ? POP : NAVY; ctx.fill(); ctx.stroke(); }
      ctx.fillStyle = NAVY; ctx.font = `700 32px ${BODY}`; ctx.fillText(`${ok}/${n}`, bx + bw + 20, y + 32);
    });
    ctx.font = `600 28px ${BODY}`; ctx.fillStyle = '#4A5672';
    ctx.fillText('Bài kiểm tra 50 câu ngữ pháp · 15 phút', 96, 1130);
    footer(ctx, W, H);
  }
  function shareText(kind, d) {
    const u = appUrl();
    return (kind === 'streak' ? `Mình đã học tiếng Anh ${d.n} ngày liên tiếp với app Học Tiếng Anh!` : `Trình độ tiếng Anh của mình: ${d.lv}. Bạn thử kiểm tra xem mình ở mức nào?`) + (u ? ' ' + u : '');
  }
  function previewSheet(blob, name, text) {
    const url = URL.createObjectURL(blob);
    const ov = E('div', 'hta-share'); ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); ov.setAttribute('aria-label', 'Chia sẻ thành tích');
    const box = E('div', 'hta-share-box');
    box.appendChild(E('h3', null, 'Ảnh chia sẻ của bạn'));
    const img = E('img'); img.src = url; img.alt = 'Ảnh thành tích để chia sẻ'; box.appendChild(img);
    box.appendChild(E('p', 'hta-share-t', text));
    const row = E('div', 'hta-share-row');
    const dl = E('a', 'btn-primary', '⬇️ Tải ảnh'); dl.href = url; dl.download = name;
    const cp = E('button', 'btn-ghost', '⧉ Sao chép lời giới thiệu'); cp.type = 'button';
    cp.addEventListener('click', async () => { try { await navigator.clipboard.writeText(text); cp.textContent = '✓ Đã sao chép'; } catch (e) { cp.textContent = 'Hãy bôi đen để sao chép'; } });
    const x = E('button', 'btn-ghost', 'Đóng'); x.type = 'button';
    const close = () => { ov.remove(); URL.revokeObjectURL(url); document.removeEventListener('keydown', esc); };
    const esc = e => { if (e.key === 'Escape') close(); };
    x.addEventListener('click', close); ov.addEventListener('click', e => { if (e.target === ov) close(); }); document.addEventListener('keydown', esc);
    row.appendChild(dl); row.appendChild(cp); row.appendChild(x); box.appendChild(row);
    box.appendChild(E('p', 'hta-share-n', 'Tải ảnh về rồi đăng lên Facebook, Zalo, Instagram… kèm lời giới thiệu để bạn bè mở được app.'));
    ov.appendChild(box); document.body.appendChild(ov);
    setTimeout(() => { try { dl.focus(); } catch (e) {} }, 30);
  }
  window.htaShare = async (kind, d) => {
    await fontsReady();
    const W = 1080, H = 1350, cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    const ctx = cv.getContext('2d');
    if (kind === 'streak') drawStreak(ctx, W, H, d); else drawPlace(ctx, W, H, d);
    const blob = await new Promise(r => cv.toBlob(r, 'image/png'));
    if (!blob) return;
    const name = kind === 'streak' ? `hoc-tieng-anh-chuoi-${d.n}-ngay.png` : `hoc-tieng-anh-trinh-do-${d.lv}.png`;
    const text = shareText(kind, d);
    try {
      const file = new File([blob], name, { type: 'image/png' });
      if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], text }); return; }
    } catch (e) { if (e && e.name === 'AbortError') return; }
    previewSheet(blob, name, text);
  };
  // màn Hôm nay đã vẽ trước khi file này nạp: vẽ lại để hiện nút chia sẻ
  setTimeout(() => { try { if (document.body.dataset.sec === 'today' && window.dashView) window.dashView('sum'); } catch (e) {} }, 0);

  /* ---------------- màn chào người mới ---------------- */
  const get = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const put = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  const hasData = k => { const v = get(P + k); return v != null && v !== '' && v !== '{}' && v !== '[]' && v !== 'null'; };
  const isNew = () => !['activity', 'placement', 'vocab-srs', 'vocab-learned', 'grammar-srs', 'sync-uid', 'sr-cards', 'mistakes', 'read', 'shadow-prog', 'irr-srs'].some(hasData);
  let deferredInstall = null;
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredInstall = e; });
  const standalone = () => (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone;
  const isIOS = () => /iP(hone|ad|od)/.test(navigator.userAgent) || (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1);

  function onboard(force, welcome) {
    if (document.querySelector('.hta-ob')) return;
    const ans = { goal: 20, lv: 'test', at: '20:00' };
    try { ans.goal = Math.max(5, +get(P + 'dash-goal') || 20); } catch (e) {}
    const ov = E('div', 'hta-ob'); ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); ov.setAttribute('aria-labelledby', 'hta-ob-h');
    const box = E('div', 'hta-ob-box'); ov.appendChild(box);
    let step = 0;
    const finish = startTest => {
      put(FLAG, String(Date.now()));
      put(P + 'dash-goal', String(ans.goal));
      if (ans.lv !== 'test' && typeof window.gxApplyLevel === 'function') { try { window.gxApplyLevel(ans.lv); } catch (e) {} }
      ov.remove(); document.body.classList.remove('hta-ob-open');
      if (startTest) {
        if (window.secOpen) window.secOpen('learn', 'grammar');
        setTimeout(() => { if (typeof gxPlacementTest === 'function') gxPlacementTest(); }, 150);
      } else if (window.secOpen) window.secOpen('home', 'today');
    };
    const opt = (label, sub, on, pick, extra) => {
      const b = E('button', 'hta-ob-opt' + (on ? ' on' : '') + (extra ? ' ' + extra : '')); b.type = 'button';
      b.setAttribute('aria-pressed', String(!!on));
      const t = E('span', 'hta-ob-ot'); t.appendChild(E('b', null, label)); if (sub) t.appendChild(E('small', null, sub)); b.appendChild(t);
      b.appendChild(E('span', 'hta-ob-ck', on ? '✓' : ''));
      b.addEventListener('click', () => { pick(); draw(); });
      return b;
    };
    function draw() {
      box.innerHTML = '';
      const top = E('div', 'hta-ob-top');
      const dots = E('div', 'hta-ob-dots'); dots.setAttribute('aria-label', `Bước ${step + 1}/3`);
      [0, 1, 2].forEach(i => dots.appendChild(E('i', i <= step ? 'on' : '')));
      top.appendChild(dots);
      const skip = E('button', 'hta-ob-skip', 'Bỏ qua'); skip.type = 'button'; skip.addEventListener('click', () => finish(false));
      top.appendChild(skip);
      box.appendChild(top);
      if (step === 0) {
        const hero = E('div', 'hta-ob-hero'); hero.appendChild(E('span', 'hta-ob-logo', 'En'));
        hero.appendChild(E('span', null, welcome != null
          ? `Chào mừng${welcome ? ' ' + welcome : ''}! Tài khoản của bạn đã sẵn sàng — mình giúp bạn bắt đầu trong 1 phút.`
          : 'Chào bạn! Mình giúp bạn bắt đầu trong 1 phút.')); box.appendChild(hero);
        box.appendChild(E('h2', null, 'Mỗi ngày bạn muốn học bao lâu?')).id = 'hta-ob-h';
        box.appendChild(E('p', 'hta-ob-p', 'Ít mà đều quan trọng hơn nhiều mà bỏ dở. Đổi lại được bất cứ lúc nào ở tab Hôm nay.'));
        const list = E('div', 'hta-ob-list');
        [[10, '5 phút', 'Nhẹ nhàng · 10 lượt luyện'], [20, '10 phút', 'Đều đặn · 20 lượt luyện · nên chọn'], [40, '20 phút', 'Nghiêm túc · 40 lượt luyện'], [60, '30 phút trở lên', 'Tăng tốc · 60 lượt luyện']]
          .forEach(([g, l, s]) => list.appendChild(opt(l, s, ans.goal === g, () => { ans.goal = g; })));
        box.appendChild(list);
      } else if (step === 1) {
        box.appendChild(E('h2', null, 'Bạn đang ở trình độ nào?')).id = 'hta-ob-h';
        box.appendChild(E('p', 'hta-ob-p', 'App dùng trình độ để đặt Lộ trình, bài ngữ pháp và động từ bất quy tắc cho vừa sức bạn.'));
        const list = E('div', 'hta-ob-list');
        list.appendChild(opt('Làm bài kiểm tra xếp trình độ', '50 câu · 15 phút · chính xác nhất', ans.lv === 'test', () => { ans.lv = 'test'; }, 'hot'));
        [[1, 'Mới bắt đầu (A1)', 'Biết rất ít hoặc học lại từ đầu'], [2, 'Biết căn bản (A2)', 'Hiểu câu đơn giản, giao tiếp ngắn'], [3, 'Trung cấp (B1)', 'Nói được chuyện quen thuộc, còn sai nhiều'], [4, 'Khá trở lên (B2)', 'Đọc hiểu tốt, muốn nói tự nhiên hơn']]
          .forEach(([l, n, s]) => list.appendChild(opt(n, s, ans.lv === l, () => { ans.lv = l; })));
        box.appendChild(list);
      } else {
        box.appendChild(E('h2', null, 'Giữ thói quen mỗi ngày')).id = 'hta-ob-h';
        box.appendChild(E('p', 'hta-ob-p', 'Chọn một giờ cố định. App tạo lời nhắc để thêm vào ứng dụng Lịch của bạn.'));
        const rm = E('div', 'hta-ob-rem');
        const lab = E('label', null, 'Giờ học: '); const tm = E('input'); tm.type = 'time'; tm.value = ans.at; tm.id = 'hta-ob-time';
        lab.htmlFor = 'hta-ob-time'; tm.addEventListener('change', () => { ans.at = tm.value || '20:00'; });
        const ics = E('button', 'btn-ghost', '📅 Thêm lời nhắc vào Lịch'); ics.type = 'button';
        ics.addEventListener('click', () => { if (window.rvMakeIcs) { window.rvMakeIcs(ans.at); ics.textContent = '✓ Đã tạo lời nhắc'; } });
        rm.appendChild(lab); rm.appendChild(tm); rm.appendChild(ics); box.appendChild(rm);
        if (!standalone()) {
          const ins = E('div', 'hta-ob-install');
          ins.appendChild(E('b', null, 'Cài app ra màn hình chính'));
          if (deferredInstall) {
            ins.appendChild(E('span', null, 'Mở nhanh như app thật, dùng được cả khi không có mạng.'));
            const ib = E('button', 'btn-ghost', '⬇️ Cài app'); ib.type = 'button';
            ib.addEventListener('click', async () => { try { deferredInstall.prompt(); await deferredInstall.userChoice; } catch (e) {} deferredInstall = null; ib.textContent = '✓ Xong'; ib.disabled = true; });
            ins.appendChild(ib);
          } else if (isIOS()) {
            ins.appendChild(E('span', null, 'Trên iPhone: mở bằng Safari, bấm nút Chia sẻ (ô vuông có mũi tên lên) → “Thêm vào MH chính”. Tiến độ được giữ an toàn hơn.'));
          } else {
            ins.appendChild(E('span', null, 'Trong menu trình duyệt (⋮), chọn “Cài đặt ứng dụng” hoặc “Thêm vào màn hình chính”.'));
          }
          box.appendChild(ins);
        }
      }
      const nav = E('div', 'hta-ob-nav');
      if (step > 0) { const bk = E('button', 'btn-ghost', '← Quay lại'); bk.type = 'button'; bk.addEventListener('click', () => { step--; draw(); }); nav.appendChild(bk); }
      const nx = E('button', 'btn-primary', step < 2 ? 'Tiếp tục →' : ans.lv === 'test' ? 'Làm bài kiểm tra →' : 'Bắt đầu học →'); nx.type = 'button';
      nx.addEventListener('click', () => { if (step < 2) { step++; draw(); } else finish(ans.lv === 'test'); });
      nav.appendChild(nx);
      box.appendChild(nav);
      setTimeout(() => { const h = box.querySelector('h2'); if (h) { h.tabIndex = -1; try { h.focus({ preventScroll: true }); } catch (e) {} } }, 20);
    }
    draw();
    document.body.appendChild(ov); document.body.classList.add('hta-ob-open');
  }
  window.htaOnboard = () => onboard(true);

  // người dùng cũ: đánh dấu đã xem, không hiện; người mới: hiện sau khi app vẽ xong
  if (!get(FLAG)) {
    if (!isNew()) put(FLAG, 'existing');
    else setTimeout(() => { if (!get(FLAG) && isNew()) onboard(false); }, 600);
  }
  /* v204: tài khoản mới → chào mừng + gợi ý làm bài kiểm tra trình độ.
     Cờ ob-new được đặt khi đăng nhập lần đầu vào tài khoản chưa có dữ liệu; giữ qua lần tải lại trang. */
  const newAcct = name => {
    try { localStorage.removeItem(P + 'ob-new'); } catch (e) {}
    const old = document.querySelector('.hta-ob'); if (old) { old.remove(); document.body.classList.remove('hta-ob-open'); }
    setTimeout(() => onboard(true, name || ''), 300);
  };
  window.addEventListener('hta-new-account', e => newAcct(e && e.detail && e.detail.name));
  { const f = get(P + 'ob-new'); if (f) setTimeout(() => newAcct(f === '1' ? '' : f), 700); }
  // chân trang: mở lại hướng dẫn bắt đầu
  const links = document.querySelector('.legal-links');
  if (links) {
    const sep = E('span', null, '·'); sep.setAttribute('aria-hidden', 'true');
    const b = E('button', 'legal-link', 'Hướng dẫn bắt đầu'); b.type = 'button'; b.addEventListener('click', () => onboard(true));
    links.insertBefore(b, links.firstChild); links.insertBefore(sep, b.nextSibling);
  }
})();
