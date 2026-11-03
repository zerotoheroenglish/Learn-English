/* ============================================================
   FEEDBACK — users send ideas / bug reports / praise to Firestore
   (collection "feedback"). Only the app owner can read them: the
   Firestore rules allow reading for the owner's account, and the
   inbox tab appears automatically when that account is signed in.
============================================================ */
(() => {
  const FB = window.HTA_FB, $ = id => document.getElementById(id);
  if (!FB || !$('fb-foot')) return;
  $('fb-foot').hidden = false;
  const sheet = $('fsheet'), msg = $('fb-msg');
  let type = 'idea', rating = 0, lastSent = 0, isOwner = false, items = [];
  const TYPES = { idea: '💡 Ý tưởng', bug: '🐞 Báo lỗi', praise: '❤️ Lời khen', other: '💬 Khác' };
  const say = (t, ok) => { msg.textContent = t || ''; msg.className = 'acct-msg' + (ok ? ' ok' : ''); };
  const device = () => {
    const ua = navigator.userAgent || '';
    const os = /iPhone/.test(ua) ? 'iPhone' : /iPad/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1) ? 'iPad'
      : /Android/.test(ua) ? 'Android' : /Windows/.test(ua) ? 'Windows' : /Mac/.test(ua) ? 'Mac' : 'Khác';
    const br = /Edg\//.test(ua) ? 'Edge' : /CriOS|Chrome\//.test(ua) ? 'Chrome' : /FxiOS|Firefox\//.test(ua) ? 'Firefox' : /Safari\//.test(ua) ? 'Safari' : 'Trình duyệt khác';
    const app = (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone ? ' · app màn hình chính' : '';
    return `${os} · ${br}${app}`;
  };
  const page = () => { const b = document.querySelector('nav.tabbar button.active'); return b ? b.textContent.trim() : ''; };
  const ver = () => { const b = document.querySelector('.hero-badge'); return b ? (b.textContent.match(/v\d+/) || [''])[0] : ''; };

  const setTab = t => {
    document.querySelectorAll('.fb-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === t));
    $('fb-form').hidden = t !== 'send'; $('fb-inbox').hidden = t !== 'inbox';
    if (t === 'inbox') loadInbox();
  };
  document.querySelectorAll('.fb-tab').forEach(b => b.addEventListener('click', () => setTab(b.dataset.tab)));
  const open = () => { sheet.hidden = false; document.body.classList.add('vsheet-open'); say(''); FB.load().catch(() => {}); };
  const close = () => { sheet.hidden = true; document.body.classList.remove('vsheet-open'); };
  $('fb-open').addEventListener('click', open);
  sheet.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', close));

  $('fb-types').addEventListener('click', e => {
    const b = e.target.closest('.fb-type'); if (!b) return;
    type = b.dataset.type;
    document.querySelectorAll('.fb-type').forEach(x => x.classList.toggle('active', x === b));
    $('fb-text').placeholder = type === 'bug' ? 'Lỗi xảy ra ở tab nào, bạn bấm gì thì bị? Ví dụ: "Tab Phát âm, bấm ▶ không có tiếng"…'
      : type === 'praise' ? 'Bạn thích điều gì ở app?' : 'Bạn muốn app có thêm gì, hay gặp lỗi ở đâu? Viết càng cụ thể càng dễ sửa…';
  });
  const paintStars = () => document.querySelectorAll('#fb-stars button').forEach(b => b.classList.toggle('on', +b.dataset.v <= rating));
  $('fb-stars').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; rating = rating === +b.dataset.v ? 0 : +b.dataset.v; paintStars(); });
  $('fb-text').addEventListener('input', () => { $('fb-len').textContent = $('fb-text').value.length + ' / 2000'; });

  $('fb-form').addEventListener('submit', async e => {
    e.preventDefault();
    const text = $('fb-text').value.trim(), contact = $('fb-contact').value.trim();
    if (text.length < 3) { say('Bạn viết vài chữ góp ý trước đã nhé.'); return; }
    if (Date.now() - lastSent < 30000) { say('Bạn vừa gửi xong. Đợi một chút rồi gửi tiếp nhé.'); return; }
    const btn = $('fb-send'); btn.disabled = true; say('Đang gửi…', true);
    try {
      await FB.load();
      const u = FB.user;
      const doc = { type, rating, text: text.slice(0, 2000), page: page().slice(0, 60), ver: ver(), ua: device().slice(0, 80),
        createdAt: firebase.firestore.FieldValue.serverTimestamp(), read: false };
      if (contact) doc.contact = contact.slice(0, 200);
      if (u) { doc.uid = u.uid; if (u.email) doc.email = u.email.slice(0, 200); }
      await FB.db.collection('feedback').add(doc);
      lastSent = Date.now();
      $('fb-text').value = ''; $('fb-len').textContent = '0 / 2000'; rating = 0; paintStars();
      say('✓ Đã gửi! Cảm ơn bạn đã góp ý.', true);
      if (isOwner) refreshCount();
    } catch (err) {
      say(err && err.code === 'permission-denied' ? 'Chưa gửi được: Firestore chưa cho phép nhận góp ý (cần cập nhật Rules).'
        : 'Chưa gửi được — kiểm tra mạng rồi bấm Gửi lại. Nội dung bạn viết vẫn còn đây.');
    } finally { btn.disabled = false; }
  });

  // ---- owner inbox ----
  const fmt = ts => { try { const d = ts && ts.toDate ? ts.toDate() : null; return d ? d.toLocaleString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' }) : 'vừa xong'; } catch (e) { return ''; } };
  async function fetchItems() {
    const snap = await FB.db.collection('feedback').orderBy('createdAt', 'desc').limit(200).get();
    items = snap.docs.map(d => Object.assign({ id: d.id }, d.data()));
    return items;
  }
  function paintCount() {
    const unread = items.filter(x => !x.read).length;
    $('fb-count').textContent = unread ? `(${unread})` : '';
    $('fb-dot').hidden = !unread; $('fb-dot').textContent = unread > 99 ? '99+' : String(unread);
  }
  async function refreshCount() { try { await fetchItems(); paintCount(); } catch (e) {} }
  async function loadInbox() {
    const list = $('fb-list');
    list.innerHTML = '<div class="fb-empty">Đang tải…</div>';
    try { await fetchItems(); } catch (e) { list.innerHTML = '<div class="fb-empty">Không tải được hộp thư. Kiểm tra mạng rồi bấm Tải lại.</div>'; return; }
    paintCount(); renderInbox();
  }
  function renderInbox() {
    const list = $('fb-list');
    const unread = items.filter(x => !x.read).length;
    const rated = items.filter(x => x.rating > 0), avg = rated.length ? (rated.reduce((k, x) => k + x.rating, 0) / rated.length).toFixed(1) : null;
    $('fb-inbox-sum').textContent = `${items.length} góp ý · ${unread} chưa đọc` + (avg ? ` · điểm TB ${avg}★` : '');
    list.innerHTML = '';
    if (!items.length) { list.innerHTML = '<div class="fb-empty">Chưa có góp ý nào.</div>'; return; }
    items.forEach(it => {
      const card = document.createElement('div'); card.className = 'fb-item' + (it.read ? '' : ' unread');
      const top = document.createElement('div'); top.className = 'fb-item-top';
      const t = document.createElement('span'); t.className = 'fb-item-type'; t.textContent = TYPES[it.type] || '💬'; top.appendChild(t);
      if (it.rating) { const st = document.createElement('span'); st.className = 'fb-item-stars'; st.textContent = '★'.repeat(it.rating); top.appendChild(st); }
      const tm = document.createElement('span'); tm.textContent = fmt(it.createdAt); top.appendChild(tm);
      card.appendChild(top);
      const tx = document.createElement('div'); tx.className = 'fb-item-text'; tx.textContent = it.text || ''; card.appendChild(tx);
      const info = [it.contact && '📮 ' + it.contact, it.email && !it.contact && '👤 ' + it.email, it.page && 'Tab: ' + it.page, it.ua, it.ver].filter(Boolean).join(' · ');
      if (info) { const inf = document.createElement('div'); inf.className = 'fb-item-info'; inf.textContent = info; card.appendChild(inf); }
      const acts = document.createElement('div'); acts.className = 'fb-item-acts';
      const rd = document.createElement('button'); rd.textContent = it.read ? '↺ Đánh dấu chưa đọc' : '✓ Đã đọc';
      rd.addEventListener('click', async () => { try { await FB.db.collection('feedback').doc(it.id).update({ read: !it.read }); it.read = !it.read; paintCount(); renderInbox(); } catch (e) {} });
      const del = document.createElement('button'); del.textContent = '🗑 Xoá';
      del.addEventListener('click', async () => {
        if (del.dataset.sure !== '1') { del.dataset.sure = '1'; del.textContent = 'Bấm lần nữa để xoá'; setTimeout(() => { del.dataset.sure = ''; del.textContent = '🗑 Xoá'; }, 3000); return; }
        try { await FB.db.collection('feedback').doc(it.id).delete(); items = items.filter(x => x !== it); paintCount(); renderInbox(); } catch (e) {}
      });
      acts.appendChild(rd); acts.appendChild(del); card.appendChild(acts);
      list.appendChild(card);
    });
  }
  $('fb-reload').addEventListener('click', loadInbox);
  // The inbox shows up only for the owner's account (the rules reject everyone else's read)
  FB.onUser(async u => {
    isOwner = false; $('fb-tabs').hidden = true; $('fb-dot').hidden = true; setTab('send');
    if (!u) return;
    try { await fetchItems(); isOwner = true; $('fb-tabs').hidden = false; paintCount(); } catch (e) { isOwner = false; }
  });
})();
