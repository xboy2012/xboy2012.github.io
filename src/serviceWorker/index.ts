/// <reference no-default-lib="true" />
/// <reference lib="es2015" />
/// <reference lib="dom" />
/// <reference lib="webworker" />

declare var self: ServiceWorkerGlobalScope & Window;

import { registerRoute } from 'workbox-routing';
import { CacheFirst, NetworkFirst } from 'workbox-strategies';
import { captureStaticBuiltAssets } from './utils/captureStaticBuiltAssets';
import { capturePublicAssets } from './utils/capturePublicAssets';
import { capturePageRoutes } from './utils/capturePageRoutes';
import { capturePageRscRoutes } from './utils/capturePageRscRoutes';
import { formatPage } from './utils/plugins/formatPage';
import { removeSearch } from './utils/plugins/removeSearch';

self.addEventListener('install', () => {
  self.skipWaiting();
});

// assets built with hash can be always from cache
registerRoute(
  captureStaticBuiltAssets,
  new CacheFirst({
    cacheName: '_next',
    plugins: [removeSearch],
  }),
);

// assets without hash should be network-first
registerRoute(
  capturePublicAssets,
  new NetworkFirst({
    cacheName: 'public',
    plugins: [removeSearch],
  }),
);

// page requests
registerRoute(
  capturePageRoutes,
  new NetworkFirst({
    cacheName: 'page',
    plugins: [removeSearch, formatPage],
  }),
);

// page rsc requests
registerRoute(
  capturePageRscRoutes,
  new NetworkFirst({
    cacheName: 'page',
  }),
);
