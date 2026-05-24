self.addEventListener('install', (e) => {
  console.log('[Service Worker] Terpasang');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('[Service Worker] Aktif');
});

self.addEventListener('fetch', (e) => {
  // Biarkan iframe Google Script memuat data langsung dari internet
  return; 
});
