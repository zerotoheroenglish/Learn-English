/* ============================================================
   ÔN TẬP NGẮT QUÃNG — trang "Ôn tập hôm nay" (v132)
   Gom mọi thứ đến hạn ôn: từ vựng, bài ngữ pháp, động từ bất quy tắc và sổ từ của bạn (từ lưu ở tab Dịch + thẻ tự thêm)
   vào một phiên trộn. Hạn ôn tính bằng FSRS (srPlan / srApply).
============================================================ */
/* ============================================================
   SỔ LỖI CỦA TÔI — v143
   Mọi câu bạn làm sai ở Ngữ pháp, Bài tập dịch, Câu hỏi, Từ vựng, Bất quy tắc, Phát âm và Trò chuyện với AI
   được ghi vào đây (kèm câu đúng và lý do). Luyện lại đúng 2 lần liên tiếp → chuyển sang "Đã khắc phục".
   window.mkAdd(item) · window.mkOk(key) · window.mkCount() · window.mkOpen(root, onBack)
============================================================ */
(function () {
  const KEY = 'hoc-tieng-anh-mistakes', MAX = 400, NEED = 2;
  const E = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  const SRC = {
    gx: ['📐', 'Ngữ pháp'], ex: ['📝', 'Bài tập dịch'], qb: ['❓', 'Đặt câu hỏi'], vc: ['📚', 'Từ vựng'],
    irr: ['🔀', 'Bất quy tắc'], say: ['🎙️', 'Phát âm'], talk: ['💬', 'Trò chuyện AI'], rd: ['📖', 'Đọc hiểu'], wr: ['✍️', 'Viết'], ls: ['🎧', 'Nghe hiểu']
  };
  let db = {};
  try { const v = JSON.parse(localStorage.getItem(KEY)); if (v && typeof v === 'object' && !Array.isArray(v)) db = v; } catch (e) {}
  const save = () => {
    const ks = Object.keys(db);
    if (ks.length > MAX) {   // quá nhiều: bỏ bớt lỗi đã khắc phục cũ nhất, rồi lỗi cũ nhất
      ks.sort((a, b) => ((db[b].fx ? 0 : 1) - (db[a].fx ? 0 : 1)) || ((db[a].lt || 0) - (db[b].lt || 0)));
      ks.slice(0, ks.length - MAX).forEach(k => delete db[k]);
    }
    try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) {}
  };
  const clip = (s, n) => { s = String(s == null ? '' : s).trim(); return s.length > n ? s.slice(0, n - 1) + '…' : s; };
  const nz = s => { s = String(s || ''); try { if (typeof scExpand === 'function') s = scExpand(s); } catch (e) {} try { if (typeof lsNorm === 'function') return lsNorm(s).join(' '); } catch (e) {} return s.toLowerCase().replace(/[^a-z0-9' ]+/g, ' ').replace(/\s+/g, ' ').trim(); };

  window.mkAdd = o => {
    try {
      if (!o || !o.k || !o.src || !(o.a && o.a.length || o.mode === 'say')) return;
      const now = Date.now(), old = db[o.k];
      const it = old || { k: o.k, n: 0, t: now };
      Object.assign(it, {
        src: o.src, cat: clip(o.cat, 80), p: clip(o.p, 400), hint: clip(o.hint, 200), mode: o.mode || 'sent',
        a: (o.a || []).map(x => clip(x, 300)).filter(Boolean).slice(0, 6), right: clip(o.right || (o.a || [])[0], 300),
        why: clip(o.why, 500), ask: clip(o.ask, 120)
      });
      if (Array.isArray(o.opts)) it.opts = o.opts.map(x => clip(x, 200)).slice(0, 5);
      if (o.wrong) it.wrong = clip(o.wrong, 300);
      if (o.pct != null) it.pct = o.pct;
      it.n++; it.lt = now; it.ok = 0; delete it.fx;
      db[o.k] = it; save();
    } catch (e) {}
  };
  window.mkOk = k => {
    const it = db[k]; if (!it || it.fx) return;
    it.ok = (it.ok || 0) + 1; if (it.ok >= NEED) it.fx = Date.now();
    save();
  };
  window.mkCount = () => Object.values(db).filter(x => !x.fx).length;
  window.mkList = () => Object.values(db).filter(x => !x.fx).map(x => ({ k: x.k, src: x.src, cat: x.cat, n: x.n, lt: x.lt }));
  window.mkStats = () => {   // cho Dashboard sau này: số lỗi chưa khắc phục theo nguồn / nhóm
    const by = {}, cat = {};
    Object.values(db).filter(x => !x.fx).forEach(x => { by[x.src] = (by[x.src] || 0) + 1; const c = x.src + '|' + x.cat; cat[c] = (cat[c] || 0) + x.n; });
    return { open: window.mkCount(), fixed: Object.values(db).filter(x => x.fx).length, by, cat };
  };

  const say = t => { try { if (t && typeof speak === 'function') speak(t, 0.85); } catch (e) {} };
  const play = t => { const b = E('button', 'play-mini', '▶'); b.type = 'button'; b.setAttribute('aria-label', 'Nghe'); b.addEventListener('click', e => { e.stopPropagation(); say(t); }); return b; };
  const fmtD = ts => { const d = new Date(ts); return d.getDate() + '/' + (d.getMonth() + 1); };
  const ASK = { mc: 'Chọn đáp án đúng', blank: 'Điền từ còn thiếu', sent: 'Viết câu tiếng Anh đúng', fix: 'Sửa lại câu cho đúng', word: 'Viết từ tiếng Anh có nghĩa này', irr: 'Viết V2 và V3 (cách nhau bằng dấu cách)', say: 'Nói to từ / câu này' };

  // ---------------- trang Sổ lỗi ----------------
  const V = { f: 'all', fixed: false, more: 0 };
  function open(root, onBack) {
    root.innerHTML = '';
    const back = E('button', 'gr-back', '← Ôn tập hôm nay'); back.type = 'button';
    back.addEventListener('click', () => { if (onBack) onBack(); });
    root.appendChild(back);
    const all = Object.values(db), openL = all.filter(x => !x.fx), fixedL = all.filter(x => x.fx);
    const head = E('div', 'tense-card mk-head');
    head.appendChild(E('h2', 'mk-title', '📕 Sổ lỗi của tôi'));
    head.appendChild(E('p', 'rv-note', 'Câu bạn làm sai ở các tab tự được ghi vào đây, kèm câu đúng và lý do. Luyện lại đúng ' + NEED + ' lần là lỗi chuyển sang “Đã khắc phục”.'));
    const k = E('div', 'rv-kpis');
    [[String(openL.length), 'lỗi cần luyện'], [String(fixedL.length), 'đã khắc phục'], [String(all.reduce((s, x) => s + (x.n || 0), 0)), 'lần sai đã ghi']].forEach(([a, b]) => { const d = E('div', 'rv-kpi'); d.appendChild(E('b', null, a)); d.appendChild(E('span', null, b)); k.appendChild(d); });
    head.appendChild(k);
    root.appendChild(head);
    if (!all.length) {
      const c = E('div', 'tense-card');
      c.appendChild(E('div', 'rv-big', '✨'));
      c.appendChild(E('div', 'rv-big-l', 'Sổ lỗi đang trống'));
      c.appendChild(E('p', 'rv-note', 'Làm bài tập ngữ pháp, bài tập dịch, đặt câu hỏi, kiểm tra từ vựng hay trò chuyện với AI. Câu nào sai sẽ tự vào đây để bạn luyện lại.'));
      root.appendChild(c);
      return;
    }
    const pool = V.fixed ? fixedL : openL;
    // lọc theo nguồn
    const chips = E('div', 'colloc-chips mk-chips');
    const cnt = {}; pool.forEach(x => { cnt[x.src] = (cnt[x.src] || 0) + 1; });
    if (V.f !== 'all' && !cnt[V.f]) V.f = 'all';
    const chip = (id, label) => {
      const b = E('button', 'colloc-chip' + (V.f === id ? ' active' : ''), label); b.type = 'button';
      b.addEventListener('click', () => { V.f = id; V.more = 0; open(root, onBack); });
      chips.appendChild(b);
    };
    chip('all', 'Tất cả · ' + pool.length);
    Object.keys(SRC).forEach(s => { if (cnt[s]) chip(s, SRC[s][0] + ' ' + SRC[s][1] + ' · ' + cnt[s]); });
    root.appendChild(chips);
    const tg = E('div', 'mk-tg');
    const t1 = E('button', 'btn-ghost' + (!V.fixed ? ' active' : ''), '🔴 Cần luyện · ' + openL.length), t2 = E('button', 'btn-ghost' + (V.fixed ? ' active' : ''), '✅ Đã khắc phục · ' + fixedL.length);
    t1.type = t2.type = 'button';
    t1.addEventListener('click', () => { V.fixed = false; V.more = 0; open(root, onBack); });
    t2.addEventListener('click', () => { V.fixed = true; V.more = 0; open(root, onBack); });
    tg.appendChild(t1); tg.appendChild(t2); root.appendChild(tg);

    const list = pool.filter(x => V.f === 'all' || x.src === V.f)
      .sort((a, b) => V.fixed ? (b.fx - a.fx) : ((b.n - a.n) || (b.lt - a.lt)));
    if (!V.fixed && list.length) {
      const n = Math.min(10, list.length);
      const go = E('button', 'btn-primary mk-go', `▶ Luyện lại ${n} lỗi${V.f !== 'all' ? ' ' + SRC[V.f][1].toLowerCase() : ''}`); go.type = 'button';
      go.addEventListener('click', () => practice(root, pickSet(list, n), () => open(root, onBack)));
      root.appendChild(go);
    }
    if (!list.length) root.appendChild(E('p', 'rv-note', V.fixed ? 'Chưa có lỗi nào được khắc phục. Luyện lại lỗi để chuyển chúng sang đây.' : 'Không còn lỗi nào cần luyện 🎉'));
    const shown = list.slice(0, 40 + V.more);
    shown.forEach(it => root.appendChild(itemCard(it, () => open(root, onBack))));
    if (list.length > shown.length) {
      const m = E('button', 'btn-ghost mk-more', `Xem thêm (${list.length - shown.length})`); m.type = 'button';
      m.addEventListener('click', () => { V.more += 40; open(root, onBack); });
      root.appendChild(m);
    }
  }
  // ưu tiên lỗi sai nhiều lần và lâu chưa luyện
  function pickSet(list, n) {
    const now = Date.now();
    return list.slice().sort((a, b) => (b.n * 2 + (now - b.lt) / 864e5) - (a.n * 2 + (now - a.lt) / 864e5)).slice(0, n);
  }
  function itemCard(it, redraw) {
    const c = E('div', 'tense-card mk-item' + (it.fx ? ' fixed' : ''));
    const top = E('div', 'mk-top');
    top.appendChild(E('span', 'rv-chip', (SRC[it.src] || ['•', ''])[0] + ' ' + (SRC[it.src] || ['', it.src])[1] + (it.cat ? ' · ' + it.cat : '')));
    const del = E('button', 'mk-del', '✕'); del.type = 'button'; del.title = 'Xoá khỏi sổ lỗi'; del.setAttribute('aria-label', 'Xoá khỏi sổ lỗi');
    del.addEventListener('click', () => { delete db[it.k]; save(); redraw(); });
    top.appendChild(del);
    c.appendChild(top);
    if (it.p) { const p = E('div', 'mk-p', it.p); c.appendChild(p); }
    if (it.hint) c.appendChild(E('div', 'mk-hint', it.hint));
    if (it.wrong) { const w = E('div', 'mk-line mk-wrong'); w.appendChild(E('span', 'mk-lbl', it.mode === 'say' ? 'Lần trước' : 'Bạn đã viết')); w.appendChild(E('s', null, it.wrong)); c.appendChild(w); }
    if (it.mode === 'say' && it.pct != null) c.appendChild(E('div', 'mk-line mk-wrong', `Độ khớp lần trước: ${it.pct}%`));
    if (it.right) { const r = E('div', 'mk-line mk-right'); r.appendChild(E('span', 'mk-lbl', 'Đúng')); r.appendChild(E('b', null, it.right)); if (/[a-z]/i.test(it.right)) r.appendChild(play(it.right.replace(/→/g, ','))); c.appendChild(r); }
    if (it.why) c.appendChild(E('div', 'mk-why', '💡 ' + it.why));
    const meta = E('div', 'mk-meta');
    meta.appendChild(E('span', null, `Sai ${it.n} lần · lần cuối ${fmtD(it.lt)}`));
    if (it.fx) meta.appendChild(E('span', 'mk-ok', '✅ Khắc phục ngày ' + fmtD(it.fx)));
    else { const dots = E('span', 'mk-dots', 'Luyện đúng: ' + '●'.repeat(it.ok || 0) + '○'.repeat(Math.max(0, NEED - (it.ok || 0)))); meta.appendChild(dots); }
    c.appendChild(meta);
    return c;
  }

  // ---------------- luyện lại ----------------
  function check(it, v) {
    const u = nz(v);
    if (!u) return false;
    if (it.mode === 'irr') {
      const toks = u.split(' ');
      const [a2, a3] = (it.a[0] || '').split('|');
      const has = alts => String(alts || '').split('/').map(s => nz(s)).filter(Boolean).some(x => toks.includes(x));
      return has(a2) && has(a3);
    }
    return it.a.some(a => nz(a) === u);
  }
  function practice(root, set, onEnd) {
    const S = { i: 0, ok: 0, fixedNow: 0 };
    const draw = () => {
      root.innerHTML = '';
      if (S.i >= set.length) {
        const c = E('div', 'tense-card rv-today');
        c.appendChild(E('div', 'rv-big', S.ok === set.length ? '🎉' : String(S.ok) + '/' + set.length));
        c.appendChild(E('div', 'rv-big-l', S.ok === set.length ? 'Đúng hết!' : 'câu luyện đúng'));
        if (S.fixedNow) c.appendChild(E('div', 'rv-note', `✅ ${S.fixedNow} lỗi vừa được khắc phục.`));
        const b = E('button', 'btn-primary', 'Về Sổ lỗi'); b.type = 'button'; b.addEventListener('click', onEnd);
        c.appendChild(b); root.appendChild(c);
        return;
      }
      const it = set[S.i];
      const back = E('button', 'gr-back', '← Sổ lỗi'); back.type = 'button'; back.addEventListener('click', onEnd);
      root.appendChild(back);
      const c = E('div', 'tense-card mk-q');
      const top = E('div', 'gx-q-top');
      top.appendChild(E('span', 'gx-q-type', it.ask || ASK[it.mode] || ASK.sent));
      top.appendChild(E('span', 'gx-q-n', `Câu ${S.i + 1}/${set.length}`));
      c.appendChild(top);
      c.appendChild(E('div', 'gx-q-from', (SRC[it.src] || ['', ''])[0] + ' ' + (SRC[it.src] || ['', it.src])[1] + (it.cat ? ' · ' + it.cat : '')));
      const big = E('div', 'gx-sent mk-qp', it.mode === 'say' ? it.right : it.p);
      c.appendChild(big);
      if (it.hint) c.appendChild(E('div', 'gx-vi', it.hint));
      const fb = E('div', 'gx-fb'); fb.hidden = true;
      const next = E('button', 'btn-primary gx-next', S.i + 1 < set.length ? 'Câu tiếp →' : 'Xem kết quả'); next.type = 'button'; next.hidden = true;
      next.addEventListener('click', () => { S.i++; draw(); });
      let done = false;
      const result = (ok, user, extra) => {
        if (done) return; done = true;
        try { if (window.actLog) actLog({ gx: 'g', irr: 'v', vc: 'v', say: 's', talk: 's', rd: 'r', ls: 'l' }[it.src] || 'w'); } catch (e) {}
        if (ok) { S.ok++; const was = !!(db[it.k] && db[it.k].fx); window.mkOk(it.k); if (!was && db[it.k] && db[it.k].fx) S.fixedNow++; }
        else if (db[it.k]) { db[it.k].n++; db[it.k].ok = 0; db[it.k].lt = Date.now(); if (user) db[it.k].wrong = clip(user, 300); save(); }
        fb.hidden = false; fb.className = 'gx-fb ' + (ok ? 'ok' : 'bad'); fb.innerHTML = '';
        fb.appendChild(E('div', 'gx-fb-t', ok ? '✓ Chính xác!' : '✗ Chưa đúng'));
        if (!ok && user) { const d = E('div', 'gx-line gx-yours'); d.appendChild(E('span', 'gx-lbl', 'Bạn viết')); d.appendChild(E('span', null, user)); fb.appendChild(d); }
        if (extra) fb.appendChild(extra);
        const r = E('div', 'gx-line gx-right'); r.appendChild(E('span', 'gx-lbl', 'Đúng')); r.appendChild(E('span', null, it.right)); if (/[a-z]/i.test(it.right)) r.appendChild(play(it.right.replace(/→/g, ','))); fb.appendChild(r);
        if (it.a.length > 1 && it.mode !== 'irr') fb.appendChild(E('div', 'gx-why soft', 'Cũng đúng: ' + it.a.slice(1).join(' · ')));
        if (it.why) fb.appendChild(E('div', 'gx-why ok', it.why));
        if (!ok && user && (it.mode === 'sent' || it.mode === 'fix')) {
          const ov = E('button', 'btn-ghost ex-ov', 'Mình viết cũng đúng → tính là đúng'); ov.type = 'button';
          ov.addEventListener('click', () => { ov.remove(); S.ok++; const was = !!(db[it.k] && db[it.k].fx); window.mkOk(it.k); if (!was && db[it.k] && db[it.k].fx) S.fixedNow++; fb.className = 'gx-fb ok'; fb.querySelector('.gx-fb-t').textContent = '✓ Đã tính là đúng'; });
          fb.appendChild(ov);
        }
        next.hidden = false;
        if (ok && it.right) say(it.right.replace(/→/g, ','));
        setTimeout(() => { try { next.focus({ preventScroll: true }); fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); } catch (e) {} }, 40);
      };
      if (it.mode === 'mc' && it.opts && it.opts.length) {
        const os = E('div', 'rd-opts');
        const sh = it.opts.slice().sort(() => Math.random() - .5);
        sh.forEach((o, k) => {
          const b = E('button', 'gx-opt', o); b.type = 'button';
          b.addEventListener('click', () => {
            if (done) return;
            const ok = o === it.a[0];
            os.querySelectorAll('.gx-opt').forEach((x, j) => { x.disabled = true; if (sh[j] === it.a[0]) x.classList.add('ok'); else if (j === k) x.classList.add('bad'); });
            result(ok, ok ? null : o);
          });
          os.appendChild(b);
        });
        c.appendChild(os);
      } else if (it.mode === 'say') {
        const row = E('div', 'pr-speak-btns vsp-btns');
        const l = E('button', 'ls-slow', '🔊 Nghe mẫu'); l.type = 'button'; l.addEventListener('click', () => say(it.right));
        const mic = E('button', 'btn-primary pr-mic', '🎤 Nhấn để nói'); mic.type = 'button';
        const out = E('div', 'pr-speak-out vsp-out');
        const can = typeof PR_SR !== 'undefined' && PR_SR && typeof vspListen === 'function';
        if (!can) { mic.disabled = true; out.textContent = 'Trình duyệt này chưa hỗ trợ nhận dạng giọng nói. Bấm “Tự chấm” bên dưới.'; }
        mic.addEventListener('click', () => {
          if (done || mic.disabled) return;
          mic.disabled = true; mic.textContent = '🎙️ Đang nghe…'; out.textContent = '';
          vspListen(it.right, (best, err) => {
            mic.disabled = false; mic.textContent = '🎤 Nói lại';
            if (!best) { out.textContent = err || 'Không nghe rõ, thử lại nhé.'; return; }
            const pct = Math.round(best.score * 100);
            if (pct >= 80) result(true, null, E('div', 'gx-why ok', `Độ khớp ${pct}% · máy nghe được: “${best.heard}”`));
            else { out.textContent = `Độ khớp ${pct}% · máy nghe được: “${best.heard}”. Cần từ 80% trở lên, thử lại nhé.`; if (db[it.k]) { db[it.k].pct = pct; save(); } }
          }, t => { out.textContent = '👂 ' + t; });
        });
        row.appendChild(l); row.appendChild(mic); c.appendChild(row); c.appendChild(out);
        const self = E('div', 'mk-self');
        const y = E('button', 'btn-ghost', '✓ Tự chấm: đã nói tốt'), n = E('button', 'btn-ghost', '✗ Chưa tốt'); y.type = n.type = 'button';
        y.addEventListener('click', () => result(true)); n.addEventListener('click', () => result(false));
        self.appendChild(y); self.appendChild(n); c.appendChild(self);
      } else {
        const row = E('div', 'gx-inrow');
        const multi = it.mode === 'sent' || it.mode === 'fix';
        const inp = E(multi ? 'textarea' : 'input', 'gx-in');
        if (multi) inp.rows = 2; else inp.type = 'text';
        if (it.mode === 'fix') inp.value = it.p;
        inp.placeholder = it.mode === 'irr' ? 'vd. went gone' : it.mode === 'word' ? 'Từ tiếng Anh…' : it.mode === 'blank' ? 'Từ còn thiếu…' : 'Viết câu tiếng Anh…';
        inp.setAttribute('autocomplete', 'off'); inp.setAttribute('autocapitalize', 'off'); inp.spellcheck = false;
        const ck = E('button', 'btn-primary', 'Kiểm tra'); ck.type = 'button';
        const skip = E('button', 'btn-ghost', 'Xem đáp án'); skip.type = 'button';
        const go = async () => {
          const v = inp.value.trim(); if (!v || done || ck.disabled) return;
          if (it.mode === 'fix' && nz(v) === nz(it.p)) { inp.classList.add('gx-shake'); setTimeout(() => inp.classList.remove('gx-shake'), 400); return; }
          inp.disabled = true; ck.disabled = true; skip.disabled = true;
          let ok = check(it, v), extra = null;
          if (!ok && multi && typeof smartCheck === 'function' && it.a.length) {
            ck.textContent = 'Đang chấm…';
            try { const rep = await smartCheck(v, it.a); if (rep && rep.pass) ok = true; if (rep && typeof smartReport === 'function' && rep.verdict !== 'exact') extra = smartReport(rep, { compact: true, noTitle: ok }); } catch (e) {}
          }
          result(ok, v, extra);
        };
        ck.addEventListener('click', go);
        skip.addEventListener('click', () => { inp.disabled = true; ck.disabled = true; skip.disabled = true; result(false, ''); });
        inp.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); if (done) next.click(); else go(); } });
        row.appendChild(inp); row.appendChild(ck); c.appendChild(row);
        const act = E('div', 'mk-self'); act.appendChild(skip); c.appendChild(act);
        setTimeout(() => { try { if (matchMedia('(hover:hover)').matches) inp.focus(); } catch (e) {} }, 50);
      }
      c.appendChild(fb); c.appendChild(next);
      root.appendChild(c);
    };
    draw();
  }
  window.mkOpen = open;
})();

/* ============================================================
   DASHBOARD — TIẾN ĐỘ CỦA TÔI (v144)
   Gom tiến độ của mọi tab: chuỗi ngày học, mục tiêu hôm nay, thẻ cần ôn, sổ lỗi,
   điểm 6 kỹ năng (ước lượng cấp độ), hoạt động 7 ngày, % hoàn thành theo cấp A1–C1.
   Không cần mạng, không cần AI. window.actLog(kỹ năng) ghi một lượt luyện (v g s l r w).
============================================================ */
(function () {
  const AK = 'hoc-tieng-anh-activity', GK = 'hoc-tieng-anh-dash-goal';
  const dayNo = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / 864e5);
  let act = {};
  try { const v = JSON.parse(localStorage.getItem(AK)); if (v && typeof v === 'object') act = v; } catch (e) {}
  let pend = 0;
  window.actLog = (sk, n) => {
    try {
      const d = dayNo(), r = act[d] || (act[d] = {});
      r[sk] = (r[sk] || 0) + (n || 1);
      const ks = Object.keys(act); if (ks.length > 200) ks.map(Number).sort((a, b) => a - b).slice(0, ks.length - 200).forEach(k => delete act[k]);
      clearTimeout(pend); pend = setTimeout(() => { try { localStorage.setItem(AK, JSON.stringify(act)); } catch (e) {} }, 400);
    } catch (e) {}
  };
  window.addEventListener('pagehide', () => { try { localStorage.setItem(AK, JSON.stringify(act)); } catch (e) {} });

  const page = document.getElementById('page-dash'), root = document.getElementById('db-root'), btn = document.getElementById('dash-btn');
  if (!page || !root) return;
  const E = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  const J = k => { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { return null; } };
  const LV = ['A1', 'A2', 'B1', 'B2', 'C1'];
  // cấp độ của các bài ở tab nạp sau (Shadowing, Trò chuyện, Luyện dịch) — dùng dữ liệu thật nếu tab đã mở
  const MAP = {"sh":{"a1-morning":1,"a1-friend":1,"a2-dalat":2,"a2-english":2,"b1-home":3,"b1-sleep":3,"b2-habits":4,"b2-city":4,"c1-slow":5,"c1-fail":5,"d-cafe":1,"d-meet":1,"d-weekend":2,"d-doctor":2,"d-complain":3,"d-small":3,"d-roommate":4,"t-airport":2,"t-hoian":2,"t-hotel":3,"t-culture":3,"t-solo":4,"w-first":2,"w-meeting":3,"w-email":3,"w-present":4,"w-negotiate":5,"i-intro":2,"i-strength":3,"i-why":3,"i-conflict":4,"i-questions":4,"h-water":1,"h-walk":2,"h-stress":3,"h-food":4,"s-phone":2,"s-ai":3,"s-space":3,"s-ocean":4,"s-brain":5,"x-kindness":3,"x-public":4,"e-hometown":3,"e-hobby":3,"e-person":4,"e-place":4,"e-tech":5,"o-announce":3,"o-voicemail":3,"o-conversation":3,"o-ad":4,"o-tour":4,"a1-family":1,"a1-fruit":1,"a1-room":1,"a2-cook":2,"b2-memory":4,"c1-attention":5},"talk":{"a1-meet":1,"a1-family":1,"a1-day":1,"a1-cafe":1,"a2-weekend":2,"a2-plans":2,"a2-shop":2,"a2-directions":2,"a2-hotel":2,"b1-interview":3,"b1-review":3,"b1-doctor":3,"b1-debate":3,"b2-client":4,"b2-complaint":4},"pa":{"a1-me":[1,6],"a1-family":[1,6],"a1-day":[1,6],"a1-home":[1,6],"a1-shop":[1,6],"a1-friend":[1,6],"a1-cat":[1,6],"a1-rain":[1,6],"a1-teacher":[1,6],"a1-sunday":[1,6],"a1-dream":[1,6],"a1-tet":[1,6],"a2-trip":[2,6],"a2-plan":[2,6],"a2-compare":[2,6],"a2-lost":[2,6],"a2-cook":[2,6],"a2-weekend":[2,6],"a2-kind":[2,6],"a2-bike":[2,6],"a2-market":[2,6],"a2-letter":[2,6],"a2-coffee":[2,6],"a2-mistake":[2,6],"b1-job":[3,6],"b1-env":[3,6],"b1-phone":[3,6],"b1-house":[3,6],"b1-health":[3,6],"b1-story":[3,6],"b1-grand":[3,6],"b1-sapa":[3,6],"b1-street":[3,6],"b1-habit":[3,6],"b1-flood":[3,6],"b1-wrong":[3,6],"b2-remote":[4,6],"b2-tourism":[4,6],"b2-ai":[4,6],"b2-reading":[4,6],"b2-volunteer":[4,6],"b2-money":[4,6],"b2-hoian":[4,6],"b2-failure":[4,6],"b2-sleep":[4,6],"b2-language":[4,6],"b2-traffic":[4,6],"b2-gift":[4,6],"c1-city":[5,6],"c1-lang":[5,6],"c1-social":[5,6],"c1-climate":[5,6],"c1-success":[5,6],"c1-tradition":[5,6],"c1-silence":[5,6],"c1-ai-art":[5,6],"c1-minimal":[5,6],"c1-doctor":[5,6],"c1-memory":[5,6],"c1-ocean":[5,6]}};
  const lvOfSh = id => (typeof SH_LESSONS !== 'undefined' && (SH_LESSONS.find(x => x.id === id) || {}).lv) || MAP.sh[id] || (/^([abc])(\d)-/.exec(id) ? { a1: 1, a2: 2, b1: 3, b2: 4, c1: 5 }[id.slice(0, 2)] : 0);
  const count = (obj, fn) => { const c = [0, 0, 0, 0, 0]; Object.keys(obj).forEach(k => { const l = fn(k); if (l >= 1 && l <= 5) c[l - 1]++; }); return c; };

  /* ---------- hoạt động theo ngày (gộp cả nhật ký cũ để chuỗi ngày không bị mất) ---------- */
  function dayTotals() {
    const t = {};
    const add = (d, n) => { d = +d; if (!isFinite(d) || n <= 0) return; t[d] = (t[d] || 0) + n; };
    Object.keys(act).forEach(d => add(d, Object.values(act[d]).reduce((a, b) => a + b, 0)));
    const sr = J('hoc-tieng-anh-sr-log') || {}; Object.keys(sr).forEach(d => { if (!act[d]) add(d, (sr[d] || [0])[0]); });
    try { if (typeof vlog !== 'undefined') Object.keys(vlog).forEach(d => { if (!act[d]) add(d, (vlog[d][0] || 0) + (vlog[d][2] || 0)); }); } catch (e) {}
    return t;
  }
  function streakOf(t) {
    const d = dayNo(); let k = t[d] ? d : d - 1, n = 0;
    while (t[k]) { n++; k--; }
    return n;
  }
  // v175: chuỗi dài nhất từng có (để hiện "Kỷ lục")
  function bestStreak(t) {
    const ks = Object.keys(t).map(Number).filter(k => t[k] > 0).sort((a, b) => a - b);
    let best = 0, run = 0, prev = null;
    ks.forEach(k => { run = prev !== null && k === prev + 1 ? run + 1 : 1; prev = k; if (run > best) best = run; });
    return best;
  }
  /* v175: khối chuỗi ngày học — số ngày cỡ lớn, 7 chấm của tuần này (T2 → CN), mục tiêu lượt luyện hôm nay */
  const FLAME = '<svg viewBox="0 0 54 64" aria-hidden="true"><path d="M27 3c4 11 18 18 18 34a18 18 0 0 1-36 0c0-8 4-13 8-17 0 7 3 11 7 12-2-12 3-22 3-29z" fill="#FF8A65" stroke="#14213D" stroke-width="3" stroke-linejoin="round"/><path d="M27 34c3 5 8 7 8 14a8 8 0 0 1-16 0c0-4 2-6 4-8 0 3 2 4 3 4-1-4 0-7 1-10z" fill="#FFFFFF" stroke="#14213D" stroke-width="3" stroke-linejoin="round"/></svg>';
  function streakCard(t, d, st, todayN, goal) {
    const c = E('section', 'db-sc');
    const best = bestStreak(t);
    if (best > st && best >= 2) c.appendChild(E('span', 'db-sc-rec', `Kỷ lục: ${best} ngày`));
    const row = E('div', 'db-sc-row');
    row.appendChild(E('b', 'db-sc-n', String(st)));
    const lb = E('span', 'db-sc-l');
    lb.appendChild(E('span', 'db-sc-u', 'ngày'));
    lb.appendChild(E('span', null, st ? 'học liên tiếp' : 'Học một bài là bắt đầu chuỗi'));
    row.appendChild(lb);
    const fl = E('span', 'db-sc-fl'); fl.innerHTML = FLAME; row.appendChild(fl);
    c.appendChild(row);
    const mon = d - ((d + 3) % 7), WK = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
    let doneN = 0; const states = [];
    const wk = E('div', 'db-sc-week');
    WK.forEach((lab, i) => {
      const day = mon + i, on = !!t[day];
      if (on && day <= d) doneN++;
      const stt = day > d ? 'fut' : on ? 'on' : day === d ? 'off' : 'miss'; states.push(stt);
      const cell = E('span', 'db-sc-d');
      cell.appendChild(E('i', stt + (day === d ? ' now' : '')));
      cell.appendChild(E('span', null, lab));
      wk.appendChild(cell);
    });
    wk.setAttribute('role', 'img');
    wk.setAttribute('aria-label', `Tuần này đã học ${doneN} ngày` + (t[d] ? ', kể cả hôm nay' : ', hôm nay chưa học'));
    c.appendChild(wk);
    const g = E('div', 'db-sc-goal');
    const pct = Math.min(100, Math.round(todayN / goal * 100));
    const gt = E('span', 'db-sc-gt'); gt.appendChild(E('b', null, pct >= 100 ? 'Đạt mục tiêu hôm nay' : `Hôm nay ${todayN}/${goal} lượt`));
    const sel = E('select'); sel.setAttribute('aria-label', 'Mục tiêu mỗi ngày');
    [10, 20, 40, 60].forEach(n => { const o = E('option', null, 'mục tiêu ' + n); o.value = n; if (n === goal) o.selected = true; sel.appendChild(o); });
    sel.addEventListener('change', () => { try { localStorage.setItem(GK, sel.value); } catch (e) {} render(); });
    gt.appendChild(sel); g.appendChild(gt);
    const bar = E('span', 'db-sc-bar'); bar.setAttribute('role', 'img'); bar.setAttribute('aria-label', `Đã làm ${pct}% mục tiêu hôm nay`);
    const f = E('i'); f.style.width = pct + '%'; bar.appendChild(f); g.appendChild(bar);
    c.appendChild(g);
    // v177: khoe chuỗi ngày học
    if (st >= 2 && typeof window.htaShare === 'function') {
      const sh = E('button', 'db-sc-share', `📤 Chia sẻ chuỗi ${st} ngày`); sh.type = 'button';
      sh.addEventListener('click', () => window.htaShare('streak', { n: st, best: Math.max(best, st), week: states, today: (d + 3) % 7 }));
      c.appendChild(sh);
    }
    return c;
  }

  /* ---------- điểm từng kỹ năng: mỗi cấp chiếm 20 điểm (A1 0–20 … C1 80–100) ---------- */
  function ladder(fr) {
    const f = fr.map(x => Math.max(0, Math.min(1, x || 0)));
    const score = Math.round(f.reduce((a, b) => a + b * 20, 0));
    if (!f.some(x => x > 0)) return { score: 0, lv: null, f };
    let i = f.findIndex(x => x < 0.6); if (i < 0) i = 4;
    return { score, lv: LV[i], f };
  }
  function skills() {
    const out = {};
    // Ngữ pháp: bài đã hoàn thành / tổng số bài mỗi cấp
    const g = { done: [0, 0, 0, 0, 0], tot: [0, 0, 0, 0, 0] };
    try { GX_ALL.forEach(it => { const l = it.lv - 1; if (l < 0 || l > 4) return; g.tot[l]++; if (gxStatus(it.id) === 'done') g.done[l]++; }); } catch (e) {}
    out.g = Object.assign(ladder(g.done.map((x, i) => g.tot[i] ? x / g.tot[i] : 0)), { det: g, unit: 'bài' });
    // Từ vựng: từ đã nhớ chắc (đã ôn qua ≥ 3 bậc) so với mốc cần biết của mỗi cấp
    const VT = [300, 600, 900, 900, 600], v = { done: [0, 0, 0, 0, 0], tot: [0, 0, 0, 0, 0] };
    try { VC_ALL.forEach(it => { const l = it.lv - 1; if (l < 0 || l > 4) return; v.tot[l]++; const r = srs[vcK(it)]; if (r && (r.s || 0) >= 3) v.done[l]++; }); } catch (e) {}
    out.v = Object.assign(ladder(v.done.map((x, i) => x / Math.min(VT[i], v.tot[i] || VT[i]))), { det: v, unit: 'từ', goal: VT });
    // Nói: bài Shadowing nói tốt (≥ 3 câu, trung bình ≥ 70%) + tình huống Trò chuyện đạt ≥ 70%
    const sp = J('hoc-tieng-anh-shadow-prog') || {}, tk = J('hoc-tieng-anh-talk') || {};
    const s = { done: [0, 0, 0, 0, 0], tot: [0, 0, 0, 0, 0] }, l = { done: [0, 0, 0, 0, 0], tot: [0, 0, 0, 0, 0] };
    Object.keys(MAP.sh).forEach(id => { const L = MAP.sh[id] - 1; s.tot[L]++; l.tot[L]++; });
    Object.keys(MAP.talk).forEach(id => { s.tot[MAP.talk[id] - 1]++; });
    Object.keys(sp).forEach(id => {
      const L = lvOfSh(id) - 1, p = sp[id]; if (L < 0 || L > 4 || !p) return;
      const r = Object.values(p.r || {}).filter(x => typeof x === 'number');
      if (r.length >= 3 && r.reduce((a, b) => a + b, 0) / r.length >= 70) s.done[L]++;
      const h = Object.keys(p.h || {}).length;
      if ((p.q != null && p.q >= 60) || h >= 3) l.done[L]++;
    });
    Object.keys(tk).forEach(id => { const L = (MAP.talk[id] || 0) - 1; if (L >= 0 && tk[id] && tk[id].best >= 70) s.done[L]++; });
    // v151: + đề nói theo chủ đề được AI chấm từ 6/10
    const s2 = J('hoc-tieng-anh-speak2') || {};
    TSP.forEach(([id, lv]) => { s.tot[lv - 1]++; if (s2[id] && s2[id].best >= 6) s.done[lv - 1]++; });
    // v150: + hội thoại nghe hiểu đạt ≥ 70%
    const l2 = J('hoc-tieng-anh-listen2') || {};
    (typeof TLS !== 'undefined' ? TLS : []).forEach(([id, lv]) => { l.tot[lv - 1]++; if (l2[id] && l2[id].best >= 70) l.done[lv - 1]++; });
    const tgt = (d, i, cap) => Math.min(cap, d.tot[i] || cap);
    out.s = Object.assign(ladder(s.done.map((x, i) => x / tgt(s, i, 6))), { det: s, unit: 'bài', goal: [6, 6, 6, 6, 6] });
    // Nghe: bài Shadowing đã nghe hiểu (quiz ≥ 60% hoặc nghe ≥ 3 câu)
    out.l = Object.assign(ladder(l.done.map((x, i) => x / tgt(l, i, 6))), { det: l, unit: 'bài', goal: [6, 6, 6, 6, 6] });
    // Viết: câu dịch đúng ở Bài tập + đoạn văn Luyện dịch đạt ≥ 70%
    const exd = J('hoc-tieng-anh-ex-done') || [], w = { done: [0, 0, 0, 0, 0], tot: [0, 0, 0, 0, 0] }, pa = J('hoc-tieng-anh-para-ex') || {};
    const glv = {}; try { GX_ALL.forEach(it => { glv[it.id] = it.lv; }); } catch (e) {}
    try { Object.keys(EX_DATA).forEach(id => { const L = (glv[id] || 0) - 1; if (L >= 0) w.tot[L] += (EX_DATA[id] || []).length; }); } catch (e) {}
    (Array.isArray(exd) ? exd : []).forEach(k => { const L = (glv[String(k).split('|')[0]] || 0) - 1; if (L >= 0) w.done[L]++; });
    const pd = [0, 0, 0, 0, 0], pt = [0, 0, 0, 0, 0];
    Object.keys(MAP.pa).forEach(id => { const [L, n] = MAP.pa[id]; pt[L - 1]++; const p = pa[id]; if (!p || !p.sc) return; const v2 = Object.values(p.sc); if (v2.length >= n && v2.reduce((a, b) => a + b, 0) / v2.length >= 70) pd[L - 1]++; });
    // + đề viết được AI chấm từ 6/10 (2 đề mỗi cấp)
    const wp = J('hoc-tieng-anh-write') || {}, wt = [0, 0, 0, 0, 0];
    Object.keys(wp).forEach(id => { const m = /^w-([abc][12])-/.exec(id), L = m ? { a1: 0, a2: 1, b1: 2, b2: 3, c1: 4 }[m[1]] : -1; if (L >= 0 && wp[id] && wp[id].best >= 6) wt[L]++; });
    out.w = Object.assign(ladder(w.done.map((x, i) => 0.4 * Math.min(1, x / Math.min(60, w.tot[i] || 60)) + 0.3 * Math.min(1, pd[i] / 3) + 0.3 * Math.min(1, wt[i] / 2))), { det: w, unit: 'câu dịch đúng', pd, pt, wt, goal: [60, 60, 60, 60, 60] });
    // Đọc: bài đọc đạt ≥ 70% / 6 bài mỗi cấp
    const rp = J('hoc-tieng-anh-read') || {}, rd = { done: [0, 0, 0, 0, 0], tot: [0, 0, 0, 0, 0] };
    const RDM = {"a1-family":1,"a1-day":1,"a1-market":1,"a1-room":1,"a1-weekend":1,"a1-message":1,"a2-trip":2,"a2-job":2,"a2-phone":2,"a2-recipe":2,"a2-neighbour":2,"a2-3d":2,"b1-remote":3,"b1-plastic":3,"b1-sleep":3,"b1-volunteer":3,"b1-render":3,"b1-language":3,"b2-ai":4,"b2-city":4,"b2-gamedev":4,"b2-tourism":4,"b2-habits":4,"b2-coffee":4,"c1-attention":5,"c1-memory":5,"c1-digital-human":5,"c1-water":5,"c1-translation":5,"c1-failure":5};
    Object.keys(RDM).forEach(id => { const L = RDM[id] - 1; rd.tot[L]++; if (rp[id] && rp[id].best >= 70) rd.done[L]++; });
    out.r = Object.assign(ladder(rd.done.map((x, i) => x / tgt(rd, i, 6))), { det: rd, unit: 'bài', goal: [6, 6, 6, 6, 6] });
    return out;
  }
  const SK = [
    ['l', '🎧', 'Nghe', 'page-read', 'Nghe hội thoại, Shadowing bước nghe hiểu'],
    ['s', '🗣️', 'Nói', 'page-talk', 'Shadowing, nói theo đề, trò chuyện'],
    ['r', '📖', 'Đọc', 'page-read', 'Bài đọc hiểu đạt từ 70%'],
    ['w', '✍️', 'Viết', 'page-exercise', 'Bài tập dịch, luyện dịch đoạn văn, viết theo đề'],
    ['v', '📚', 'Từ vựng', 'page-vocab', 'Từ đã nhớ chắc qua ôn tập'],
    ['g', '📐', 'Ngữ pháp', 'page-grammar', 'Bài ngữ pháp đã hoàn thành']
  ];
  const goTab = id => { const b = document.querySelector(`nav.tabbar button[data-page="${id}"]`); if (b) { b.click(); const m = document.querySelector('main'); window.scrollTo({ top: m ? Math.max(0, m.offsetTop - 8) : 0 }); } };

  /* ---------- v147: HÔM NAY NÊN HỌC — đề xuất theo điểm yếu (quy tắc, không cần AI) ---------- */
  const TSP = [["s-a1-me", 1, "Talk about yourself"], ["s-a1-food", 1, "Your favourite food"], ["s-a1-home", 1, "Your home"], ["s-a1-weekend", 1, "Your weekend"], ["s-a2-trip", 2, "A memorable trip"], ["s-a2-person", 2, "A person you admire"], ["s-a2-job", 2, "Your job or studies"], ["s-a2-plans", 2, "Plans for next weekend"], ["s-b1-city", 3, "City or countryside?"], ["s-b1-skill", 3, "A skill you learned"], ["s-b1-tech", 3, "Technology in your life"], ["s-b1-advice", 3, "Advice for a new learner"], ["s-b2-remote", 4, "Working from home"], ["s-b2-project", 4, "A challenging project"], ["s-b2-social", 4, "Social media and young people"], ["s-b2-change", 4, "A decision that changed your life"], ["s-c1-ai", 5, "AI and the future of work"], ["s-c1-success", 5, "What does success mean?"], ["s-c1-tourism", 5, "Tourism: benefit or burden?"], ["s-c1-language", 5, "Why learn languages in the age of AI?"]];
  const TLS = [["l-a1-cafe", 1, "At a Café"], ["l-a1-new", 1, "A New Classmate"], ["l-a1-phone", 1, "Where Are You?"], ["l-a2-hotel", 2, "Checking In"], ["l-a2-weekend", 2, "A Rainy Weekend"], ["l-a2-doctor", 2, "At the Doctor's"], ["l-b1-interview", 3, "A Job Interview"], ["l-b1-plan", 3, "Planning a Trip"], ["l-b1-complaint", 3, "A Problem with an Order"], ["l-b2-meeting", 4, "A Project Meeting"], ["l-b2-radio", 4, "Radio: Cities and Heat"], ["l-b2-flat", 4, "Choosing a Flat"], ["l-c1-podcast", 5, "Podcast: Is Multitasking a Myth?"], ["l-c1-debate", 5, "Debate: A Four-Day Week"], ["l-c1-lecture", 5, "Lecture: The Language of Colour"]];
  const TT = {"sh":[["a1-morning",1,"My Morning"],["a1-friend",1,"My Best Friend"],["a2-dalat",2,"A Trip to Da Lat"],["a2-english",2,"Learning English"],["b1-home",3,"Working from Home"],["b1-sleep",3,"Why Sleep Matters"],["b2-habits",4,"The Power of Habits"],["b2-city",4,"City Life or Country Life?"],["c1-slow",5,"The Case for Slowing Down"],["c1-fail",5,"Learning from Failure"],["d-cafe",1,"At the Coffee Shop"],["d-meet",1,"Meeting a New Neighbour"],["d-weekend",2,"Weekend Plans"],["d-doctor",2,"Booking an Appointment"],["d-complain",3,"Returning a Faulty Product"],["d-small",3,"Small Talk at a Party"],["d-roommate",4,"Talking to a Flatmate"],["t-airport",2,"Checking In at the Airport"],["t-hoian",2,"A Day in Hoi An"],["t-hotel",3,"A Problem at the Hotel"],["t-culture",3,"Tet Holiday Traditions"],["t-solo",4,"Why I Travel Alone"],["w-first",2,"My First Day at Work"],["w-meeting",3,"Starting a Team Meeting"],["w-email",3,"Asking for a Deadline Extension"],["w-present",4,"Presenting Quarterly Results"],["w-negotiate",5,"Negotiating with a Supplier"],["i-intro",2,"Tell Me About Yourself"],["i-strength",3,"Strengths and Weaknesses"],["i-why",3,"Why Do You Want This Job?"],["i-conflict",4,"Handling a Difficult Situation"],["i-questions",4,"Questions for the Interviewer"],["h-water",1,"Drink More Water"],["h-walk",2,"The Benefits of Walking"],["h-stress",3,"Dealing with Stress"],["h-food",4,"What Is a Balanced Diet?"],["s-phone",2,"My Phone and Me"],["s-ai",3,"AI in Everyday Life"],["s-space",3,"Why Explore Space?"],["s-ocean",4,"The Plastic Problem"],["s-brain",5,"How the Brain Learns a Language"],["x-kindness",3,"The Ripple Effect of Kindness"],["x-public",4,"Overcoming the Fear of Public Speaking"],["e-hometown",3,"Part 1: Your Hometown"],["e-hobby",3,"Part 1: Free Time"],["e-person",4,"Part 2: A Person Who Inspired You"],["e-place",4,"Part 2: A Place You Want to Visit"],["e-tech",5,"Part 3: Technology and Society"],["o-announce",3,"Office Announcement"],["o-voicemail",3,"A Voicemail Message"],["o-conversation",3,"Rescheduling a Client Visit"],["o-ad",4,"A Radio Advertisement"],["o-tour",4,"A Factory Tour"],["a1-family",1,"My Family"],["a1-fruit",1,"Buying Fruit at the Market"],["a1-room",1,"My Room"],["a2-cook",2,"Cooking with My Grandmother"],["b2-memory",4,"The Photo I Almost Lost"],["c1-attention",5,"Reclaiming Our Attention"]],"rd":[["a1-family",1,"My Family"],["a1-day",1,"A Day in My Life"],["a1-market",1,"At the Market"],["a1-room",1,"My Room"],["a1-weekend",1,"A Weekend in the Park"],["a1-message",1,"A Message to a Friend"],["a2-trip",2,"A Trip to Sa Pa"],["a2-job",2,"My First Job"],["a2-phone",2,"Too Much Phone?"],["a2-recipe",2,"Grandma's Pho"],["a2-neighbour",2,"A Helpful Neighbour"],["a2-3d",2,"Learning 3D at Home"],["b1-remote",3,"Working from Home"],["b1-plastic",3,"Living with Less Plastic"],["b1-sleep",3,"Why We Need Sleep"],["b1-volunteer",3,"A Summer of Volunteering"],["b1-render",3,"How an Animated Film Is Made"],["b1-language",3,"Learning a Language as an Adult"],["b2-ai",4,"Will AI Take Our Jobs?"],["b2-city",4,"Cities Built for People"],["b2-gamedev",4,"The Hidden Cost of Beautiful Games"],["b2-tourism",4,"When Tourists Become Too Many"],["b2-habits",4,"The Science of Habits"],["b2-coffee",4,"Viet Nam's Coffee Story"],["c1-attention",5,"The Attention Economy"],["c1-memory",5,"How Reliable Is Memory?"],["c1-digital-human",5,"The Uncanny Valley"],["c1-water",5,"The Sinking Delta"],["c1-translation",5,"What Gets Lost in Translation"],["c1-failure",5,"The Value of Failure"]],"wr":[["w-a1-me",1,"Introduce yourself"],["w-a1-day",1,"My daily routine"],["w-a1-friend",1,"My best friend"],["w-a1-note",1,"A short note"],["w-a2-weekend",2,"Last weekend"],["w-a2-email",2,"Invite a friend"],["w-a2-city",2,"My hometown"],["w-a2-review",2,"Review a restaurant"],["w-b1-opinion",3,"Online or classroom learning?"],["w-b1-story",3,"A day that didn't go as planned"],["w-b1-complaint",3,"A complaint email"],["w-b1-goal",3,"A goal for next year"],["w-b2-essay",4,"Social media: good or bad for young people?"],["w-b2-report",4,"Improving the workplace"],["w-b2-cover",4,"A cover letter"],["w-b2-problem",4,"Traffic in big cities"],["w-c1-ai",5,"AI and creative work"],["w-c1-proposal",5,"A proposal for your city"],["w-c1-review",5,"Review a film or book"],["w-c1-reflect",5,"A lesson from failure"]]};
  const SKN = { l: 'Nghe', s: 'Nói', r: 'Đọc', w: 'Viết', v: 'Từ vựng', g: 'Ngữ pháp' };
  async function openIn(page, fn) {
    const mk = { 'page-vocab': 'hoc-tieng-anh-vi-mode', 'page-para': 'hoc-tieng-anh-pq-mode' }[page];
    if (mk) try { localStorage.setItem(mk, 'main'); } catch (e) {}
    const b = document.querySelector(`nav.tabbar button[data-page="${page}"]`);
    if (b) b.click();
    try { if (window.appLoadTab) await window.appLoadTab(page); } catch (e) {}
    setTimeout(() => { try { if (fn) fn(); } catch (e) {} const m = document.querySelector('main'); window.scrollTo({ top: m ? Math.max(0, m.offsetTop - 8) : 0 }); }, 60);
  }
  function weekBySkill() {
    const d = dayNo(), w = { l: 0, s: 0, r: 0, w: 0, v: 0, g: 0 };
    for (let k = d - 6; k <= d; k++) { const r = act[k]; if (r) Object.keys(r).forEach(x => { if (x in w) w[x] += r[x]; }); }
    return w;
  }
  // việc cụ thể tiếp theo cho một kỹ năng, ở đúng cấp ước lượng
  function nextFor(k, S) {
    const L = Math.max(1, (S[k] && S[k].lv) ? LV.indexOf(S[k].lv) + 1 : 1), lvN = LV[L - 1];
    if (k === 'g') {
      let it = null; try { it = GX_ALL.find(x => x.lv === L && gxStatus(x.id) !== 'done') || GX_ALL.find(x => gxStatus(x.id) !== 'done'); } catch (e) {}
      if (it) return { ic: '📐', t: 'Ngữ pháp: ' + it.title, sub: `Bài ${LV[it.lv - 1]} tiếp theo trong lộ trình`, go: () => openIn('page-grammar', () => gxLesson(it.id)) };
    }
    if (k === 'r') {
      const rp = J('hoc-tieng-anh-read') || {};
      const it = TT.rd.find(x => x[1] === L && !(rp[x[0]] && rp[x[0]].best >= 70)) || TT.rd.find(x => !(rp[x[0]] && rp[x[0]].best != null));
      if (it) return { ic: '📖', t: 'Đọc: ' + it[2], sub: `Bài đọc ${LV[it[1] - 1]} · 5 câu hỏi`, go: () => openIn('page-read', () => { if (window.rdHome) window.rdHome('read'); if (window.rdOpen) window.rdOpen(it[0]); }) };
    }
    if (k === 'w') {
      const wp = J('hoc-tieng-anh-write') || {};
      const it = TT.wr.find(x => x[1] === L && !(wp[x[0]] && wp[x[0]].best >= 6)) || TT.wr.find(x => !(wp[x[0]] && wp[x[0]].best != null));
      if (it) return { ic: '✍️', t: 'Viết: ' + it[2], sub: `Đề viết ${LV[it[1] - 1]} · AI chấm và sửa lỗi`, go: () => openIn('page-read', () => { if (window.rdHome) window.rdHome('write'); if (window.wrOpen) window.wrOpen(it[0]); }) };
    }
    if (k === 'l') {
      const l2 = J('hoc-tieng-anh-listen2') || {};
      const it = TLS.find(x => x[1] === L && !(l2[x[0]] && l2[x[0]].best >= 70));
      if (it) return { ic: '🎧', t: 'Nghe: ' + it[2], sub: `Hội thoại ${LV[it[1] - 1]} · 2 giọng · câu hỏi nghe hiểu`, go: () => openIn('page-read', () => { if (window.rdHome) window.rdHome('listen'); if (window.lsOpen) window.lsOpen(it[0]); }) };
    }
    if (k === 's') {
      const s2 = J('hoc-tieng-anh-speak2') || {};
      const it = TSP.find(x => x[1] === L && !(s2[x[0]] && s2[x[0]].n));
      if (it) return { ic: '🎤', t: 'Nói theo đề: ' + it[2], sub: `Đề ${LV[it[1] - 1]} · nói liên tục, AI nhận xét`, go: () => openIn('page-talk', () => { if (window.spOpen) window.spOpen(it[0]); }) };
    }
    if (k === 's' || k === 'l') {
      const sp = J('hoc-tieng-anh-shadow-prog') || {};
      const did = id => { const p = sp[id]; if (!p) return false; return k === 's' ? Object.keys(p.r || {}).length >= 3 : (p.q != null || Object.keys(p.h || {}).length >= 3); };
      const it = TT.sh.find(x => x[1] === L && !did(x[0])) || TT.sh.find(x => !did(x[0]));
      if (it) return { ic: k === 's' ? '🗣️' : '🎧', t: (k === 's' ? 'Nói theo: ' : 'Nghe hiểu: ') + it[2], sub: `Shadowing ${LV[it[1] - 1]} · ${k === 's' ? 'luyện nói từng câu' : 'bước 1 nghe hiểu + quiz'}`, go: () => openIn('page-shadow', () => { if (window.shOpen) window.shOpen(it[0]); }) };
    }
    if (k === 'v') return { ic: '📚', t: `Từ vựng: học 10 từ mới ${lvN}`, sub: 'Mỗi ngày một ít, ôn đúng hạn để nhớ lâu', go: () => openIn('page-vocab') };
    return null;
  }
  function recs(S, due) {
    const out = [], seen = new Set();
    const add = r => { if (r && !seen.has(r.t) && out.length < 4) { seen.add(r.t); out.push(r); } };
    // 1. thẻ đến hạn
    if (due) add({ ic: '🔁', t: `Ôn ${due} thẻ đến hạn`, sub: 'Ôn đúng lúc sắp quên giúp nhớ lâu nhất', why: 'Đến hạn hôm nay', go: () => { if (window.srOpen) window.srOpen(); } });
    // 1b. tiếp tục lộ trình
    try { const np = nextPathTask(); if (np) add({ ic: '🗺️', t: np.it.kind + ': ' + np.it.t, sub: `Lộ trình ${LV[np.L - 1]} · chặng ${np.u.n} (${np.u.done}/${np.u.items.length} việc)`, why: 'Tiếp tục lộ trình', go: np.it.go }); } catch (e) {}
    // 2. điểm yếu từ Sổ lỗi
    const L = typeof window.mkList === 'function' ? window.mkList() : [];
    const gx = {}; L.filter(x => x.src === 'gx').forEach(x => { const id = String(x.k).split('|')[1]; (gx[id] = gx[id] || { n: 0, c: 0, cat: x.cat }); gx[id].n += x.n || 1; gx[id].c++; });
    const worst = Object.keys(gx).sort((a, b) => gx[b].n - gx[a].n)[0];
    if (worst && (gx[worst].c >= 2 || gx[worst].n >= 3)) {
      add({ ic: '📐', t: 'Học lại: ' + gx[worst].cat, sub: `Bạn đã sai ${gx[worst].n} lần ở ${gx[worst].c} câu của bài này`, why: 'Hay sai', go: () => openIn('page-grammar', () => gxLesson(worst)) });
    }
    if (L.length >= 3) {
      const by = {}; L.forEach(x => { by[x.src] = (by[x.src] || 0) + 1; });
      const SRCN = { gx: 'ngữ pháp', ex: 'bài tập dịch', qb: 'đặt câu hỏi', vc: 'từ vựng', irr: 'bất quy tắc', say: 'phát âm', talk: 'hội thoại', rd: 'đọc hiểu', wr: 'bài viết' };
      const top = Object.keys(by).sort((a, b) => by[b] - by[a])[0];
      add({ ic: '📕', t: `Luyện lại ${Math.min(10, L.length)} lỗi trong Sổ lỗi`, sub: `${L.length} lỗi chưa khắc phục · nhiều nhất ở ${SRCN[top] || top} (${by[top]})`, why: 'Sửa lỗi cũ', go: () => { if (window.srOpen) window.srOpen(); setTimeout(() => { const b = document.querySelector('.mk-entry button'); if (b) b.click(); }, 0); } });
    }
    // 3. kỹ năng yếu nhất (điểm thấp nhất; bằng nhau thì kỹ năng ít luyện tuần này)
    const wk = weekBySkill();
    const PRI = ['g', 'v', 'r', 'l', 's', 'w'];   // hoà điểm (người mới): nền tảng trước
    const order = PRI.slice().sort((a, b) => ((S[a].score || 0) - (S[b].score || 0)) || (wk[a] - wk[b]) || (PRI.indexOf(a) - PRI.indexOf(b)));
    const w1 = order[0];
    const n1 = nextFor(w1, S); if (n1) add(Object.assign(n1, { why: `Kỹ năng yếu nhất: ${SKN[w1]}` }));
    // 4. kỹ năng bỏ quên tuần này
    const idle = order.find(k => k !== w1 && !wk[k]);
    if (idle) { const n2 = nextFor(idle, S); if (n2) add(Object.assign(n2, { why: `Tuần này chưa luyện ${SKN[idle]}` })); }
    // còn chỗ: kỹ năng yếu thứ hai
    for (const k of order) { if (out.length >= 3) break; const n3 = nextFor(k, S); if (n3 && !seen.has(n3.t)) add(Object.assign(n3, { why: S[k].score ? `Cần cải thiện: ${SKN[k]}` : `Bắt đầu: ${SKN[k]}` })); }
    return out;
  }
  function recBox(S, due) {
    const R = recs(S, due);
    const box = E('div', 'tense-card db-recs');
    box.appendChild(E('h3', null, R.length ? `Hôm nay nên học · ${R.length} việc` : 'Hôm nay nên học'));
    box.appendChild(E('p', 'rv-note', 'Gợi ý dựa trên thẻ đến hạn, Sổ lỗi và kỹ năng còn yếu của bạn. Bấm để mở đúng bài.'));
    R.forEach((r, i) => {
      const b = E('button', 'db-rec c' + (i % 4) + (i === 0 ? ' first' : '')); b.type = 'button';
      b.appendChild(E('span', 'db-rec-ic', r.ic));
      const tx = E('span', 'db-rec-t');
      if (r.why) tx.appendChild(E('span', 'db-rec-why', r.why));
      tx.appendChild(E('b', null, r.t));
      if (r.sub) tx.appendChild(E('span', 'db-rec-sub', r.sub));
      b.appendChild(tx);
      b.appendChild(E('span', 'db-rec-go', '→'));
      b.addEventListener('click', () => r.go());
      box.appendChild(b);
    });
    return box;
  }
  window.dashRecs = () => { const S = skills(); return recs(S, 0).map(r => ({ t: r.t, why: r.why, sub: r.sub })); };


  /* ---------- v148: LỘ TRÌNH HỌC CHUNG — mỗi cấp 6 chặng nối các tab; việc tự tick khi làm xong ---------- */
  const TK = [["a1-meet",1,"Làm quen bạn mới"],["a1-family",1,"Kể về gia đình"],["a1-day",1,"Một ngày của bạn"],["a1-cafe",1,"Gọi đồ ở quán cà phê"],["a2-weekend",2,"Cuối tuần vừa rồi"],["a2-plans",2,"Kế hoạch tuần tới"],["a2-shop",2,"Mua áo ở cửa hàng"],["a2-directions",2,"Hỏi đường"],["a2-hotel",2,"Nhận phòng khách sạn"],["b1-interview",3,"Phỏng vấn vị trí 3D Artist"],["b1-review",3,"Họp review với trưởng nhóm 3D"],["b1-doctor",3,"Đi khám bệnh"],["b1-debate",3,"Bàn luận: học online hay học ở lớp?"],["b2-client",4,"Thương lượng deadline với khách hàng"],["b2-complaint",4,"Phàn nàn về đơn hàng lỗi"]];
  const UNITS = 6;
  // Từ vựng cho từng chặng: bài ngữ pháp của chặng → chủ đề từ vựng liên quan ("chủ đề" hoặc "chủ đề:từ khoá nhóm").
  const GXV = {
    pronouns: ['basics:Đại từ', 'family'], 'be-present': ['family', 'feelings', 'appearance'], plural: ['home', 'animals', 'fruitveg'],
    nouns: ['food', 'basics:số lượng', 'fruitveg'], articles: ['home', 'city'], demonstratives: ['basics:chỉ định', 'clothes', 'colors'],
    thereis: ['home', 'city'], frequency: ['routine:tần suất', 'routine'], prepositions: ['basics:Giới từ', 'city', 'home'],
    conjunctions: ['basics:Liên từ', 'feelings'], 'past-be': ['time', 'weather', 'feelings'], 'present-simple': ['routine', 'jobs', 'hobbies'],
    'present-continuous': ['routine', 'sports', 'clothes'], 'modal-can': ['sports', 'hobbies', 'body'], 'howto-greet': ['relationships', 'family'],
    'howto-personal': ['jobs', 'school', 'city'], 'howto-time': ['time', 'routine'], 'howto-family': ['family', 'relationships'],
    'possessive-s': ['family', 'home'], havegot: ['family', 'appearance', 'body'], 'adj-modifier': ['appearance', 'personality', 'feelings'],
    'adverb-manner': ['sports', 'personality'], 'prep-movement': ['transport', 'city'], 'simple-vs-continuous': ['routine', 'hobbies'],
    'past-simple': ['travel', 'holidays'], 'regular-ed': ['holidays', 'hobbies'], 'past-continuous': ['weather', 'transport'],
    'going-to': ['travel', 'holidays'], 'future-simple': ['weather', 'technology'], 'present-perfect': ['travel', 'school', 'jobs'],
    imperative: ['cooking', 'health'], 'like-ing': ['hobbies', 'sports', 'entertainment'], 'verb-to-v': ['school', 'jobs'],
    questions: ['basics:để hỏi', 'jobs'], 'wh-questions': ['basics:để hỏi', 'city'], 'howmuch-howadj': ['shopping', 'food'],
    compare: ['city', 'animals', 'technology'], 'modal-more': ['health', 'school'], too: ['clothes', 'shopping'], enough: ['food', 'shopping'],
    ittakes: ['transport', 'cooking'], itsadj: ['sports', 'nature'], 'cond-1': ['weather', 'health', 'nature'],
    'howto-suggest': ['hobbies', 'entertainment'], 'howto-invite': ['holidays', 'relationships'], 'howto-restaurant': ['restaurant', 'food'],
    'howto-shop': ['shopping', 'clothes'], 'howto-directions': ['city', 'transport'], 'howto-hotel': ['travel'], 'howto-phone': ['technology', 'socialmedia'],
    'howto-apologise': ['relationships', 'office'],
    quantifiers: ['food', 'shopping'], indefinite: ['home', 'relationships'], 'present-perfect-continuous': ['sports', 'hobbies'],
    'pp-vs-past': ['travel', 'holidays'], 'past-perfect': ['travel', 'media'], 'future-continuous': ['jobs', 'office'], 'future-forms': ['holidays', 'travel'],
    stative: ['feelings', 'personality'], 'time-clauses': ['routine', 'school'], 'modal-deduction': ['law', 'appearance'],
    obligation: ['school', 'office'], passive: ['science', 'technology'], 'gerund-1': ['hobbies', 'entertainment'], 'relative-1': ['jobs', 'city'],
    'cond-2': ['finance', 'nature'], reported: ['media', 'relationships'], tag: ['weather', 'feelings'], 'so-neither': ['food', 'entertainment'],
    phrasal: ['routine', 'relationships'], sothat: ['weather', 'health'], suchthat: ['art', 'entertainment'], makelet: ['family', 'school'],
    asktell: ['health', 'office'], usedto: ['city', 'holidays'], hadbetter: ['health', 'travel'], spend: ['socialmedia', 'finance'],
    'howto-opinion': ['society', 'media'],
    'past-perfect-continuous': ['sports', 'jobs'], 'future-perfect': ['finance', 'office'], 'future-in-past': ['science', 'art'], 'cond-3': ['law', 'health'],
    'relative-2': ['art', 'city'], 'gerund-2': ['personality', 'school'], 'modal-perfect': ['law', 'nature'], 'passive-report': ['media', 'science'],
    participle: ['nature', 'travel'], 'unless-provided': ['finance', 'law'], 'prep-collocation': ['personality', 'feelings'], havedone: ['home', 'appearance'],
    suggest: ['health', 'restaurant'], prefer: ['entertainment', 'food'], itstime: ['nature', 'society'], although: ['society', 'sports'],
    paired: ['technology', 'jobs'], prevent: ['health', 'nature'], 'howto-email': ['office', 'jobs'],
    'future-perfect-continuous': ['office', 'science'], 'polite-tenses': ['office', 'restaurant'], 'inversion-perfect': ['media', 'law'],
    wish: ['feelings', 'relationships'], mixedcond: ['finance', 'school'], inversion: ['art', 'nature'], cleft: ['personality', 'media'],
    themore: ['technology', 'health'], subjunctive: ['society', 'law'], 'relative-advanced': ['science', 'art'], whatever: ['finance', 'society'],
    emphasis: ['feelings', 'entertainment'], discourse: ['society', 'science']
  };
  const isFirm = it => { try { if (typeof vcIs === 'function' && vcIs(it)) return true; } catch (e) {} const r = srs[vcK(it)]; return !!(r && (r.s || 0) >= 3); };   // v162: “thuộc” = đã ✓ thuộc hoặc đã nhớ chắc
  const uwCache = {};
  // mỗi chặng một bộ từ cố định, không trùng chặng khác: lấy xen kẽ từ các chủ đề liên quan, thiếu thì bù từ chủ đề nhiều từ nhất của cấp
  function unitWords(L, size) {
    if (uwCache[L]) return uwCache[L];
    let G = [], T = []; try { G = GX_ALL.filter(x => x.lv === L); T = VOCAB_TOPICS; } catch (e) { return []; }
    const per = Math.ceil(G.length / UNITS), used = new Set(), out = [];
    const pool = spec => {
      const [tid, kw] = spec.split(':'), t = T.find(x => x.id === tid); if (!t) return null;
      let gi = -1; if (kw) gi = t.groups.findIndex(g => (g.vi || '').toLowerCase().includes(kw.toLowerCase()));
      const g = gi >= 0 ? t.groups[gi] : null;
      return { vi: g ? g.vi : t.vi, items: t.items.filter(it => it.lv === L && (gi < 0 || it.gi === gi)) };
    };
    const fill = T.filter(t => t.id !== 'cg3d').map(t => ({ vi: t.vi, items: t.items.filter(it => it.lv === L) })).sort((a, b) => b.items.length - a.items.length);
    for (let u = 0; u < UNITS; u++) {
      // tầng 1: chủ đề chính của từng bài ngữ pháp; tầng 2: chủ đề phụ — để bộ từ gọn trong vài chủ đề
      const gs = G.slice(u * per, (u + 1) * per), t1 = [], t2 = [];
      gs.forEach(g => { const x = (GXV[g.id] || [])[0]; if (x && !t1.includes(x)) t1.push(x); });
      gs.forEach(g => (GXV[g.id] || []).slice(1).forEach(x => { if (!t1.includes(x) && !t2.includes(x)) t2.push(x); }));
      const pick = [], cnt = new Map();
      const take = (pl) => { while (pl.items.length) { const it = pl.items.shift(), k = vcK(it); if (used.has(k)) continue; used.add(k); pick.push(it); try { Object.defineProperty(it, '_pv', { value: pl.vi, configurable: true, writable: true }); } catch (e) {} cnt.set(pl.vi, (cnt.get(pl.vi) || 0) + 1); return true; } return false; };
      [t1, t2].forEach(tier => {
        const pools = tier.map(pool).filter(Boolean); let any = true;
        while (pick.length < size && any) { any = false; for (const pl of pools) { if (pick.length >= size) break; if (take(pl)) any = true; } }
      });
      for (const pl of fill) { if (pick.length >= size) break; while (pick.length < size && take(pl)); }
      const src = [...cnt].map(([vi, n]) => ({ vi, n })).sort((a, b) => b.n - a.n), ord = src.map(x => x.vi);
      // hiện theo từng chủ đề cho dễ học
      out.push({ items: pick.map((it, i) => [it, i]).sort((a, b) => ord.indexOf(a[0]._pv) - ord.indexOf(b[0]._pv) || a[1] - b[1]).map(x => x[0]), src });
    }
    return (uwCache[L] = out);
  }
  function known(L) { let n = 0; try { VC_ALL.forEach(it => { if (it.lv === L) { const r = srs[vcK(it)]; if (r && (r.s || 0) >= 3) n++; } }); } catch (e) {} return n; }
  function buildPath(L) {
    let G = []; try { G = GX_ALL.filter(x => x.lv === L); } catch (e) {}
    const R = TT.rd.filter(x => x[1] === L), Sh = TT.sh.filter(x => x[1] === L), W = TT.wr.filter(x => x[1] === L), T = TK.filter(x => x[1] === L);
    const rp = J('hoc-tieng-anh-read') || {}, wp = J('hoc-tieng-anh-write') || {}, sp = J('hoc-tieng-anh-shadow-prog') || {}, tp = J('hoc-tieng-anh-talk') || {};
    const kn = known(L), per = Math.ceil(G.length / UNITS), vStep = [40, 50, 60, 60, 50][L - 1];
    const wAt = [1, 2, 4, 5], tAt = T.length >= UNITS ? [0, 1, 2, 3, 4, 5] : T.length >= 3 ? [0, 2, 4, 1, 3, 5] : [1, 4, 0, 2, 3, 5];
    const units = [];
    for (let u = 0; u < UNITS; u++) {
      const items = [];
      G.slice(u * per, (u + 1) * per).forEach(g => items.push({ ic: '📐', t: g.title, kind: 'Ngữ pháp', done: (() => { try { return gxStatus(g.id) === 'done'; } catch (e) { return false; } })(), go: () => openIn('page-grammar', () => gxLesson(g.id)) }));
      const ws = unitWords(L, vStep)[u] || { items: [], src: [] }, wl = ws.items, wk = wl.filter(isFirm).length, wn = wl.length;
      const wTop = ws.src.slice(0, 3).map(x => `${x.vi} (${x.n})`).join(' · ') + (ws.src.length > 3 ? ' …' : '');
      if (wn) items.push({ ic: '📚', t: `Học thuộc ${wn} từ ${LV[L - 1]} của chặng (đã thuộc ${wk}/${wn})`,
        sub: `Chủ đề: ${wTop} — gắn với bài ngữ pháp của chặng · từ được tính “thuộc” khi bạn bấm ✓ hoặc trả lời đúng ở Thẻ nhớ / Kiểm tra`,
        kind: 'Từ vựng', done: wk >= wn,
        go: () => openIn('page-vocab', () => { if (typeof vcOpenUnit === 'function') vcOpenUnit({ mix: true, icon: '🗺️', vi: `Lộ trình ${LV[L - 1]} · chặng ${u + 1}`, en: `${wn} từ · ${ws.src.map(x => x.vi).join(', ')}`, items: wl }, 'list'); }) });
      if (R[u]) items.push({ ic: '📖', t: R[u][2], kind: 'Đọc hiểu', done: !!(rp[R[u][0]] && rp[R[u][0]].best >= 70), go: () => openIn('page-read', () => { if (window.rdHome) window.rdHome('read'); if (window.rdOpen) window.rdOpen(R[u][0]); }) });
      const sh = Sh.length ? Sh[u % Sh.length] : null;
      if (sh && (u < Sh.length || Sh.length >= 3)) items.push({ ic: '🎙️', t: sh[2], kind: 'Shadowing', done: Object.keys((sp[sh[0]] || {}).b || {}).length >= 3, go: () => openIn('page-shadow', () => { if (window.shOpen) window.shOpen(sh[0]); }) });
      const lsL = TLS.filter(x => x[1] === L), lsi = [0, 2, 4].indexOf(u);
      if (lsi >= 0 && lsL[lsi]) { const d0 = lsL[lsi], l2 = J('hoc-tieng-anh-listen2') || {}; items.push({ ic: '🎧', t: d0[2], kind: 'Nghe hội thoại', done: !!(l2[d0[0]] && l2[d0[0]].best >= 70), go: () => openIn('page-read', () => { if (window.rdHome) window.rdHome('listen'); if (window.lsOpen) window.lsOpen(d0[0]); }) }); }
      const spL = TSP.filter(x => x[1] === L), spi = [1, 3, 5].indexOf(u);
      if (spi >= 0 && spL[spi]) { const d1 = spL[spi], s2 = J('hoc-tieng-anh-speak2') || {}; items.push({ ic: '🎤', t: d1[2], kind: 'Nói theo đề', done: !!(s2[d1[0]] && (s2[d1[0]].best >= 6 || s2[d1[0]].n >= 2)), go: () => openIn('page-talk', () => { if (window.spOpen) window.spOpen(d1[0]); }) }); }
      const ti = tAt.indexOf(u); if (ti >= 0 && T[ti]) { const tk = T[ti]; items.push({ ic: '💬', t: tk[2], kind: 'Nói chuyện', done: !!(tp[tk[0]] && tp[tk[0]].best >= 70), go: () => openIn('page-talk', () => { if (window.talkOpen) window.talkOpen(tk[0]); }) }); }
      const wi = wAt.indexOf(u); if (wi >= 0 && W[wi]) { const w = W[wi]; items.push({ ic: '✍️', t: w[2], kind: 'Viết', done: !!(wp[w[0]] && wp[w[0]].best >= 6), go: () => openIn('page-read', () => { if (window.rdHome) window.rdHome('write'); if (window.wrOpen) window.wrOpen(w[0]); }) }); }
      const gs = G.slice(u * per, (u + 1) * per).map(g => g.title);
      units.push({ n: u + 1, name: gs.length ? gs.slice(0, 2).join(' · ') + (gs.length > 2 ? ' …' : '') : 'Ôn tập tổng hợp', items, done: items.filter(x => x.done).length });
    }
    return units;
  }
  function pathLevel() {
    let v = 0; try { v = +localStorage.getItem('hoc-tieng-anh-path-lv') || 0; } catch (e) {}
    if (v >= 1 && v <= 5) return v;
    // mặc định: cấp thấp nhất còn chưa xong của Ngữ pháp / Từ vựng
    try { const S = skills(); const lv = ['g', 'v'].map(k => S[k].lv ? LV.indexOf(S[k].lv) + 1 : 1); return Math.max(1, Math.min(...lv)); } catch (e) { return 1; }
  }
  function nextPathTask() {
    const L = pathLevel(), U = buildPath(L);
    for (const u of U) { const it = u.items.find(x => !x.done); if (it) return { L, u, it }; }
    return null;
  }
  function renderPath() {
    const L = pathLevel(), U = buildPath(L);
    const head = E('div', 'tense-card db-path-h');
    head.appendChild(E('h3', null, '🗺️ Lộ trình học ' + LV[L - 1]));
    head.appendChild(E('p', 'rv-note', 'Mỗi cấp có 6 chặng. Mỗi chặng nối các phần: ngữ pháp, từ vựng, đọc, nói, viết. Làm xong ở tab nào, việc đó tự được đánh dấu ✓.'));
    const chips = E('div', 'colloc-chips');
    LV.forEach((x, i) => {
      const u2 = buildPath(i + 1), tot = u2.reduce((a, b) => a + b.items.length, 0), dn = u2.reduce((a, b) => a + b.done, 0);
      const b = E('button', 'colloc-chip' + (L === i + 1 ? ' active' : ''), `${x} · ${Math.round(dn / Math.max(1, tot) * 100)}%`); b.type = 'button';
      b.addEventListener('click', () => { try { localStorage.setItem('hoc-tieng-anh-path-lv', String(i + 1)); } catch (e) {} render(); });
      chips.appendChild(b);
    });
    head.appendChild(chips);
    const tot = U.reduce((a, b) => a + b.items.length, 0), dn = U.reduce((a, b) => a + b.done, 0);
    const bar = E('div', 'db-bar db-path-bar'); const f = E('span', 'db-fill'); f.style.width = Math.round(dn / Math.max(1, tot) * 100) + '%'; bar.appendChild(f);
    head.appendChild(bar);
    head.appendChild(E('div', 'db-sk-d', `${dn}/${tot} việc đã xong` + (dn === tot ? ' · 🎉 Hoàn thành cấp ' + LV[L - 1] + '!' : '')));
    root.appendChild(head);
    const cur = U.findIndex(u => u.done < u.items.length);
    U.forEach((u, i) => {
      const c = E('details', 'tense-card db-unit' + (u.done === u.items.length ? ' done' : '') + (i === cur ? ' cur' : ''));
      if (i === cur) c.open = true;
      const sm = E('summary', 'db-unit-h');
      sm.appendChild(E('span', 'db-unit-n', u.done === u.items.length ? '✓' : String(u.n)));
      const tx = E('span', 'db-unit-t'); tx.appendChild(E('b', null, `Chặng ${u.n}`)); tx.appendChild(E('span', null, u.name)); sm.appendChild(tx);
      sm.appendChild(E('span', 'db-unit-c', `${u.done}/${u.items.length}`));
      c.appendChild(sm);
      u.items.forEach(it => {
        const r = E('button', 'db-task' + (it.done ? ' done' : '')); r.type = 'button';
        r.appendChild(E('span', 'db-task-ck', it.done ? '✓' : ''));
        r.appendChild(E('span', 'db-task-ic', it.ic));
        const t2 = E('span', 'db-task-t'); t2.appendChild(E('span', 'db-task-k', it.kind)); t2.appendChild(E('span', null, it.t)); if (it.sub) t2.appendChild(E('span', 'db-task-s', it.sub)); r.appendChild(t2);
        r.appendChild(E('span', 'db-rec-go', '→'));
        r.addEventListener('click', () => it.go());
        c.appendChild(r);
      });
      root.appendChild(c);
    });
  }

  /* ---------- vẽ ---------- */
  let view = 'sum'; try { if (localStorage.getItem('hoc-tieng-anh-dash-view') === 'path') view = 'path'; } catch (e) {}
  function viewBar() {
    if (document.querySelector('nav.nav5')) return E('div', 'db-vb-off');   // v160: Hôm nay / Lộ trình là 2 tab riêng
    const bar = E('div', 'rw-mode');
    [['sum', '📊 Tổng quan'], ['path', '🗺️ Lộ trình']].forEach(([v, label]) => {
      const b = E('button', 'rw-tab' + (view === v ? ' active' : ''), label); b.type = 'button';
      b.addEventListener('click', () => { if (view === v) return; view = v; try { localStorage.setItem('hoc-tieng-anh-dash-view', v); } catch (e) {} render(); });
      bar.appendChild(b);
    });
    return bar;
  }
  function render() {
    root.innerHTML = '';
    root.appendChild(viewBar());
    { const tt = document.getElementById('db-title'), ss = document.getElementById('db-sub');
      if (tt) tt.textContent = view === 'path' ? 'Lộ trình học' : 'Hôm nay';
      if (ss) ss.textContent = view === 'path' ? 'Mỗi cấp 6 chặng, mỗi chặng nối ngữ pháp, từ vựng, đọc, nghe, nói, viết. Làm xong ở đâu, việc đó tự được đánh dấu ✓.' : 'Việc cần làm hôm nay, chuỗi ngày học, điểm từng kỹ năng và mức hoàn thành theo cấp độ.'; }
    if (view === 'path') { renderPath(); return; }
    const t = dayTotals(), d = dayNo(), st = streakOf(t), todayN = t[d] || 0;
    let goal = 20; try { goal = Math.max(5, +localStorage.getItem(GK) || 20); } catch (e) {}
    // v175: chuỗi ngày học lên đầu; chưa làm kiểm tra xếp trình độ thì mời làm ngay sau đó
    let placed = false; try { placed = !!JSON.parse(localStorage.getItem('hoc-tieng-anh-placement') || 'null'); } catch (e) {}
    root.appendChild(streakCard(t, d, st, todayN, goal));
    if (!placed) placeCard();
    let due0 = 0; try { const hb = document.getElementById('review-btn'); const m = hb && /(\d+)/.exec(hb.textContent); due0 = m && !hb.classList.contains('done') ? +m[1] : 0; } catch (e) {}
    root.appendChild(recBox(skills(), due0));
    nextCard();
    if (placed) placeCard();
    // 1. hôm nay (v175: thay bằng khối chuỗi ngày ở trên; giữ lại cho chắc, không hiện)
    const top = E('div', 'tense-card db-today db-old');
    const ring = E('div', 'db-ring'); const pct = Math.min(100, Math.round(todayN / goal * 100));
    ring.style.setProperty('--p', pct); ring.setAttribute('role', 'img'); ring.setAttribute('aria-label', `Hôm nay ${todayN}/${goal} lượt luyện`);
    ring.appendChild(E('b', null, String(todayN))); ring.appendChild(E('span', null, '/ ' + goal));
    top.appendChild(ring);
    const tx = E('div', 'db-today-t');
    tx.appendChild(E('div', 'db-h', pct >= 100 ? '🎉 Đã đạt mục tiêu hôm nay!' : 'Mục tiêu hôm nay'));
    tx.appendChild(E('div', 'rv-note', pct >= 100 ? 'Tuyệt vời. Học thêm vẫn được tính vào tiến độ.' : `Còn ${goal - todayN} lượt luyện nữa (mỗi câu trả lời, mỗi thẻ ôn, mỗi lần nói đều tính một lượt).`));
    tx.appendChild(E('div', 'db-streak', st ? `🔥 Chuỗi ${st} ngày học liên tiếp` : '🔥 Bắt đầu chuỗi ngày học từ hôm nay'));
    const gs = E('label', 'db-goal'); gs.appendChild(document.createTextNode('Mục tiêu mỗi ngày: '));
    const sel = E('select'); [10, 20, 40, 60].forEach(n => { const o = E('option', null, n + ' lượt'); o.value = n; if (n === goal) o.selected = true; sel.appendChild(o); });
    sel.addEventListener('change', () => { try { localStorage.setItem(GK, sel.value); } catch (e) {} render(); });
    gs.appendChild(sel); tx.appendChild(gs);
    top.appendChild(tx);
    root.appendChild(top);

    // 2. việc cần làm ngay
    const qa = E('div', 'db-quick');
    let due = 0; try { const hb = document.getElementById('review-btn'); const m = hb && /(\d+)/.exec(hb.textContent); due = m && !hb.classList.contains('done') ? +m[1] : 0; } catch (e) {}
    const mkN = typeof window.mkCount === 'function' ? window.mkCount() : 0;
    const q1 = E('button', 'db-q' + (due ? ' hot' : ''), ''); q1.type = 'button';
    q1.appendChild(E('b', null, due ? String(due) : '✓')); q1.appendChild(E('span', null, due ? 'thẻ cần ôn hôm nay' : 'Đã ôn xong hôm nay'));
    q1.addEventListener('click', () => { if (window.srOpen) window.srOpen(); });
    const q2 = E('button', 'db-q' + (mkN ? ' hot' : ''), ''); q2.type = 'button';
    q2.appendChild(E('b', null, String(mkN))); q2.appendChild(E('span', null, mkN ? 'lỗi cần luyện lại' : 'Sổ lỗi đang trống'));
    q2.addEventListener('click', () => { if (window.srOpen) window.srOpen(); setTimeout(() => { const b = document.querySelector('.mk-entry button'); if (b) b.click(); }, 0); });
    qa.appendChild(q1); qa.appendChild(q2);
    root.appendChild(qa);

    // 2b. hôm nay nên học (v175: đã lên đầu trang)
    const S = skills();

    // 3. kỹ năng
    const sc = E('div', 'tense-card db-skills');
    sc.appendChild(E('h3', null, '🎯 Kỹ năng của bạn'));
    sc.appendChild(E('p', 'rv-note', 'Điểm 0–100 tính từ những gì bạn đã làm trong app: mỗi cấp A1 → C1 chiếm 20 điểm. Cấp độ là ước lượng để biết nên học gì tiếp, không thay cho bài thi.'));
    const axis = E('div', 'db-axis'); axis.setAttribute('aria-hidden', 'true');
    LV.forEach(x => axis.appendChild(E('span', null, x)));
    sc.appendChild(axis);
    SK.forEach(([k, ic, name, tab, how]) => {
      const x = S[k], row = E('div', 'db-sk' + (x.soon ? ' soon' : ''));
      const hd = E('div', 'db-sk-h');
      hd.appendChild(E('span', 'db-sk-n', ic + ' ' + name));
      hd.appendChild(E('span', 'db-sk-v', x.soon ? 'Sắp có' : x.lv ? `${x.score} · ${x.lv}` : 'Chưa có dữ liệu'));
      row.appendChild(hd);
      const bar = E('div', 'db-bar'); bar.setAttribute('role', 'img'); bar.setAttribute('aria-label', `${name}: ${x.soon ? 'sắp có' : x.score + ' điểm' + (x.lv ? ', khoảng ' + x.lv : '')}`);
      const fill = E('span', 'db-fill'); fill.style.width = (x.soon ? 0 : Math.max(x.score ? 2 : 0, x.score)) + '%'; bar.appendChild(fill);
      if (!x.soon) bar.title = `${name}: ${x.score}/100`;
      row.appendChild(bar);
      const sub = E('div', 'db-sk-d');
      if (x.det && x.lv) {
        const i = LV.indexOf(x.lv), dd = x.det;
        const goalN = x.goal ? Math.min(x.goal[i], dd.tot[i]) : dd.tot[i];
        sub.textContent = `${x.lv}: ${dd.done[i]}/${goalN} ${x.unit}` + (k === 'w' && x.pt ? ` · ${x.pd[i]}/3 đoạn văn · ${x.wt[i]}/2 đề viết` : '') + ' · ' + how;
      } else sub.textContent = how;
      row.appendChild(sub);
      if (tab) { row.classList.add('go'); row.tabIndex = 0; row.setAttribute('role', 'button'); row.addEventListener('click', () => goTab(tab)); row.addEventListener('keydown', e => { if (e.key === 'Enter') goTab(tab); }); }
      sc.appendChild(row);
    });
    root.appendChild(sc);

    // 4. 7 ngày
    const wk = E('div', 'tense-card db-week');
    wk.appendChild(E('h3', null, '📅 7 ngày gần đây'));
    const vals = [], WD = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
    for (let i = 6; i >= 0; i--) vals.push([d - i, t[d - i] || 0]);
    const mx = Math.max(goal, ...vals.map(x => x[1]));
    const ch = E('div', 'db-cols'); ch.setAttribute('role', 'list');
    const tip = E('div', 'db-tip', 'Chạm vào cột để xem số lượt');
    vals.forEach(([dn, n], i) => {
      const col = E('button', 'db-col' + (i === 6 ? ' now' : '')); col.type = 'button'; col.setAttribute('role', 'listitem');
      const dt = new Date((dn) * 864e5 + new Date().getTimezoneOffset() * 60000);
      const lab = i === 6 ? 'Nay' : WD[dt.getDay()];
      col.setAttribute('aria-label', `${lab}: ${n} lượt`);
      const area = E('span', 'db-col-a');
      const b = E('span', 'db-col-b'); b.style.height = (n ? Math.max(4, Math.round(n / mx * 100)) : 0) + '%'; area.appendChild(b);
      col.appendChild(area); col.appendChild(E('span', 'db-col-l', lab));
      const showTip = () => { tip.textContent = `${i === 6 ? 'Hôm nay' : WD[dt.getDay()] + ' ' + dt.getDate() + '/' + (dt.getMonth() + 1)}: ${n} lượt luyện`; ch.querySelectorAll('.db-col').forEach(c => c.classList.remove('sel')); col.classList.add('sel'); };
      col.addEventListener('mouseenter', showTip); col.addEventListener('focus', showTip); col.addEventListener('click', showTip);
      ch.appendChild(col);
    });
    const chw = E('div', 'db-chart'); chw.appendChild(ch);
    const gline = E('div', 'db-gl'); gline.style.setProperty('--g', (goal / mx * 100).toFixed(1)); gline.appendChild(E('span', null, 'mục tiêu ' + goal)); chw.appendChild(gline);
    wk.appendChild(chw); wk.appendChild(tip);
    const sum7 = vals.reduce((a, b) => a + b[1], 0), days7 = vals.filter(x => x[1]).length;
    wk.appendChild(E('div', 'rv-note', `Tuần này: ${sum7} lượt luyện trong ${days7}/7 ngày.`));
    root.appendChild(wk);

    // 5. hoàn thành theo cấp
    const lvC = E('div', 'tense-card db-levels');
    lvC.appendChild(E('h3', null, '🧭 Hoàn thành theo cấp độ'));
    const tb = E('table', 'db-tb');
    const th = E('tr'); ['', 'Ngữ pháp', 'Từ vựng', 'Shadowing', 'Bài tập'].forEach(h => th.appendChild(E('th', null, h)));
    const thead = E('thead'); thead.appendChild(th); tb.appendChild(thead);
    const tbody = E('tbody');
    const sh = { done: S.s.det.done, tot: [0, 0, 0, 0, 0] }; Object.values(MAP.sh).forEach(L => sh.tot[L - 1]++);
    const shDone = [0, 0, 0, 0, 0]; { const sp = J('hoc-tieng-anh-shadow-prog') || {}; Object.keys(sp).forEach(id => { const L = lvOfSh(id) - 1; const p = sp[id]; if (L >= 0 && L < 5 && p && Object.keys(p.b || {}).length) shDone[L]++; }); }
    LV.forEach((name, i) => {
      const tr = E('tr'); tr.appendChild(E('th', null, name));
      [[S.g.det.done[i], S.g.det.tot[i]], [S.v.det.done[i], S.v.det.tot[i]], [Math.min(shDone[i], sh.tot[i]), sh.tot[i]], [S.w.det.done[i], S.w.det.tot[i]]].forEach(([a, b]) => {
        const td = E('td'); const p = b ? Math.round(a / b * 100) : 0;
        td.appendChild(E('span', 'db-tn', `${a}/${b}`));
        const mb = E('span', 'db-mb'); const mf = E('i'); mf.style.width = p + '%'; mb.appendChild(mf); td.appendChild(mb);
        td.title = `${p}%`;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    tb.appendChild(tbody);
    const wrap = E('div', 'db-tbw'); wrap.appendChild(tb); lvC.appendChild(wrap);
    lvC.appendChild(E('p', 'rv-note', 'Ngữ pháp: bài đã hoàn thành · Từ vựng: từ đã nhớ chắc · Shadowing: bài đã luyện · Bài tập: câu dịch đúng.'));
    root.appendChild(lvC);
  }
  function show() {
    document.querySelectorAll('nav.tabbar button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    page.classList.add('active');
    try { if (pend) { clearTimeout(pend); localStorage.setItem(AK, JSON.stringify(act)); } } catch (e) {}
    render();
    const m = document.querySelector('main'); window.scrollTo({ top: m ? Math.max(0, m.offsetTop - 8) : 0 });
  }
  // v162: lối vào Kiểm tra xếp trình độ ngay đầu trang Hôm nay
  function placeCard() {
    let P = null; try { P = JSON.parse(localStorage.getItem('hoc-tieng-anh-placement') || 'null'); } catch (e) {}
    const b = E('button', 'tense-card db-place' + (P ? ' done' : '')); b.type = 'button';
    b.appendChild(E('span', 'db-place-ic', '🧭'));
    const tx = E('span', 'db-place-t');
    if (P && P.track) {
      const d = new Date(P.d || Date.now());
      tx.appendChild(E('b', null, `Trình độ của bạn: ${P.track}`));
      tx.appendChild(E('small', null, `Kiểm tra ngày ${d.getDate()}/${d.getMonth() + 1} · bấm để làm lại (50 câu mới · 15 phút)`));
    } else {
      tx.appendChild(E('b', null, 'Kiểm tra xếp trình độ'));
      tx.appendChild(E('small', null, 'Chưa biết bắt đầu từ đâu? 50 câu · 15 phút · app tự xếp cấp cho bạn'));
    }
    b.appendChild(tx); b.appendChild(E('span', 'db-place-ar', '→'));
    b.addEventListener('click', () => {
      if (window.secOpen) window.secOpen('learn', 'grammar'); else { const nb = document.querySelector('nav.tabbar button[data-page="page-grammar"]'); if (nb) nb.click(); }
      setTimeout(() => { if (typeof gxPlacementTest === 'function') gxPlacementTest(); }, 120);
    });
    root.appendChild(b);
  }
  // v160: thẻ “Việc hôm nay” — chặng đang học của lộ trình và việc tiếp theo
  function nextCard() {
    let L, U; try { L = pathLevel(); U = buildPath(L); } catch (e) { return; }
    const ci = U.findIndex(u => u.done < u.items.length);
    const c = E('div', 'tense-card db-next');
    c.appendChild(E('span', 'db-next-tag', 'VIỆC HÔM NAY'));
    if (ci < 0) {
      c.appendChild(E('div', 'db-next-k', 'Lộ trình ' + LV[L - 1]));
      c.appendChild(E('div', 'db-next-h', 'Đã xong cả 6 chặng 🎉'));
      c.appendChild(E('div', 'db-next-s', 'Chọn cấp tiếp theo trong tab Lộ trình.'));
    } else {
      const u = U[ci], nx = u.items.find(x => !x.done);
      c.appendChild(E('div', 'db-next-k', `Lộ trình ${LV[L - 1]} · ${u.done}/${u.items.length} việc`));
      c.appendChild(E('div', 'db-next-h', 'Chặng ' + u.n));
      c.appendChild(E('div', 'db-next-s', u.name));
      const sg = E('div', 'db-next-seg'); sg.style.setProperty('--n', u.items.length);
      u.items.forEach(x => sg.appendChild(E('span', x.done ? 'on' : '')));
      c.appendChild(sg);
      if (nx) {
        const go = E('button', 'db-next-go'); go.type = 'button';
        const tx = E('span', 'db-next-gt'); tx.appendChild(E('small', null, 'HỌC TIẾP · ' + String(nx.kind || '').toUpperCase())); tx.appendChild(E('b', null, nx.t));
        go.appendChild(tx); go.appendChild(E('span', 'db-next-ar', '→'));
        go.addEventListener('click', () => nx.go && nx.go());
        c.appendChild(go);
      }
    }
    const all = E('button', 'db-next-all', 'Xem cả lộ trình →'); all.type = 'button';
    all.addEventListener('click', () => { if (window.secOpen) window.secOpen('home', 'path'); });
    c.appendChild(all);
    root.appendChild(c);
  }
  window.dashView = v => { view = v === 'path' ? 'path' : 'sum'; try { localStorage.setItem('hoc-tieng-anh-dash-view', view); } catch (e) {} render(); };
  window.dashOpen = show;
  window.dashSkills = skills;
  if (btn) btn.addEventListener('click', show);
})();

/* ============================================================
   ✨ AI NHẬN XÉT Ở TAB DỊCH (v146) — giải thích lỗi bằng tiếng Việt, viết lại tự nhiên, gợi ý từ hay hơn.
   Dùng khoá AI của người học (cài ở tab Nói chuyện); LanguageTool vẫn chạy như cũ khi chưa có khoá.
============================================================ */
(function () {
  const inp = document.getElementById('tr-input'), card = document.getElementById('fx-card');
  if (!inp || !card) return;
  const E = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  const row = E('div', 'aic-row'); row.hidden = true;
  const btn = E('button', 'btn-ghost', '✨ AI nhận xét chi tiết'); btn.type = 'button';
  row.appendChild(btn);
  const out = E('div', 'aic-out');
  card.after(row); row.after(out);
  const words = t => (String(t).match(/[A-Za-z][A-Za-z'’-]*/g) || []).length;
  const isEn = () => { try { return typeof trSrc === 'undefined' || trSrc === 'en'; } catch (e) { return true; } };
  let lastText = '';
  const vis = () => { const t = inp.value.trim(); row.hidden = !(isEn() && words(t) >= 3); if (t !== lastText) out.innerHTML = ''; };
  inp.addEventListener('input', vis);
  ['tr-swap-btn', 'tr-clear'].forEach(id => { const b = document.getElementById(id); if (b) b.addEventListener('click', () => setTimeout(vis, 0)); });
  setTimeout(vis, 0);
  const SCHEMA = { type: 'OBJECT', properties: {
    level: { type: 'STRING' }, summary: { type: 'STRING' },
    errors: { type: 'ARRAY', items: { type: 'OBJECT', properties: { wrong: { type: 'STRING' }, right: { type: 'STRING' }, why: { type: 'STRING' } }, required: ['wrong', 'right', 'why'] } },
    natural: { type: 'STRING' },
    better: { type: 'ARRAY', items: { type: 'OBJECT', properties: { word: { type: 'STRING' }, alt: { type: 'STRING' }, why: { type: 'STRING' } }, required: ['word', 'alt', 'why'] } } },
    required: ['level', 'summary', 'errors', 'natural', 'better'], propertyOrdering: ['level', 'summary', 'errors', 'natural', 'better'] };
  const SYS = ['You are a friendly English teacher for Vietnamese learners. Analyse the learner\'s English text.',
    'errors: every real mistake (grammar, spelling, word choice, unnatural phrasing), at most 12. "wrong" must be copied exactly from the text (a short phrase); "right" is the corrected phrase; "why" explains in Vietnamese in one short sentence.',
    'natural: the whole text rewritten in natural, correct English with the same meaning and roughly the same level (do not make it fancy).',
    'better: up to 4 suggestions of stronger or more natural words/phrases the learner used (word = what they wrote, alt = better option, why = Vietnamese explanation). Use [] if none.',
    'level: estimated CEFR level of the text. summary: one encouraging sentence in Vietnamese about the text overall.',
    'If the text has no mistakes, errors must be [] and natural can equal the original. Return only JSON.'].join('\n');
  btn.addEventListener('click', async () => {
    const t = inp.value.trim(); if (!t) return;
    lastText = t;
    out.innerHTML = '';
    const c = E('div', 'input-card aic-card'); out.appendChild(c);
    const st = E('div', 'rv-note', '⏳ Đang kết nối AI…'); c.appendChild(st);
    btn.disabled = true;
    if (!window.aiAPI && window.appLoadTab) { try { await window.appLoadTab('page-talk'); } catch (e) {} }
    const A = window.aiAPI;
    if (!A) { st.textContent = 'Không tải được phần AI. Kiểm tra mạng rồi thử lại.'; btn.disabled = false; return; }
    if (!A.hasKey()) {
      st.textContent = '🔑 Cần cài khoá AI một lần (Gemini hoặc Groq đều miễn phí, chỉ lưu trên máy bạn). Phần kiểm tra lỗi tự động phía trên vẫn dùng được mà không cần khoá.';
      const s2 = E('button', 'btn-primary', 'Cài khoá AI →'); s2.type = 'button'; s2.addEventListener('click', () => A.setup()); c.appendChild(s2);
      btn.disabled = false; return;
    }
    st.textContent = `⏳ ${A.name()} đang đọc câu của bạn…`;
    let r = null, err = null;
    try { r = await A.json(SYS, 'Learner\'s text:\n"""\n' + t + '\n"""', SCHEMA, { temperature: 0.2, max: 2048, onRetry: n => { st.textContent = n >= 2 ? '⏳ Máy chủ bận, đang đổi model…' : '⏳ Đang thử lại…'; } }); } catch (e) { err = e; }
    btn.disabled = false;
    if (inp.value.trim() !== t) { out.innerHTML = ''; return; }
    if (!r || typeof r !== 'object') { st.textContent = '⚠️ ' + (err ? A.errText(err) : 'AI trả lời không đúng định dạng. Bấm lại nhé.'); return; }
    try { if (window.actLog) actLog('w'); } catch (e) {}
    const TXT = t;
    c.innerHTML = '';
    const h = E('h3', null, '✨ AI nhận xét' + (r.level ? ' · khoảng ' + String(r.level).toUpperCase() : ''));
    c.appendChild(h);
    if (r.summary) c.appendChild(E('div', 'rv-note', r.summary));
    const errs = (Array.isArray(r.errors) ? r.errors : []).filter(x => x && x.wrong && x.right && String(x.wrong).trim() !== String(x.right).trim() && TXT.includes(String(x.wrong)));   // bỏ lỗi AI tự bịa (không có trong bài)
    if (errs.length) {
      const ol = E('ol', 'wr-errs');
      errs.forEach(x => {
        const li = E('li'); li.appendChild(E('s', null, x.wrong)); li.appendChild(document.createTextNode(' → ')); li.appendChild(E('b', null, x.right)); if (x.why) li.appendChild(E('div', 'wr-why', x.why)); ol.appendChild(li);
        try { if (window.mkAdd) { const sents = t.match(/[^.!?\n]+[.!?]*/g) || [t]; const s0 = (sents.find(s => s.includes(x.wrong)) || x.wrong).trim(); window.mkAdd({ k: 'aic|' + String(x.wrong).toLowerCase().slice(0, 80), src: 'wr', cat: 'Câu tự viết (tab Dịch)', mode: 'fix', p: s0, a: [s0.replace(x.wrong, x.right)], why: x.why || '' }); } } catch (e) {}
      });
      c.appendChild(ol);
    } else c.appendChild(E('div', 'wr-why', '✓ Không thấy lỗi nào.'));
    if (r.natural && String(r.natural).trim() !== t) {
      const n = E('div', 'aic-nat');
      const hh = E('div', 'wr-sh'); hh.appendChild(E('b', null, 'Cách viết tự nhiên hơn'));
      const pl = E('button', 'tr-icon', '🔊'); pl.type = 'button'; pl.setAttribute('aria-label', 'Nghe'); pl.addEventListener('click', () => { try { speak(String(r.natural), 0.9); } catch (e) {} }); hh.appendChild(pl);
      n.appendChild(hh); n.appendChild(E('p', 'wr-sp', String(r.natural)));
      const use = E('button', 'btn-ghost', '↪ Thay câu gốc bằng câu này'); use.type = 'button';
      use.addEventListener('click', () => { inp.value = String(r.natural); inp.dispatchEvent(new Event('input', { bubbles: true })); });
      n.appendChild(use);
      c.appendChild(n);
    }
    const bt = (Array.isArray(r.better) ? r.better : []).filter(x => x && x.word && x.alt);
    if (bt.length) {
      c.appendChild(E('b', null, 'Từ hay hơn'));
      const ul = E('ul', 'wr-errs'); bt.forEach(x => { const li = E('li'); li.appendChild(document.createTextNode(x.word + ' → ')); li.appendChild(E('b', null, x.alt)); if (x.why) li.appendChild(E('div', 'wr-why', x.why)); ul.appendChild(li); }); c.appendChild(ul);
    }
    if (errs.length) c.appendChild(E('div', 'rv-note', 'Các lỗi đã được ghi vào 📕 Sổ lỗi.'));
  });
})();

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
    try { if (window.actLog) actLog('v'); } catch (e) {}
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
    // v143: Sổ lỗi
    if (typeof window.mkOpen === 'function') {
      const mc = window.mkCount();
      const m = E('div', 'tense-card mk-entry');
      const tx = E('div', 'mk-entry-t');
      tx.appendChild(E('h3', null, '📕 Sổ lỗi của tôi' + (mc ? ' · ' + mc : '')));
      tx.appendChild(E('p', 'rv-note', mc ? 'Những câu bạn từng làm sai, kèm câu đúng và lý do. Luyện lại để khắc phục.' : 'Câu nào bạn làm sai ở các tab sẽ tự vào đây để luyện lại.'));
      m.appendChild(tx);
      const b = E('button', mc ? 'btn-primary' : 'btn-ghost', mc ? 'Mở sổ lỗi →' : 'Xem sổ lỗi'); b.type = 'button';
      b.addEventListener('click', () => { window.mkOpen(root, () => { home(); try { page.scrollIntoView({ block: 'start' }); } catch (e) {} }); try { page.scrollIntoView({ block: 'start' }); } catch (e) {} });
      m.appendChild(b);
      root.appendChild(m);
    }
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
  // v177: màn chào người mới dùng chung lời nhắc qua Lịch
  window.rvMakeIcs = at => { set.at = at || '20:00'; saveSet(); makeIcs(set.at); };
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
    let speakText = '', rec = null, onReveal = null;
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
      if (m.src === 'fx') {   // v183: thẻ ngữ pháp từ bước Học công thức
        tag.textContent = '📐 Công thức ngữ pháp';
        front.appendChild(E('div', 'rv-ask', m.ask || 'Bạn còn nhớ?'));
        front.appendChild(E('div', 'rv-word vi rv-fx', m.f));
        // v184: tự gõ câu trả lời trước khi xem đáp án (nhớ lại chủ động)
        const fItem = m.a && /^F:/.test(m.a) && window.gxlFormulaKey ? gxlFormulaKey(m.a.slice(2)) : null;
        if (fItem && window.gxlFormula) {   // v186: tự viết lại cả công thức
          const fw = gxlFormula(fItem, () => S.reveal && S.reveal.click()); front.appendChild(fw.el);
          onReveal = () => { if (!fw.filled()) { fw.focus(); return false; } const r = fw.check(); fw.reveal(r.ok); back.prepend(E('div', 'rv-fxr ' + (r.ok ? 'ok' : 'bad'), r.ok ? '✓ Bạn viết đúng' : '✗ ' + r.msg)); return true; };
          setTimeout(() => fw.focus(), 60);
        } else if (m.a && !/^F:/.test(m.a) && window.gxlFill) {
          const fill = gxlFill(m.a, () => S.reveal && S.reveal.click()); front.appendChild(fill.el);
          onReveal = () => { if (!fill.filled()) { fill.focus(); return false; } const r = fill.check(); fill.reveal(); back.prepend(E('div', 'rv-fxr ' + (r.ok ? 'ok' : 'bad'), r.ok ? '✓ Bạn viết đúng' : '✗ Chưa đúng, xem đáp án bên dưới')); return true; };
          setTimeout(() => fill.focus(), 60);
        } else if (window.gxlSame && !VI_RE.test(m.b)) {
          const inp = E('input', 'gxl-in rv-fxin'); inp.type = 'text'; inp.autocomplete = 'off'; inp.autocapitalize = 'off'; inp.spellcheck = false; inp.placeholder = 'Gõ câu tiếng Anh…'; inp.setAttribute('aria-label', 'Câu tiếng Anh của bạn');
          inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); S.reveal && S.reveal.click(); } });
          front.appendChild(inp);
          onReveal = () => { if (!inp.value.trim()) { inp.focus(); return false; } const ok = gxlSame(inp.value, m.b); inp.disabled = true; inp.classList.add(ok ? 'good' : 'bad'); back.prepend(E('div', 'rv-fxr ' + (ok ? 'ok' : 'bad'), ok ? '✓ Bạn viết đúng' : '✗ Chưa khớp, so với đáp án bên dưới')); return true; };
          setTimeout(() => { try { inp.focus(); } catch (e) {} }, 60);
        }
        if (!fItem) { const bk = E('div', 'rv-ex'); bk.appendChild(E('b', null, m.b)); if (!VI_RE.test(m.b)) bk.appendChild(play(m.b)); back.appendChild(bk); }
        if (m.x) back.appendChild(E('div', 'rv-exvi', (VI_RE.test(m.x) ? '💡 ' : 'Ví dụ: ') + m.x));
        if (isNew(m)) tag.appendChild(E('span', 'rv-new', 'MỚI'));
      } else {
      const viFront = VI_RE.test(m.f);
      front.appendChild(E('div', 'rv-ask', viFront ? 'Nói câu này bằng tiếng Anh?' : 'Bạn còn nhớ nghĩa?'));
      const w = E('div', 'rv-word' + (viFront ? ' vi' : '')); w.textContent = m.f; front.appendChild(w);
      if (!viFront) front.appendChild(play(m.f));
      back.appendChild(E('div', 'rv-mean', m.b));
      if (viFront) back.appendChild(play(m.b));
      if (isNew(m)) tag.appendChild(E('span', 'rv-new', 'MỚI'));
      speakText = viFront ? '' : m.f;
      }
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
    if (onReveal) reveal.textContent = 'Kiểm tra (Enter)';
    reveal.addEventListener('click', () => { if (onReveal && onReveal() === false) return; onReveal = null; back.hidden = false; reveal.hidden = true; grades.hidden = false; });
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
  // v183: thẻ công thức / câu lắp sai ở bước Học công thức → ôn theo lịch như mọi thẻ khác
  window.srAddFx = (k, f, b, ask, x, a) => { const id = 'fx|' + k; if (cards[id]) { if (a && cards[id].a !== a) { Object.assign(cards[id], { f, b, ask: ask || '', a }); save(K.cards, cards); } return false; } cards[id] = { f, b, ask: ask || '', x: x || '', a: a || '', src: 'fx', add: today() }; save(K.cards, cards); refresh(); return true; };
  window.srAddCard = (en, vi) => { const id = 'me|' + String(en).toLowerCase(); if (!cards[id]) { cards[id] = { f: en, b: vi || '', src: 'me', add: today() }; save(K.cards, cards); refresh(); } };
  refresh();
})();
