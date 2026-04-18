const CACHE_NAME = 'smartwallet-cache-v1.1'; // غير الرقم عند كل تحديث للتطبيق
const assetsToCache = [
  './', // يمثل ملف index.html
  './manifest.json',
  './sw.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-icon-512.png',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Space+Grotesk:wght@700&display=swap'
  // يمكنك إضافة أي ملفات خطوط أو صور أخرى هنا
];

// 1. تثبيت الـ Service Worker وتخزين الموارد
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(assetsToCache);
      })
  );
});

// 2. تفعيل الـ Service Worker وحذف الـ Cache القديم
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName.startsWith('smartwallet-cache-') && cacheName !== CACHE_NAME;
        }).map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

// 3. اعتراض طلبات الشبكة وتقديم الموارد من الـ Cache أولاً
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // إذا وُجد الطلب في الـ Cache، أرجعه
        if (response) {
          return response;
        }
        // إذا لم يوجد، اطلبه من الشبكة
        return fetch(event.request);
      }
    )
  );
});
