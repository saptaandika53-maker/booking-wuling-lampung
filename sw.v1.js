self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  // Menghapus cache lama yang membandel
  caches.keys().then((keyList) => {
    return Promise.all(keyList.map((key) => caches.delete(key)));
  });
});
