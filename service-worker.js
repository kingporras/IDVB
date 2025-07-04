
self.addEventListener('install', e => {
  e.waitUntil(caches.open('inter-b-cache').then(cache => {
    return cache.addAll(['/', '/index.html', '/style.css', '/manifest.json', '/escudo.png']);
  }));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
