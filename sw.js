/* רהיטים service worker 1.1.0 */
const VERSION = "1.1.0";
const CACHE = 'rahitiim-' + VERSION;
const ASSETS = ["./apple-touch-icon.png","./assets/index-9TM9wUC9.js","./assets/index-DMXHwzby.css","./assets/rubik-hebrew-400-normal-BQDoxs6C.woff","./assets/rubik-hebrew-400-normal-Dp0lvSRB.woff2","./assets/rubik-hebrew-500-normal--anb7y8_.woff","./assets/rubik-hebrew-500-normal-B_5jqoVI.woff2","./assets/rubik-hebrew-700-normal-B2Hm7hpE.woff","./assets/rubik-hebrew-700-normal-Da14F88e.woff2","./assets/rubik-latin-400-normal-BV1Ho3GG.woff","./assets/rubik-latin-400-normal-j0pmKyiQ.woff2","./assets/rubik-latin-500-normal-1os41rQk.woff2","./assets/rubik-latin-500-normal-LZYVHeqz.woff","./assets/rubik-latin-700-normal-D-tMm-eS.woff2","./assets/rubik-latin-700-normal-KHOtubUA.woff","./favicon.png","./icon-192.png","./icon-512-maskable.png","./icon-512.png","./index.html","./manifest.webmanifest"];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)));
    await self.clients.claim();
    const clients = await self.clients.matchAll({ type: 'window' });
    for (const client of clients) {
      client.postMessage({ type: 'SW_ACTIVATED', version: VERSION });
    }
  })());
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (response.ok) {
        const cache = await caches.open(CACHE);
        cache.put(request, response.clone());
      }
      return response;
    } catch (error) {
      if (request.mode === 'navigate') {
        return (await caches.match('./index.html')) || (await caches.match('index.html'));
      }
      throw error;
    }
  })());
});
