// sw.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/ska/',
        '/ska/index.html',
        '/ska/partners.html',
        '/ska/volunteers.html',
        '/ska/images/Monday.png',
        '/ska/images/banner.png',
        '/ska/images/rhema.png',
        '/ska/images/favicon.ico',
        '/ska/manifest.json',
        '/ska/images/Monday-192x192.png',
        '/ska/images/Monday-512x512.png'
      ]);
    })
  );
});
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
