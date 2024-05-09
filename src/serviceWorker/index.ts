/// <reference no-default-lib="true" />
/// <reference lib="es2015" />
/// <reference lib="dom" />
/// <reference lib="webworker" />

declare var self: ServiceWorkerGlobalScope & Window;

import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { captureStaticBuiltAssets } from './utils/captureStaticBuiltAssets';
import { capturePublicAssets } from './utils/capturePublicAssets';
import { capturePageRoutes } from './utils/capturePageRoutes';
import { capturePageRscRoutes } from './utils/capturePageRscRoutes';
import { formatPage } from './utils/plugins/formatPage';
import { removeSearch } from './utils/plugins/removeSearch';
import { addHashQuery } from './utils/plugins/addHashQuery';

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

// assets without hash should be cached with hash query
registerRoute(
  capturePublicAssets,
  new CacheFirst({
    cacheName: 'public',
    plugins: [removeSearch, addHashQuery],
  }),
);

// page requests should be cached with hash query
registerRoute(
  capturePageRoutes,
  new CacheFirst({
    cacheName: 'page',
    plugins: [removeSearch, formatPage, addHashQuery],
  }),
);

// page rsc requests
registerRoute(
  capturePageRscRoutes,
  new CacheFirst({
    cacheName: 'page',
    plugins: [removeSearch, addHashQuery],
  }),
);
