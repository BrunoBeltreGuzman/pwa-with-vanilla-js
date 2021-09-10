const nameCache = "thecache";
const assetsCache = ["/"];

self.addEventListener("install", (installEvent) => {
       installEvent.waitUntil(
              caches.open(nameCache).then((cache) => {
                     cache.addAll(assetsCache);
              })
       );
});

self.addEventListener("fetch", (fetchEvent) => {
       fetchEvent.respondWith(
              caches.match(fetchEvent.request).then((res) => {
                     return res || fetch(fetchEvent.request);
              })
       );
});
