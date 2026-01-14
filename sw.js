const CACHE_NAME = "smartq-v1";
const ASSETS = [
  "/",
  "/index.html",
  "/admin_dashboard.html",
  "/customer.html",
  "/style.css",
  "/logo.png",
  "/manifest.json"
];

// Install Event
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch Event (Serve from Cache if offline)
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});