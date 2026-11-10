// Offline support: keep the app shell cached; translation/IPA requests always go to the network.
const CACHE = 'hoc-tieng-anh-v219';
const PREFIX = 'hoc-tieng-anh-';
const SHELL = ["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png","./apple-touch-icon.png","./app.css?h=c6130749cf","./js/data-core.js?h=5c068bf2d4","./js/data-vocab.js?h=923ca16f1c","./js/app-core.js?h=daa45a2dbe","./js/app-sync.js?h=79e8f95282","./js/app-feedback.js?h=f1bd3f9e55","./js/data-exercises.js?h=dcbe86d1d8","./js/app-exercises.js?h=7304dd661c","./js/app-review.js?h=0f7711c758","./js/app-gxlearn.js?h=ac1033d2d7","./js/app-onboard.js?h=576d26a7a6","./js/app-backup.js?h=31e5637feb"];
// Tab / dữ liệu nạp khi cần: KHÔNG tải sẵn lúc cài (đỡ tốn mạng và pin); được lưu offline khi bạn mở lần đầu.
// Khi cập nhật phiên bản, file nào không đổi (cùng mã băm) được chép từ bộ nhớ cũ sang, nên vẫn dùng offline được.
const LAZY_FILES = ["./js/data-vocab-vi.js?h=31cb69d052","./js/tab-shadowing.js?h=87257108a2","./js/tab-questions.js?h=dccfc4a30b","./js/tab-reading.js?h=83cb25dbaf","./js/tab-talk.js?h=8b70c0a6e8","./js/tab-para.js?h=f2f7a86a27"];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

// Chỉ xoá các bản cache cũ của chính app này (tên bắt đầu bằng "hoc-tieng-anh-"),
// không đụng tới cache của ứng dụng khác dùng chung địa chỉ (ví dụ cùng tài khoản GitHub Pages).
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(async keys => {
    const old = keys.filter(k => k.startsWith(PREFIX) && k !== CACHE);
    if (old.length && LAZY_FILES.length) {
      const cur = await caches.open(CACHE);
      for (const u of LAZY_FILES) {
        const url = new URL(u, self.location).href;
        if (await cur.match(url)) continue;
        for (const k of old) { const r = await (await caches.open(k)).match(url); if (r) { await cur.put(url, r); break; } }
      }
    }
    await Promise.all(old.map(k => caches.delete(k)));
  }).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  const isFont = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (!sameOrigin && !isFont) return;           // APIs (Google Dịch, từ điển…) go straight to the network
  if (req.headers.has('range')) return;         // âm thanh phát từng đoạn: để trình duyệt tự xử lý
  const isPage = req.mode === 'navigate' || (req.destination === 'document');

  // v171: file có mã băm (?h=…) không bao giờ đổi nội dung → lấy thẳng từ bộ nhớ máy, không phải hỏi lại mạng.
  // Bản mới của app dùng mã băm mới nên vẫn luôn tải đúng bản mới.
  if (sameOrigin && url.searchParams.has('h')) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res && res.status === 200) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {}); }
      return res;
    })));
    return;
  }

  // Network first so updates show up, cache as fallback when offline.
  e.respondWith(
    (sameOrigin ? fetch(req.url, { cache: 'no-cache', credentials: 'same-origin' }) : fetch(req)).then(res => {
      if (res && (res.status === 200 || res.type === 'opaque')) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      }
      return res;
    }).catch(() => caches.match(req).then(r => {
      if (r) return r;
      // chỉ trang (điều hướng) mới được trả về index.html; ảnh, script, âm thanh… trả lỗi đúng loại
      if (isPage) return caches.match('./index.html').then(p => p || new Response('Không có mạng và chưa có bản lưu offline.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } }));
      return new Response('', { status: 504, statusText: 'Offline' });
    }))
  );
});
