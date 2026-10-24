// Service worker - Supporto Tecnico STEM
// Necessario affinché il browser consideri l'app installabile.
// Strategia: network-first (contenuti sempre aggiornati), con cache come fallback offline.
const CACHE = 'supporto-stem-v1';
const SHELL = [
  './',
  'index.html',
  'manifest.webmanifest',
  'app/style.css',
  'app/config.js',
  'app/app.js',
  'prodotti/elenco.js',
  'pdf/elenco.js',
  'app/img/logo-stem.png',
  'app/img/icone/icona-192.png',
  'app/img/icone/icona-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.all(SHELL.map((u) => c.add(u).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // lascia stare font e risorse esterne

  e.respondWith(
    fetch(req)
      .then((res) => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      })
      .catch(() =>
        caches.match(req).then((hit) => hit || (req.mode === 'navigate' ? caches.match('index.html') : undefined))
      )
  );
});
