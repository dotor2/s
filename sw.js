// Qudwa: keep account data and application updates network-first.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
  if (event.request.mode !== 'navigate' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(fetch(event.request).catch(() => new Response('<!doctype html><html lang="ar" dir="rtl"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>الاستاذ قدوة</title><body style="font-family:sans-serif;padding:30px"><h2>الاتصال بالإنترنت غير متاح</h2><p>أعد الاتصال لفتح حسابك وسجلاتك.</p><button onclick="location.reload()">إعادة المحاولة</button></body></html>', {status:503, headers:{'Content-Type':'text/html; charset=utf-8'}})));
});
