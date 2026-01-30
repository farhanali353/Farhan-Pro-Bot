self.addEventListener('install', (e) => {
  console.log('Omni-Sync Service Worker Installed');
});

self.addEventListener('fetch', (e) => {
  // Offline support ke liye
  e.respondWith(fetch(e.request));
});
