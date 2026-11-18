/* Bản mẫu: hướng dẫn từng bước, nút "Học tiếp", báo mất mạng. Chỉ đọc/ghi một khoá riêng, không đụng dữ liệu học. */
(function () {
  'use strict';
  const NAME = {
    learn: { vocab: 'Từ vựng', grammar: 'Ngữ pháp', irr: 'Động từ bất quy tắc' },
    practice: { pron: 'Phát âm', shadow: 'Nói đuổi', listen: 'Nghe', read: 'Đọc', write: 'Viết', talk: 'Nói với AI' },
    review: { cards: 'Thẻ đến hạn', mist: 'Lỗi sai', ex: 'Bài tập ngữ pháp', para: 'Luyện dịch', qb: 'Luyện đặt câu hỏi' },
    tool: { check: 'Dịch Anh–Việt' }
  };
  const KEY = 'hoc-tieng-anh-resume';
  const ok = st => !!(st && NAME[st.g] && NAME[st.g][st.s]);
  const read = () => { try { const v = JSON.parse(localStorage.getItem(KEY) || 'null'); return ok(v) ? v : null; } catch (e) { return null; } };
  const btn = document.getElementById('gd-resume'), lbl = document.getElementById('gd-resume-l');
  function draw() { const d = read(); if (!btn) return; btn.hidden = !d; if (d) lbl.textContent = NAME[d.g][d.s]; }
  function save() {
    const g = document.body.dataset.grp, s = document.body.dataset.sec;
    if (ok({ g, s })) { try { localStorage.setItem(KEY, JSON.stringify({ g, s })); } catch (e) {} }
    draw();
  }
  if (btn) btn.addEventListener('click', () => { const d = read(); if (d && window.secOpen) window.secOpen(d.g, d.s); });
  new MutationObserver(save).observe(document.body, { attributes: true, attributeFilter: ['data-grp', 'data-sec'] });
  draw();
  document.addEventListener('click', e => {
    const b = e.target.closest && e.target.closest('[data-gd-go]'); if (!b || !window.secOpen) return;
    const [g, s] = b.dataset.gdGo.split(':'); window.secOpen(g, s);
  });

  /* Khung hướng dẫn: chỉ hiện ở trang danh sách (không chen vào lúc đang học bài); người học có thể ẩn hẳn. */
  const OFF = 'hoc-tieng-anh-guide-off';
  const offSet = () => { try { return new Set(JSON.parse(localStorage.getItem(OFF) || '[]')); } catch (e) { return new Set(); } };
  document.querySelectorAll('.gd').forEach(g => {
    const k = [...g.classList].find(c => c.startsWith('gd-')) || 'gd';
    g.dataset.k = k;
    const x = document.createElement('button'); x.type = 'button'; x.className = 'gd-hide'; x.textContent = 'Đã hiểu, ẩn hướng dẫn';
    x.addEventListener('click', () => { const o = offSet(); o.add(k); try { localStorage.setItem(OFF, JSON.stringify([...o])); } catch (e) {} g.hidden = true; });
    g.appendChild(x);
  });
  const gV = document.querySelector('.gd-vocab'), gG = document.querySelector('.gd-gram');
  const gr = document.getElementById('grammar-root'), vr = document.getElementById('vc-root');
  function place() {
    const o = offSet();
    document.querySelectorAll('.gd').forEach(g => { if (o.has(g.dataset.k)) g.hidden = true; });
    if (gV && !o.has('gd-vocab')) gV.hidden = !(typeof vc !== 'undefined' && vc.view === 'home');
    if (gG && gr && !o.has('gd-gram')) {
      const sub = gr.firstElementChild && gr.firstElementChild.classList.contains('section-title') && gr.children[1] && gr.children[1].classList.contains('section-sub') ? gr.children[1] : null;
      gG.hidden = !sub;
      if (sub && sub.nextSibling !== gG) sub.after(gG);
    }
  }
  if (vr) new MutationObserver(place).observe(vr, { childList: true });
  if (gr) new MutationObserver(place).observe(gr, { childList: true });
  place();
  const net = document.createElement('div');
  net.className = 'gd-offline'; net.setAttribute('role', 'status');
  net.textContent = 'Đang mất mạng. Bài học vẫn dùng được; riêng giọng đọc, dịch và đồng bộ cần Internet.';
  document.body.appendChild(net);
  const sync = () => { net.hidden = navigator.onLine !== false; };
  addEventListener('online', sync); addEventListener('offline', sync); sync();
})();
