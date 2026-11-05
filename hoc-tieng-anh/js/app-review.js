/* ============================================================
   ÔN TẬP NGẮT QUÃNG — trang "Ôn tập hôm nay" (v132)
   Gom mọi thứ đến hạn ôn: từ vựng, bài ngữ pháp, động từ bất quy tắc và sổ từ của bạn (từ lưu ở tab Dịch + thẻ tự thêm)
   vào một phiên trộn. Hạn ôn tính bằng FSRS (srPlan / srApply).
============================================================ */
(function () {
  const root = document.getElementById('rv-root'), page = document.getElementById('page-review'), heroBtn = document.getElementById('review-btn');
  if (!root || !page) return;
  const E = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  const P = 'hoc-tieng-anh-sr', K = { cards: P + '-cards', log: P + '-log', set: P + '-set' };
  const load = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } };
  const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  const today = () => (typeof vrToday === 'function' ? vrToday() : Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / 864e5));
  let cards = load(K.cards, {}); if (!cards || typeof cards !== 'object' || Array.isArray(cards)) cards = {};
  let logd = load(K.log, {}); if (!logd || typeof logd !== 'object') logd = {};
  let set = Object.assign({ max: 40, newDay: 10, auto: true, badge: false, at: '20:00' }, load(K.set, {}));
  const saveSet = () => save(K.set, set);
  const say = t => { try { if (typeof speak === 'function' && t) speak(t, 0.85); } catch (e) {} };
  const play = t => { const b = E('button', 'play-mini', '▶'); b.type = 'button'; b.setAttribute('aria-label', 'Nghe'); b.addEventListener('click', e => { e.stopPropagation(); say(t); }); return b; };
  const VI_RE = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i;
  const SRC = { v: ['📚', 'Từ vựng'], g: ['📐', 'Ngữ pháp'], i: ['🔀', 'Bất quy tắc'], m: ['📖', 'Sổ từ của bạn'] };

  /* ---------- sổ từ: từ đã lưu ở tab Dịch tự vào đây ---------- */
  function syncCards() {
    let words = [];
    try { words = JSON.parse(localStorage.getItem('hoc-tieng-anh-tr-words') || '[]') || []; } catch (e) {}
    let ch = false;
    words.forEach(x => {
      if (!x || !x.w) return;
      const id = 'tr|' + String(x.w).toLowerCase();
      if (cards[id]) { if (!cards[id].b && x.vi) { cards[id].b = x.vi; ch = true; } return; }
      cards[id] = { f: x.w, b: x.vi || '', src: 'tr', add: today() }; ch = true;
    });
    if (ch) save(K.cards, cards);
  }
  const isNew = c => c.lr == null;
  function newToday() { const d = today(); return Object.values(cards).filter(c => c.first === d).length; }

  /* ---------- những gì đến hạn ---------- */
  function due() {
    const d = today();
    const v = typeof VC_ALL !== 'undefined' && typeof srs !== 'undefined' ? VC_ALL.filter(it => { const r = srs[vcK(it)]; return r && r.due <= d; })
      .sort((a, b) => (srs[vcK(a)].due - srs[vcK(b)].due) || ((srs[vcK(b)].w || 0) - (srs[vcK(a)].w || 0))) : [];
    const i = typeof irrDue === 'function' ? irrDue() : [];
    const g = typeof gxReviewIds === 'function' && typeof gxDue === 'function' ? gxReviewIds().filter(gxDue) : [];
    const mOld = Object.keys(cards).filter(id => !isNew(cards[id]) && cards[id].due <= d);
    const room = Math.max(0, set.newDay - newToday());
    const mNew = Object.keys(cards).filter(id => isNew(cards[id]) && cards[id].b).sort((a, b) => (cards[a].add || 0) - (cards[b].add || 0)).slice(0, room);
    return { v, i, g, m: mOld.concat(mNew), d };
  }
  const total = x => x.v.length + x.i.length + x.g.length + x.m.length;

  /* ---------- nút ở đầu trang + số trên biểu tượng app ---------- */
  function refresh() {
    syncCards();
    const x = due(), n = total(x);
    if (heroBtn) {
      heroBtn.hidden = false;
      heroBtn.classList.toggle('done', !n);
      heroBtn.innerHTML = n ? `🔁 <b>${n}</b> thẻ cần ôn hôm nay <span>Ôn ngay →</span>` : '✓ Đã ôn xong hôm nay <span>Xem lịch ôn →</span>';
    }
    if (set.badge && 'setAppBadge' in navigator) { try { (n ? navigator.setAppBadge(n) : navigator.clearAppBadge()).catch(() => {}); } catch (e) {} }
    return x;
  }
  function show() {
    document.querySelectorAll('nav.tabbar button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    page.classList.add('active');
    wantExvi();
    home();
    const m = document.querySelector('main'); window.scrollTo({ top: m ? Math.max(0, m.offsetTop - 8) : 0 });
  }
  window.srOpen = show;
  // nạp sẵn bản dịch câu ví dụ khi mở trang Ôn tập (bản phát hành)
  const wantExvi = () => { if (window.appLoadData) window.appLoadData('exvi').catch(() => {}); };
  if (heroBtn) heroBtn.addEventListener('click', show);

  /* ---------- nhật ký: ngày → [số thẻ, số thẻ nhớ] ---------- */
  function logAdd(ok) {
    const d = today(), r = logd[d] || (logd[d] = [0, 0]); r[0]++; if (ok) r[1]++;
    Object.keys(logd).forEach(k => { if (+k < d - 400) delete logd[k]; });
    save(K.log, logd);
  }
  function streak() {
    const d = today(), act = x => (logd[x] && logd[x][0]) || (typeof vlog !== 'undefined' && vlog[x] && vlog[x][0]);
    let k = act(d) ? d : d - 1, n = 0; while (act(k)) { n++; k--; } return n;
  }
  function retention(days) { const d = today(); let a = 0, c = 0; for (let k = d - days + 1; k <= d; k++) if (logd[k]) { a += logd[k][0]; c += logd[k][1]; } return a >= 10 ? Math.round(c / a * 100) : null; }

  /* ---------- dự báo số thẻ đến hạn trong 7 ngày ---------- */
  function forecast() {
    const d = today(), out = new Array(7).fill(0);
    const add = dd => { if (dd == null) return; const k = Math.max(0, dd - d); if (k < 7) out[k]++; };
    try { Object.values(srs).forEach(r => add(r.due)); } catch (e) {}
    try { Object.values(irrSrs).forEach(r => add(r.bad ? d : r.due)); } catch (e) {}
    try { Object.values(gxStore).forEach(r => { if (r && r.n && r.due != null) add(r.due); }); } catch (e) {}
    Object.values(cards).forEach(c => { if (!isNew(c)) add(c.due); });
    out[0] += Math.min(Object.values(cards).filter(c => isNew(c) && c.b).length, Math.max(0, set.newDay - newToday()));   // thẻ mới hôm nay
    return out;
  }
  function counts() {
    const strong = r => r && r.S >= 21;
    let tracked = 0, firm = 0;
    try { Object.values(srs).forEach(r => { tracked++; if (strong(r) || (r.s >= 5 && !r.S)) firm++; }); } catch (e) {}
    try { Object.values(irrSrs).forEach(r => { tracked++; if (strong(r) || (r.b >= 4 && !r.S)) firm++; }); } catch (e) {}
    try { Object.values(gxStore).forEach(r => { if (r && r.n) { tracked++; if (strong(r) || (r.st >= 4 && !r.S)) firm++; } }); } catch (e) {}
    Object.values(cards).forEach(c => { tracked++; if (strong(c)) firm++; });
    return { tracked, firm };
  }

  /* ============================ TRANG CHÍNH ============================ */
  function home() {
    syncCards();
    const x = refresh(), n = total(x);
    root.innerHTML = '';
    const c = E('div', 'tense-card rv-today');
    if (n) {
      c.appendChild(E('div', 'rv-big', String(n)));
      c.appendChild(E('div', 'rv-big-l', 'thẻ cần ôn hôm nay'));
      const chips = E('div', 'rv-chips');
      [['v', x.v.length], ['g', x.g.length], ['i', x.i.length], ['m', x.m.length]].forEach(([k, m]) => { if (m) chips.appendChild(E('span', 'rv-chip', `${SRC[k][0]} ${SRC[k][1]}: ${m}${k === 'g' ? ' bài' : ''}`)); });
      c.appendChild(chips);
      const cap = Math.min(n, set.max);
      const mins = Math.max(1, Math.round((Math.min(x.v.length + x.i.length + x.m.length, cap) * 8 + Math.min(x.g.length, 4) * 2 * 25) / 60));
      const go = E('button', 'btn-primary rv-go', `▶ Bắt đầu ôn ${cap < n ? cap + ' thẻ' : ''} (khoảng ${mins} phút)`.replace('  ', ' ')); go.type = 'button';
      go.addEventListener('click', () => { if (go.disabled) return; go.disabled = true; go.textContent = 'Đang chuẩn bị thẻ…'; start(x); });
      c.appendChild(go);
      if (cap < n) c.appendChild(E('div', 'rv-note', `Mỗi phiên tối đa ${set.max} thẻ. Ôn xong phiên này, bấm lại để ôn tiếp.`));
    } else {
      c.appendChild(E('div', 'rv-big', '🎉'));
      c.appendChild(E('div', 'rv-big-l', 'Hôm nay bạn đã ôn xong!'));
      const f = forecast();
      c.appendChild(E('div', 'rv-note', f[1] ? `Ngày mai có ${f[1]} thẻ đến hạn.` : 'Ngày mai chưa có thẻ nào đến hạn. Học thêm từ mới ở tab Từ vựng nhé.'));
    }
    const st = streak();
    if (st) c.appendChild(E('div', 'rv-streak', `🔥 Chuỗi ${st} ngày học liên tiếp`));
    root.appendChild(c);
    const fold = (c, k) => typeof cardFold === 'function' ? cardFold(c, k) : c;
    root.appendChild(fold(statsBox(), 'rv|stats'));
    root.appendChild(fold(deckBox(), 'rv|deck'));
    root.appendChild(fold(remindBox(), 'rv|remind'));
    root.appendChild(howBox());
  }
  function statsBox() {
    const s = E('div', 'tense-card rv-stats');
    s.appendChild(E('h3', null, '📈 Lịch ôn 7 ngày tới'));
    const f = forecast(), mx = Math.max(1, ...f), labels = ['Hôm nay', 'Mai', 'Ngày 3', 'Ngày 4', 'Ngày 5', 'Ngày 6', 'Ngày 7'];
    const wd = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
    const ch = E('div', 'rv-fc');
    f.forEach((v, i) => {
      const col = E('div', 'rv-fc-c');
      col.appendChild(E('span', 'rv-fc-n', String(v)));
      const bar = E('span', 'rv-fc-b' + (i === 0 ? ' now' : '')); bar.style.height = Math.max(3, Math.round(v / mx * 90)) + 'px'; col.appendChild(bar);
      const dt = new Date(Date.now() + i * 864e5);
      col.appendChild(E('span', 'rv-fc-l', i < 2 ? labels[i] : wd[dt.getDay()]));
      ch.appendChild(col);
    });
    s.appendChild(ch);
    const k = counts(), r = retention(30);
    const g = E('div', 'rv-kpis');
    [[String(k.tracked), 'thẻ đang theo dõi'], [String(k.firm), 'thẻ nhớ chắc (≥ 3 tuần)'], [r == null ? '—' : r + '%', 'tỉ lệ nhớ 30 ngày qua']].forEach(([a, b]) => { const d = E('div', 'rv-kpi'); d.appendChild(E('b', null, a)); d.appendChild(E('span', null, b)); g.appendChild(d); });
    s.appendChild(g);
    return s;
  }

  /* ---------- sổ từ của bạn ---------- */
  function deckBox() {
    const s = E('div', 'tense-card rv-deck');
    const ids = Object.keys(cards);
    s.appendChild(E('h3', null, `📖 Sổ từ của bạn · ${ids.length}`));
    s.appendChild(E('p', 'rv-note', 'Từ bạn lưu ở tab Dịch (📖 Chạm vào từ…) tự vào đây. Bạn cũng có thể tự thêm từ, cụm từ hay câu muốn nhớ. Mỗi ngày tối đa ' + set.newDay + ' thẻ mới được đưa vào ôn.'));
    const f = E('form', 'rv-add');
    const a = E('input'); a.placeholder = 'Tiếng Anh (vd. deadline)'; a.autocomplete = 'off';
    const b = E('input'); b.placeholder = 'Nghĩa tiếng Việt'; b.autocomplete = 'off';
    const btn = E('button', 'btn-primary', '＋ Thêm'); btn.type = 'submit';
    f.appendChild(a); f.appendChild(b); f.appendChild(btn);
    const msg = E('div', 'rv-note');
    f.addEventListener('submit', e => {
      e.preventDefault();
      const en = a.value.trim(), vi = b.value.trim();
      if (!en || !vi) { msg.textContent = 'Nhập cả tiếng Anh và nghĩa tiếng Việt nhé.'; return; }
      const id = 'me|' + en.toLowerCase();
      if (cards[id] || cards['tr|' + en.toLowerCase()]) { msg.textContent = 'Thẻ này đã có trong sổ.'; return; }
      cards[id] = { f: en, b: vi, src: 'me', add: today() }; save(K.cards, cards);
      a.value = ''; b.value = ''; home(); const nb = root.querySelector('.rv-deck'); if (nb) nb.scrollIntoView({ block: 'start' });
    });
    s.appendChild(f); s.appendChild(msg);
    if (ids.length) {
      const det = E('details', 'rv-list');
      det.appendChild(E('summary', null, 'Xem các thẻ trong sổ'));
      const d = today();
      ids.sort((x, y) => (cards[y].add || 0) - (cards[x].add || 0)).forEach(id => {
        const c = cards[id], row = E('div', 'rv-row');
        const t = E('div', 'rv-row-t'); t.appendChild(E('b', null, c.f)); t.appendChild(E('span', null, c.b || '(chưa có nghĩa — thêm nghĩa ở tab Dịch)'));
        row.appendChild(t);
        row.appendChild(E('span', 'rv-row-due', isNew(c) ? 'mới' : c.due <= d ? 'hôm nay' : 'sau ' + srFmt(c.due - d)));
        const del = E('button', 'rv-del', '✕'); del.type = 'button'; del.setAttribute('aria-label', 'Xoá thẻ');
        del.addEventListener('click', () => { if (!confirm('Xoá thẻ “' + c.f + '” khỏi sổ ôn tập?')) return; delete cards[id]; save(K.cards, cards); row.remove(); refresh(); });
        row.appendChild(del);
        det.appendChild(row);
      });
      s.appendChild(det);
    }
    return s;
  }

  /* ---------- nhắc ôn ---------- */
  function remindBox() {
    const s = E('div', 'tense-card rv-remind');
    s.appendChild(E('h3', null, '⏰ Nhắc ôn mỗi ngày'));
    s.appendChild(E('p', 'rv-note', 'Ôn đúng hẹn quan trọng hơn ôn nhiều. Chọn một giờ cố định, app tạo lời nhắc để thêm vào ứng dụng Lịch của điện thoại hoặc máy tính (iPhone, Google Calendar, Outlook).'));
    const row = E('div', 'rv-remind-row');
    const tm = E('input'); tm.type = 'time'; tm.value = set.at || '20:00';
    tm.addEventListener('change', () => { set.at = tm.value || '20:00'; saveSet(); });
    const ics = E('button', 'btn-primary', '📅 Thêm lời nhắc vào Lịch'); ics.type = 'button';
    ics.addEventListener('click', () => makeIcs(tm.value || '20:00'));
    row.appendChild(tm); row.appendChild(ics);
    s.appendChild(row);
    if ('setAppBadge' in navigator) {
      const l = E('label', 'tk-opt rv-opt'); const cb = E('input'); cb.type = 'checkbox'; cb.checked = !!set.badge;
      cb.addEventListener('change', async () => {
        set.badge = cb.checked; saveSet();
        if (cb.checked && window.Notification && Notification.permission === 'default') { try { await Notification.requestPermission(); } catch (e) {} }
        if (!cb.checked) { try { navigator.clearAppBadge(); } catch (e) {} }
        refresh();
      });
      l.appendChild(cb); l.appendChild(document.createTextNode(' Hiện số thẻ cần ôn trên biểu tượng app (khi đã cài app ra màn hình chính)'));
      s.appendChild(l);
    }
    const lim = E('div', 'colloc-chips rv-lim'); lim.appendChild(E('span', 'tk-rate-l', 'Mỗi phiên tối đa:'));
    [20, 40, 80].forEach(v => { const ch = E('button', 'colloc-chip' + (set.max === v ? ' active' : ''), v + ' thẻ'); ch.type = 'button'; ch.addEventListener('click', () => { set.max = v; saveSet(); home(); }); lim.appendChild(ch); });
    s.appendChild(lim);
    const nw = E('div', 'colloc-chips rv-lim'); nw.appendChild(E('span', 'tk-rate-l', 'Thẻ mới mỗi ngày (sổ từ):'));
    [5, 10, 20].forEach(v => { const ch = E('button', 'colloc-chip' + (set.newDay === v ? ' active' : ''), String(v)); ch.type = 'button'; ch.addEventListener('click', () => { set.newDay = v; saveSet(); home(); }); nw.appendChild(ch); });
    s.appendChild(nw);
    return s;
  }
  function makeIcs(at) {
    const [hh, mm] = at.split(':').map(Number);
    const d = new Date(); d.setHours(hh, mm, 0, 0); if (d < new Date()) d.setDate(d.getDate() + 1);
    const p = n => String(n).padStart(2, '0');
    const loc = `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}T${p(hh)}${p(mm)}00`;
    const url = /^https?:/.test(location.protocol) ? location.origin + location.pathname : '';
    const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, 'Z');
    const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Hoc Tieng Anh//On tap//VI', 'CALSCALE:GREGORIAN', 'BEGIN:VEVENT',
      'UID:hoc-tieng-anh-on-tap-' + Date.now() + '@local', 'DTSTAMP:' + stamp, 'DTSTART:' + loc, 'DURATION:PT15M', 'RRULE:FREQ=DAILY',
      'SUMMARY:🔁 Ôn tập tiếng Anh (15 phút)', 'DESCRIPTION:Mở app Học Tiếng Anh → Ôn tập hôm nay.' + (url ? '\\n' + url : ''), url ? 'URL:' + url : '',
      'BEGIN:VALARM', 'ACTION:DISPLAY', 'DESCRIPTION:Đến giờ ôn tập tiếng Anh', 'TRIGGER:PT0M', 'END:VALARM', 'END:VEVENT', 'END:VCALENDAR'].filter(Boolean);
    const blob = new Blob([lines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'nhac-on-tap-tieng-anh.ics';
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
  }
  function howBox() {
    const d = E('details', 'tense-card rv-how');
    d.appendChild(E('summary', null, '💡 App tính lịch ôn thế nào?'));
    [
      'App dùng FSRS, thuật toán ôn tập giãn cách mã nguồn mở (Anki cũng dùng). Mỗi thẻ có độ khó riêng và “độ bền trí nhớ” riêng.',
      'Mỗi lần ôn, bạn tự chấm: Quên · Khó · Nhớ · Dễ. Số ngày dưới mỗi nút là lúc thẻ quay lại nếu bạn chọn nút đó.',
      'Thẻ bạn hay quên sẽ quay lại sớm; thẻ bạn nhớ dễ dàng được giãn dần: vài ngày → vài tuần → vài tháng (tối đa 1 năm). Lịch được đặt để lúc ôn bạn vẫn nhớ khoảng 90%.',
      'Chấm thật lòng giúp lịch chính xác hơn: chỉ chọn “Nhớ” khi bạn nhớ được trước khi lật thẻ.',
      'Tiến độ ôn ở tab Từ vựng, Ngữ pháp, Bất quy tắc và ở đây là một: ôn ở đâu cũng được tính.'
    ].forEach(t => d.appendChild(E('p', null, t)));
    return d;
  }

  /* ============================ PHIÊN ÔN ============================ */
  let S = null;
  let starting = false;
  async function start(x) {
    if (starting) return;                       // chặn bấm hai lần trong lúc đang chuẩn bị
    starting = true;
    try { await prep(); } finally { starting = false; }
    begin(x);
  }
  async function prep() {
    if (window.appLoadData) { try { await Promise.race([window.appLoadData('exvi'), new Promise(r => setTimeout(r, 1500))]); } catch (e) {} }
  }
  function begin(x) {
    // trộn xen kẽ các nguồn để não phải “chuyển đổi” (nhớ lâu hơn ôn dồn một loại)
    const cap = set.max;
    const lists = {
      v: x.v.map(it => ({ k: 'v', it })),
      i: x.i.map(v => ({ k: 'i', v })),
      m: x.m.map(id => ({ k: 'm', id })),
      g: []
    };
    if (typeof gxReviewSet === 'function') x.g.slice(0, 4).forEach(id => gxReviewSet([id]).slice(0, 2).forEach(q => lists.g.push({ k: 'g', q })));
    const q = [];
    while (q.length < cap && (lists.v.length || lists.i.length || lists.m.length || lists.g.length)) {
      ['v', 'v', 'm', 'i', 'g'].forEach(k => { if (q.length < cap && lists[k].length) q.push(lists[k].shift()); });
    }
    S = { q, i: 0, ok: 0, n: 0, again: new Set(), gres: [], by: { v: 0, g: 0, i: 0, m: 0 }, t0: Date.now() };
    root.innerHTML = '';
    const head = E('div', 'tk-top');
    const back = E('button', 'gr-back', '← Ôn tập hôm nay'); back.type = 'button';
    back.addEventListener('click', () => { finishGrammar(); S = null; home(); });
    head.appendChild(back);
    S.prog = E('div', 'tk-prog'); head.appendChild(S.prog);
    root.appendChild(head);
    S.bar = E('div', 'rv-pbar'); S.barIn = E('span'); S.bar.appendChild(S.barIn); root.appendChild(S.bar);
    S.box = E('div', 'rv-box'); root.appendChild(S.box);
    next();
  }
  function next() {
    if (!S) return;
    S.prog.textContent = `${Math.min(S.i + 1, S.q.length)}/${S.q.length}`;
    S.barIn.style.width = Math.round(S.i / Math.max(1, S.q.length) * 100) + '%';
    if (S.i >= S.q.length) return done();
    const c = S.q[S.i];
    S.box.innerHTML = '';
    if (c.k === 'g') return gramCard(c);
    flipCard(c);
  }
  // thẻ lật: mặt trước → tự nhớ → lật → chấm 4 mức
  function flipCard(c) {
    const d = today();
    const card = E('div', 'tense-card rv-card');
    const tag = E('div', 'rv-tag', SRC[c.k][0] + ' ' + SRC[c.k][1]); card.appendChild(tag);
    const front = E('div', 'rv-front'), back = E('div', 'rv-back'); back.hidden = true;
    let speakText = '', rec = null;
    if (c.k === 'v') {
      const it = c.it; rec = srs[vcK(it)];
      const rev = rec && rec.s >= 3 && (S.i % 2 === 1);      // từ đã khá quen: có lúc hỏi chiều Việt → Anh
      if (rev) {
        front.appendChild(E('div', 'rv-ask', 'Nghĩa này là từ tiếng Anh nào?'));
        front.appendChild(E('div', 'rv-word vi', it.vi));
        front.appendChild(E('div', 'rv-sub', (typeof VC_POS !== 'undefined' && VC_POS[it.pos]) || ''));
        back.appendChild(wordLine(it.w, it.ipa));
      } else {
        front.appendChild(E('div', 'rv-ask', 'Bạn còn nhớ nghĩa của từ này?'));
        front.appendChild(wordLine(it.w, it.ipa));
        front.appendChild(E('div', 'rv-sub', (typeof VC_POS !== 'undefined' && VC_POS[it.pos]) || ''));
        back.appendChild(E('div', 'rv-mean', it.vi));
        speakText = it.w;
      }
      if (it.ex) { const ex = E('div', 'rv-ex'); ex.appendChild(E('span', null, it.ex)); ex.appendChild(play(it.ex)); back.appendChild(ex); if (it.exvi) back.appendChild(E('div', 'rv-exvi', it.exvi)); }
    } else if (c.k === 'i') {
      const v = c.v; rec = irrSrs[v.v1];
      front.appendChild(E('div', 'rv-ask', 'Nhớ V2 và V3 của động từ này?'));
      front.appendChild(wordLine(v.v1, v.ipa));
      front.appendChild(E('div', 'rv-sub', v.meaning || ''));
      const forms = E('div', 'rv-forms');
      [['V1', v.v1], ['V2', v.v2], ['V3', v.v3]].forEach(([l, w]) => { const f = E('div', 'rv-form'); f.appendChild(E('span', null, l)); f.appendChild(E('b', null, w)); forms.appendChild(f); });
      back.appendChild(forms);
      const all = [v.v1, v.v2.split('/')[0], v.v3.split('/')[0]].join(' – ');
      const pl = E('div', 'rv-ex'); pl.appendChild(E('span', null, all)); pl.appendChild(play(all)); back.appendChild(pl);
      speakText = v.v1;
    } else {
      const m = cards[c.id]; rec = m;
      const viFront = VI_RE.test(m.f);
      front.appendChild(E('div', 'rv-ask', viFront ? 'Nói câu này bằng tiếng Anh?' : 'Bạn còn nhớ nghĩa?'));
      const w = E('div', 'rv-word' + (viFront ? ' vi' : '')); w.textContent = m.f; front.appendChild(w);
      if (!viFront) front.appendChild(play(m.f));
      back.appendChild(E('div', 'rv-mean', m.b));
      if (viFront) back.appendChild(play(m.b));
      if (isNew(m)) tag.appendChild(E('span', 'rv-new', 'MỚI'));
      speakText = viFront ? '' : m.f;
    }
    card.appendChild(front); card.appendChild(back);
    const reveal = E('button', 'btn-primary rv-reveal', 'Lật thẻ (Space)'); reveal.type = 'button';
    const grades = E('div', 'rv-grades'); grades.hidden = true;
    const plan = g => {
      if (c.k === 'v') { const r = Object.assign({}, rec || {}); if (rec && (rec.n || rec.w)) srSeed(r, rec.t ? Math.max(1, rec.due - rec.t) : 1, rec.w > rec.n, rec.t || undefined); return g === 1 ? 1 : srPlan(r, g, d).ivl; }
      if (c.k === 'i') { const r = Object.assign({}, rec || {}); if (rec && (rec.n || rec.b)) srSeed(r, IRR_INT[Math.max(0, (rec.b || 1) - 1)], (rec.w || 0) * 2 > (rec.n || 0), rec.last); return g === 1 ? 0 : srPlan(r, g, d).ivl; }
      return g === 1 ? 1 : srPlan(rec, g, d).ivl;
    };
    [[1, 'Quên', 'bad'], [2, 'Khó', 'mid'], [3, 'Nhớ', 'ok'], [4, 'Dễ', 'easy']].forEach(([g, l, cls]) => {
      const b = E('button', 'rv-g ' + cls); b.type = 'button';
      const iv = plan(g);
      b.appendChild(E('b', null, l)); b.appendChild(E('span', null, iv <= 0 ? 'ôn lại ngay' : srFmt(iv)));
      b.addEventListener('click', () => grade(c, g));
      grades.appendChild(b);
    });
    reveal.addEventListener('click', () => { back.hidden = false; reveal.hidden = true; grades.hidden = false; });
    card.appendChild(reveal); card.appendChild(grades);
    S.box.appendChild(card);
    S.reveal = reveal; S.grades = grades;
    if (set.auto && speakText) say(speakText);
  }
  function wordLine(w, ipa) {
    const r = E('div', 'rv-wline');
    r.appendChild(E('span', 'rv-word', w)); r.appendChild(play(w));
    if (ipa) r.appendChild(E('span', 'rv-ipa', ipa));
    return r;
  }
  function grade(c, g) {
    const d = today(), ok = g > 1;
    S.n++; if (ok) S.ok++; S.by[c.k]++;
    logAdd(ok);
    if (c.k === 'v') srsGrade(c.it, g - 1);
    else if (c.k === 'i') irrGrade(c.v, ok, 'rv', null, g);
    else {
      const m = cards[c.id];
      if (isNew(m)) m.first = d;
      m.n = (m.n || 0) + 1; if (!ok) m.w = (m.w || 0) + 1;
      const counts = !(m.lr === d && m.due > d) || g === 1;
      if (counts) { const iv = srApply(m, g, d); m.due = d + iv; }
      save(K.cards, cards);
    }
    // quên: đưa thẻ về cuối phiên để gặp lại một lần nữa ngay hôm nay
    const key = c.k + '|' + (c.it ? vcK(c.it) : c.v ? c.v.v1 : c.id);
    if (!ok && !S.again.has(key)) { S.again.add(key); S.q.push(c); }
    S.i++; next();
  }
  function gramCard(c) {
    const card = E('div', 'tense-card rv-card');
    card.appendChild(E('div', 'rv-tag', SRC.g[0] + ' ' + SRC.g[1]));
    const box = E('div', 'rv-gbox'); card.appendChild(box);
    S.box.appendChild(card);
    gxQuiz(box, [c.q], { showLesson: true, doneLabel: 'Tiếp →', onDone: res => {
      const r = res[0]; if (r) { S.gres.push(r); S.n++; S.by.g++; if (r.ok) S.ok++; logAdd(!!r.ok); }
      S.i++; next();
    } });
  }
  function finishGrammar() {
    if (!S || !S.gres.length || typeof gxPerLesson !== 'function') return;
    const by = gxPerLesson(S.gres);
    Object.keys(by).forEach(id => gxResult(id, Math.round(by[id].ok / by[id].n * 100), by[id].wrong));
    S.gres = [];
  }
  function done() {
    finishGrammar();
    const pct = S.n ? Math.round(S.ok / S.n * 100) : 0, mins = Math.max(1, Math.round((Date.now() - S.t0) / 60000));
    S.box.innerHTML = '';
    S.barIn.style.width = '100%';
    const c = E('div', 'tense-card tk-sum');
    c.appendChild(E('div', 'tk-sum-n', pct + '%'));
    c.appendChild(E('div', 'tk-sum-t', pct >= 85 ? '🎉 Trí nhớ của bạn rất tốt!' : pct >= 60 ? '👍 Tốt lắm! Những thẻ quên sẽ quay lại sớm.' : '💪 Không sao, quên là một phần của việc học. Thẻ quên sẽ quay lại ngày mai.'));
    c.appendChild(E('div', 'tk-note', `Đã ôn ${S.n} lượt trong khoảng ${mins} phút · nhớ ${S.ok}/${S.n}`));
    const chips = E('div', 'rv-chips');
    Object.keys(S.by).forEach(k => { if (S.by[k]) chips.appendChild(E('span', 'rv-chip', `${SRC[k][0]} ${SRC[k][1]}: ${S.by[k]}`)); });
    c.appendChild(chips);
    const f = forecast(), st = streak();
    if (st) c.appendChild(E('div', 'rv-streak', `🔥 Chuỗi ${st} ngày học liên tiếp`));
    c.appendChild(E('div', 'tk-note', f[0] ? `Vẫn còn ${f[0]} thẻ đến hạn hôm nay.` : f[1] ? `Ngày mai: ${f[1]} thẻ.` : 'Ngày mai chưa có thẻ nào đến hạn.'));
    const acts = E('div', 'tk-acts');
    const a1 = E('button', 'btn-primary', f[0] ? '▶ Ôn tiếp' : 'Xem lịch ôn'); a1.type = 'button'; a1.addEventListener('click', () => { S = null; home(); });
    const a2 = E('button', 'btn-ghost', '📚 Học từ mới'); a2.type = 'button'; a2.addEventListener('click', () => { S = null; const b = document.querySelector('nav.tabbar button[data-page="page-vocab"]'); if (b) b.click(); });
    acts.appendChild(a1); acts.appendChild(a2); c.appendChild(acts);
    S.box.appendChild(c);
    S.prog.textContent = 'Xong';
    refresh();
  }
  // phím tắt trong phiên: Space lật thẻ · 1–4 chấm
  document.addEventListener('keydown', e => {
    if (!page.classList.contains('active') || !S || e.ctrlKey || e.metaKey || e.altKey) return;
    const t = e.target; if (t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
    if (e.key === ' ' && S.reveal && !S.reveal.hidden && S.reveal.isConnected) { S.reveal.click(); e.preventDefault(); e.stopImmediatePropagation(); }
    else if (/^[1-4]$/.test(e.key) && S.grades && !S.grades.hidden && S.grades.isConnected) { S.grades.children[+e.key - 1].click(); e.preventDefault(); e.stopImmediatePropagation(); }
  }, true);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') refresh(); });
  document.querySelectorAll('nav.tabbar button').forEach(b => b.addEventListener('click', () => { if (S) { finishGrammar(); S = null; } setTimeout(refresh, 0); }));
  window.srAddCard = (en, vi) => { const id = 'me|' + String(en).toLowerCase(); if (!cards[id]) { cards[id] = { f: en, b: vi || '', src: 'me', add: today() }; save(K.cards, cards); refresh(); } };
  refresh();
})();
