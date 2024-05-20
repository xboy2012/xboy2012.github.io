/// <reference no-default-lib="true" />
/// <reference lib="es2015" />
/// <reference lib="dom" />
/// <reference lib="webworker" />

import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { captureStaticBuiltAssets } from './captureStaticBuiltAssets';
import { capturePublicAssets } from './capturePublicAssets';
import { capturePageRoutes } from './capturePageRoutes';
import { capturePageRscRoutes } from './capturePageRscRoutes';
import { CACHE_NAME_HASH, CACHE_NAME_NO_HASH } from './cacheNames';
import { formatPage } from './plugins/formatPage';
import { removeSearch } from './plugins/removeSearch';
import { addHashQuery } from './plugins/addHashQuery';
import { getNextStaticFiles } from './getNextStaticFiles';
import { preCacheUrls } from './preCacheUrls';
import { selfOrigin } from './consts';
import { getPrecacheUrlsForNonHash } from './getPrecacheUrlsForNonHash';

export const initialize = (self: ServiceWorkerGlobalScope) => {
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
    preCacheUrls(self, CACHE_NAME_NO_HASH, getPrecacheUrlsForNonHash());
    preCacheUrls(
      self,
      CACHE_NAME_HASH,
      getNextStaticFiles().map((file) => {
        return `${selfOrigin}/_next/static/${file}`;
      }),
    );
  });
};
