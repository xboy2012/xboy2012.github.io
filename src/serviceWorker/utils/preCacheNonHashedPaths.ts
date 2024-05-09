import { CACHE_NAME_NO_HASH } from './cacheNames';
import { getNoneHashedPaths } from './getNoneHashedPaths';

export const preCacheNonHashedPaths = async () => {
  const urls = getNoneHashedPaths().map(([path, hash]) => {
    return `${self.location.origin}${path}?_=${hash}`;
  });
  const cache = await caches.open(CACHE_NAME_NO_HASH);
  await cache.addAll(urls);
};
