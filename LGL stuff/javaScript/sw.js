var CACHE_NAME = 'lgl-PWA';
var urlsToCache = [
  '/',
  '/map.html',
  '/javaScript/map.js',
  '/json/manifest.json'
];

self.addEventListener('install', function(event){

  //perform install
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      //cache hit - return response
      if(response) {
        return response;
      }

      return fetch(event.request).then(
        function(response) {
          //check if valid response
          if(!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          var responseToCache = response.clone();

          caches.open(CACHE_NAME)
          .then(function(cache){
            cache.put(event.request, responseToCache);
          });

          return response;
        }
      );

    })
  );
});
