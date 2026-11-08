// Service Worker básico diseñado para permitir la instalación PWA
// sin interferir con la sincronización constante hacia JSONBin.

self.addEventListener('install', (event) => {
    // Activa inmediatamente el nuevo SW
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Permite que todas las peticiones sigan su curso normal por internet.
    // Esto asegura que siempre leas los datos más frescos de tu nube.
    event.respondWith(fetch(event.request));
});
