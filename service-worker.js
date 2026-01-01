const CACHE="ailk-invoice-v2";

const ASSETS=[
  "./",
  "./index.html",
  "./manifest.json",
  "./logo.png",
  "./logo-192.png",
  "./logo-header.png"
];

self.addEventListener("install",e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});

self.addEventListener("fetch",e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
