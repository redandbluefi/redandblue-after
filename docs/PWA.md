# Progressive Web Application

This project is a progressive web application and on mobile it can basically
behave like a native application. It can be added to the desktop
and can be even started in offline. This document will go through the
setup and features we currently have there.

## How it works

1.  Initialize

PWA requires a service worker, so first step is to initialize and register one.
In `client.js`, we register the service worker and pass it some parameters.

```js
// Register the service worker for cache and offline functionality
if (process.env.NODE_ENV !== 'development') {
  registerServiceWorker({ localeCode });
}
```

2.  Register

That will initialize the registration. That piece of code can be found from
`utils/service-worker.js`. In that file, we make some required checks if
ServiceWorkers are supported by the browser, and then start the registration.
We pass the received arguments to the ServiceWorker via query parameters. Looks like this:

```js
export default function register({ locale }) {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const SERVICE_WORKER = `/service-worker.js?locale=${locale}`;
      navigator.serviceWorker.register(SERVICE_WORKER).catch(err => {
        console.error('Error during service worker registration:', err);
      });
    });
  }
}
```

3.  ServiceWorker: Install

Service worker will first install itself. This will create the cache if it doesn't
exist and ensure that the defined files will be persisted to the cache.

In our case, we create cache for each locale separately.

See the `service-worker.js` files under `public/`.

```js
self.addEventListener('install', function(event) {
  const locale = new URL(location).searchParams.get('locale');
  const CACHE_NAME = `${locale}-cache`;

  event.waitUntil(
    // Open the locale-specific cache
    caches.open(CACHE_NAME).then(function(cache) {
      // This will fetch all the listed resources
      // and add them to the cache
      return cache.addAll(urlsToCache[locale]);
    })
  );
});
```

4.  ServiceWorker: Fetch

Even after the files has been cached, ServiceWorker and browser will not do anything
with them, unless told. So for that, we need to hook our logic to 'fetch' event.
Here it's possible to define different strategies how resources are fetched.
E.g. offline first, then network.

In our case, we use cache first, then network. When we fetched resource
from the network, we check our pattern if that response should be cached,
and then possibly add it to the cache. As a fallback (when cache and network fails),
we attempt to serve an offline page from the cache, which we've defined always
to be cached.

```js
self.addEventListener('fetch', function(event) {
  const locale = new URL(location).searchParams.get('locale');
  const CACHE_NAME = `${locale}-cache`;

  event.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      // Attempt to match the requested resource from the cache
      return cache.match(event.request).then(function(response) {
        // If the response was found from cache, that will be returned
        // Otherwise, we fetch the request resource (needs Internet connection)
        return (
          response ||
          fetch(event.request)
            .then(function(response) {
              // Once we got back the response, we check it against our patterns
              // If we've listed this resource as cacheable, we store the response
              urlsToCache['additional'].forEach(function(cachePath) {
                if (
                  cachePath instanceof RegExp &&
                  cachePath.test(event.request.url)
                ) {
                  cache.put(event.request, response.clone());
                } else if (cachePath === event.request.url) {
                  cache.put(event.request, response.clone());
                }
              });
              return response;
              // Finally, if network fetching also fails, we attempt to serve a page
              // from the cache. This we've listed to be always cached.
            })
            .catch(function() {
              return caches.match(`/${locale}/offline`);
            })
        );
      });
    })
  );
});
```

5.  ServiceWorker: Activate

This step will trigger when there's previous ServiceWorker and new one is going to be activated.
Here we can clean up any old resources we don't need anymore and perform other upgrades to the cache.

Currently our cache is so simple that we only remove the caches for other locales.
So for example when user has used English site, we have created a 'en' cache for it.
If user navigates to Finnish site, a new 'fi' cache will be created and this step will remove the old
'en' cache.

```js
self.addEventListener('activate', function(event) {
  const locale = new URL(location).searchParams.get('locale');
  const CACHE_NAME = `${locale}-cache`;

  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(k => CACHE_NAME !== k).map(function(cacheKey) {
          return caches.delete(cacheKey);
        })
      );
    })
  );
});
```
