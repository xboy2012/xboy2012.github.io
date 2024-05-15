/// <reference no-default-lib="true" />
/// <reference lib="es2015" />
/// <reference lib="dom" />
/// <reference lib="webworker" />

import { preCacheUrls } from './utils/preCacheUrls';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { captureStaticBuiltAssets } from './utils/captureStaticBuiltAssets';
import { capturePublicAssets } from './utils/capturePublicAssets';
import { capturePageRoutes } from './utils/capturePageRoutes';
import { capturePageRscRoutes } from './utils/capturePageRscRoutes';
import { CACHE_NAME_HASH, CACHE_NAME_NO_HASH } from './utils/cacheNames';
import { formatPage } from './utils/plugins/formatPage';
import { removeSearch } from './utils/plugins/removeSearch';
import { addHashQuery } from './utils/plugins/addHashQuery';
import { getNonHashedPaths } from './utils/getNonHashedPaths';
import { getNextStaticFiles } from './utils/getNextStaticFiles';

declare const self: ServiceWorkerGlobalScope & Window;

// assets built with hash can be always from cache
registerRoute(
  captureStaticBuiltAssets,
  new CacheFirst({
    cacheName: CACHE_NAME_HASH,
    plugins: [removeSearch],
  }),
);

// assets without hash should be cached with hash query
registerRoute(
  capturePublicAssets,
  new CacheFirst({
    cacheName: CACHE_NAME_NO_HASH,
    plugins: [removeSearch, addHashQuery],
  }),
);

// page requests should be cached with hash query
registerRoute(
  capturePageRoutes,
  new CacheFirst({
    cacheName: CACHE_NAME_NO_HASH,
    plugins: [removeSearch, formatPage, addHashQuery],
  }),
);

// page rsc requests
registerRoute(
  capturePageRscRoutes,
  new CacheFirst({
    cacheName: CACHE_NAME_NO_HASH,
    plugins: [removeSearch, addHashQuery],
  }),
);

self.addEventListener('install', () => {
  self.skipWaiting();
  preCacheUrls(
    CACHE_NAME_NO_HASH,
    getNonHashedPaths().map(([path, hash]) => {
      return `${self.location.origin}${path}?_=${hash}`;
    }),
  );
  preCacheUrls(
    CACHE_NAME_HASH,
    getNextStaticFiles().map((file) => {
      return `${self.location.origin}/_next/static/${file}`;
    }),
  );
});
