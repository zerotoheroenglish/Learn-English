// Offline support: keep the app shell cached; translation/IPA requests always go to the network.
const CACHE = 'hoc-tieng-anh-v166';
const PREFIX = 'hoc-tieng-anh-';
const SHELL = ["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png","./apple-touch-icon.png","./app.css?h=56b622324f","./js/data-core.js?h=5c068bf2d4","./js/data-vocab.js?h=923ca16f1c","./js/app-core.js?h=73d3aab901","./js/app-sync.js?h=9bcfb70f21","./js/app-feedback.js?h=f1bd3f9e55","./js/data-exercises.js?h=dcbe86d1d8","./js/app-exercises.js?h=ae89fefbb0","./js/app-review.js?h=ccdc683afb","./js/app-backup.js?h=e98a7421e8"];
// Tab / dữ liệu nạp khi cần: KHÔNG tải sẵn lúc cài (đỡ tốn mạng và pin); được lưu offline khi bạn mở lần đầu.
// Khi cập nhật phiên bản, file nào không đổi (cùng mã băm) được chép từ bộ nhớ cũ sang, nên vẫn dùng offline được.
const LAZY_FILES = ["./js/data-vocab-vi.js?h=31cb69d052","./js/tab-shadowing.js?h=35faf2eb50","./js/tab-questions.js?h=d109208d25","./js/tab-reading.js?h=99cae5f11b","./js/tab-talk.js?h=04ae153a62","./js/tab-para.js?h=f2f7a86a27"];

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
