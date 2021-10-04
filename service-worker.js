const CACHE_NAME = 'ppkn-v1.3';
const cacheUrl = [
    '/',
    '/index.html',
    '/dist/css/style.css',
    '/dist/js/main.js',
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function (cache) {
            return cache.addAll(cacheUrl);
        })
    );
});

self.addEventListener("activate", function (event) {
    event.waitUntil(() => {
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (cacheName) {
                    console.log("Update Cache : " + cacheName)
                    return true;
                }).map(function (cacheName) {
                    return caches.delete("Delete Cache : " + cacheName);
                })
            )
        })
    })
});

self.addEventListener('fetch', (event) => {
    event.respondWith(async function () {
        const response = await caches.match(event.request);
        return response || fetch(event.request);
    }());
});