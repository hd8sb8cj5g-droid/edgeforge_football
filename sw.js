/* EdgeForge 3.1 static app shell. Never caches user forecasts or outside URLs. */
const VERSION = 'edgeforge-3.1-shell-20261014';
const CORE = ['./', './index.html', './decision_lab.html', './manifest.webmanifest', './edgeforge-icon-192.png', './edgeforge-icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('edgeforge-') && key !== VERSION).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(new URL('./',self.registration.scope).pathname)) return;
  event.respondWith(fetch(req).then(response => {
    if (response.ok) {
      const clone = response.clone();
      event.waitUntil(caches.open(VERSION).then(cache => cache.put(req, clone)));
    }
    return response;
  }).catch(() => caches.match(req).then(hit => hit || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error()))));
});
