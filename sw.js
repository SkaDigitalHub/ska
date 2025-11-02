// sw.js
const CACHE_NAME = 'ska-app-v4.5';  // ← CHANGE THIS EVERY TIME YOU UPDATE

const urlsToCache = [
  '/ska/',
  '/ska/index.html',
  '/ska/pages/register.html',
  '/ska/pages/partners.html',
  '/ska/pages/prophetic.html',
  '/ska/images/Monday.png',
  '/ska/images/banner.png',
  '/ska/images/rhema.png',
  '/ska/images/favicon.ico',
  '/ska/manifest.json',
  '/ska/images/Monday-192x192.png',
  '/ska/images/Monday-512x512.png'
];

// INSTALL: Cache all files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching files with version:', CACHE_NAME);
      return cache.addAll(urlsToCache);
    }).catch(err => {
      console.error('Failed to cache:', err);
    })
  );
  // Skip waiting — activate new SW immediately
  self.skipWaiting();
});

// ACTIVATE: Delete old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Take control of all pages immediately
  self.clients.claim();
});

// FETCH: Serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached version if exists
      if (cachedResponse) {
        return cachedResponse;
      }
      // Otherwise, fetch from network
      return fetch(event.request).catch(() => {
        // Optional: Show offline fallback page
        return caches.match('/ska/index.html');
      });
    })
  );
});
