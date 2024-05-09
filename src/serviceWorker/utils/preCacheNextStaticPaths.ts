import { CACHE_NAME_HASH } from './cacheNames';
import { getNextStaticFiles } from './getNextStaticFiles';

export const preCacheNextStaticPaths = async () => {
  const urls = getNextStaticFiles().map((file) => {
    return `${self.location.origin}/_next/static/${file}`;
  });
  const cache = await caches.open(CACHE_NAME_HASH);
  await cache.addAll(urls);
};
