// Offline support: keep the app shell cached; translation/IPA requests always go to the network.
const CACHE = 'hoc-tieng-anh-v123';
const PREFIX = 'hoc-tieng-anh-';
const SHELL = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

// Chỉ xoá các bản cache cũ của chính app này (tên bắt đầu bằng "hoc-tieng-anh-"),
// không đụng tới cache của ứng dụng khác dùng chung địa chỉ (ví dụ cùng tài khoản GitHub Pages).
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith(PREFIX) && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
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
