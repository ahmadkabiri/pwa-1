// this

// Comment 5
self.addEventListener("install", () => {
  console.log("Service Worker Installed Successfully :))");
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  console.log("service worker is activated Successfully");
});

self.addEventListener('fetch',(event) => {
  console.log(event.request)
  event.respondWith(fetch(event.request))

})


console.log('self',self)
