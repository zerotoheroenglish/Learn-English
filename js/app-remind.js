/* v200: Thông báo nhắc học mỗi ngày (Web Push).
   - Người dùng bật trong Ôn tập → "Nhắc ôn mỗi ngày", chọn giờ.
   - Máy đăng ký nhận thông báo (cần đăng nhập; trên iPhone phải mở app từ màn hình chính, iOS 16.4 trở lên).
   - Lưu vào Firestore reminders/{uid}: đăng ký nhận, giờ nhắc, múi giờ, ngày học gần nhất, chuỗi ngày.
   - Mỗi giờ GitHub Actions (scripts/send-reminders.mjs) gửi lời nhắc cho ai đến giờ mà hôm nay chưa học. */
(function () {
  const VAPID = 'BFpnIH_sXttAfrTbiSwoFxEhri6tg9dVwLSVEZKAxi1hm7QC_NaaWRxS8UQZ6GyXL55NvCWy4cs4wyson42xxnU';
  const K = 'hoc-tieng-anh-push';           // {on, hour, last} trên máy này
  const E = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  let st = {};
  try { st = JSON.parse(localStorage.getItem(K)) || {}; } catch (e) {}
  const save = () => { try { localStorage.setItem(K, JSON.stringify(st)); } catch (e) {} };
  const today = () => { const d = new Date(), p = n => String(n).padStart(2, '0'); return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()); };
  const tz = () => { try { return Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Ho_Chi_Minh'; } catch (e) { return 'Asia/Ho_Chi_Minh'; } };
  const isIOS = /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const standalone = () => (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
  const supported = () => 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
  const fb = () => window.HTA_FB;
  const ref = () => { const f = fb(); return f && f.db && f.user ? f.db.collection('reminders').doc(f.user.uid) : null; };
  const streak = () => { try { return window.htaStreakNow ? window.htaStreakNow() : { st: 0, today: false }; } catch (e) { return { st: 0, today: false }; } };

  function b64(s) {
    const pad = '='.repeat((4 - s.length % 4) % 4), raw = atob((s + pad).replace(/-/g, '+').replace(/_/g, '/'));
    const out = new Uint8Array(raw.length); for (let i = 0; i < raw.length; i++) out[i] = raw.charCodeAt(i); return out;
  }

  async function enable(hour) {
    if (!supported()) throw new Error(isIOS && !standalone() ? 'ios-install' : 'unsupported');
    if (!ref()) throw new Error('login');
    const perm = Notification.permission === 'granted' ? 'granted' : await Notification.requestPermission();
    if (perm !== 'granted') throw new Error('denied');
    const reg = await navigator.serviceWorker.ready;
    let sub = await reg.pushManager.getSubscription();
    if (!sub) sub = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64(VAPID) });
    const s = streak();
    await ref().set({ on: true, hour, tz: tz(), sub: JSON.parse(JSON.stringify(sub)), last: s.today ? today() : (st.last || ''), streak: s.st, updated: Date.now() }, { merge: true });
    st.on = true; st.hour = hour; if (s.today) st.last = today(); save();
  }
  async function disable() {
    st.on = false; save();
    try { const r = ref(); if (r) await r.set({ on: false, updated: Date.now() }, { merge: true }); } catch (e) {}
    try { const reg = await navigator.serviceWorker.ready, sub = await reg.pushManager.getSubscription(); if (sub) await sub.unsubscribe(); } catch (e) {}
  }
  async function setHour(hour) {
    st.hour = hour; save();
    const r = ref(); if (st.on && r) await r.set({ hour, tz: tz(), updated: Date.now() }, { merge: true });
  }

  // Báo "hôm nay đã học" — tối đa một lần mỗi ngày, để máy chủ không nhắc nữa
  let busy = false;
  function touch() {
    if (!st.on || st.last === today() || busy) return;
    const r = ref(); if (!r) return;
    busy = true;
    setTimeout(() => {
      const s = streak();
      r.set({ last: today(), streak: Math.max(1, s.st), tz: tz(), updated: Date.now() }, { merge: true })
        .then(() => { st.last = today(); save(); }).catch(() => {}).then(() => { busy = false; });
    }, 800);
  }
  const orig = window.actLog;
  if (orig) window.actLog = function () { const r = orig.apply(this, arguments); try { touch(); } catch (e) {} return r; };
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && streak().today) touch(); });

  const MSG = {
    'ios-install': 'Trên iPhone/iPad: bấm nút Chia sẻ ⬆️ → “Thêm vào MH chính”, rồi mở app từ biểu tượng ngoài màn hình chính và bật lại ở đây (cần iOS 16.4 trở lên).',
    unsupported: 'Trình duyệt này chưa hỗ trợ thông báo. Bạn vẫn có thể dùng nút “Thêm lời nhắc vào Lịch” bên dưới.',
    login: 'Cần đăng nhập tài khoản (mục 👤 Tài khoản) để app biết gửi lời nhắc tới máy nào.',
    denied: 'Bạn đã chặn thông báo. Vào Cài đặt → Thông báo → Học Tiếng Anh để cho phép, rồi bật lại.',
    fail: 'Chưa bật được. Kiểm tra mạng rồi thử lại.'
  };

  window.htaRemindBox = function () {
    const w = E('div', 'rm-box');
    const head = E('div', 'rm-head');
    head.appendChild(E('strong', null, '🔔 Thông báo nhắc học'));
    const sw = E('button', 'rm-sw'); sw.type = 'button'; sw.setAttribute('role', 'switch');
    head.appendChild(sw); w.appendChild(head);
    const row = E('label', 'rm-row'); row.appendChild(E('span', null, 'Nhắc lúc'));
    const sel = E('select', 'rm-hour');
    for (let h = 5; h <= 23; h++) { const o = E('option', null, (h < 10 ? '0' : '') + h + ':00'); o.value = h; sel.appendChild(o); }
    sel.value = st.hour || 20; row.appendChild(sel); w.appendChild(row);
    const note = E('p', 'rm-note'); w.appendChild(note);
    const paint = (msg, bad) => {
      sw.setAttribute('aria-checked', st.on ? 'true' : 'false'); sw.classList.toggle('on', !!st.on);
      sw.textContent = st.on ? 'Đang bật' : 'Đang tắt';
      note.classList.toggle('rm-bad', !!bad);
      note.textContent = msg || (st.on
        ? `Mỗi ngày lúc ${sel.value.padStart(2, '0')}:00, nếu hôm đó bạn chưa học, điện thoại sẽ nhận một lời nhắc giữ chuỗi ngày học. Đã học rồi thì app không làm phiền.`
        : (isIOS && !standalone() ? MSG['ios-install'] : 'Bật để nhận thông báo khi đến giờ mà hôm đó bạn chưa học bài nào.'));
    };
    sw.addEventListener('click', async () => {
      sw.disabled = true;
      try {
        if (st.on) await disable(); else await enable(+sel.value);
        paint();
      } catch (e) { st.on = false; save(); paint(MSG[e && e.message] || MSG.fail, true); }
      sw.disabled = false;
    });
    sel.addEventListener('change', () => { setHour(+sel.value).catch(() => {}); paint(); });
    paint();
    return w;
  };

  // Đăng xuất → máy này không còn nhận lời nhắc của tài khoản đó
  window.htaRemindOff = disable;
})();
