/// <reference no-default-lib="true" />
/// <reference lib="es2015" />
/// <reference lib="dom" />
/// <reference lib="webworker" />

declare var self: ServiceWorkerGlobalScope & Window;

import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';

self.addEventListener('install', () => {
  self.skipWaiting();
});

// Next.js static assets can be always from cache
registerRoute(
  new RegExp('/_next/static/.*\\.(js|css|jpg|png|svg)'),
  new CacheFirst({
    cacheName: '_next',
  }),
);
