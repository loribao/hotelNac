const cacheName = 'MeusDados';

/**
 * Colocar as rotas aqui!
 * Para usar com nodejs
 * apenas rotas nenhuma estenção exemplo index.html ... em caso de estar usando 
 * o algum padrão models views controller
 */
const cacheAssets = [
  '/',
  '/maps'
];

// Instalando o SW
self.addEventListener('install', e => {
  console.log('Service Worker: Instalado');

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Arquivos!');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Ativando SW
self.addEventListener('activate', e => {
  console.log('Service Worker: Ativo com Sucesso!');
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Limpando caches');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Chamando SW
self.addEventListener('fetch', e => {
  console.log('Service Worker: Carregado!');
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
