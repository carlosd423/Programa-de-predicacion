// Service Worker básico para cumplir el requisito de instalación PWA.
// Permite que la app se instale y deja pasar la conexión a JSONBin con normalidad.

self.addEventListener('install', (event) => {
    // Activa el vigilante inmediatamente
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Deja que todas las peticiones de datos vayan al internet sin interrupciones
    event.respondWith(fetch(event.request));
});
