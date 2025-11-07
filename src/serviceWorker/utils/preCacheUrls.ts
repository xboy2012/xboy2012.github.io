export const preCacheUrls = async (
  self: ServiceWorkerGlobalScope,
  cacheName: string,
  urls: string[],
): Promise<void> => {
  const cache = await self.caches.open(cacheName);
  const requests = await cache.keys();

  const urlSet = new Set<string>(urls);
  const urlToDeleteSet = new Set<string>();
  const urlToAddSet = new Set<string>(urls);

  for (const request of requests) {
    const url = request.url;
    const exists = urlSet.has(url);
    if (exists) {
      urlToAddSet.delete(url);
    } else {
      urlToDeleteSet.add(url);
    }
  }

  const deleteOptions: CacheQueryOptions = {
    ignoreVary: true,
    ignoreSearch: true,
    ignoreMethod: true,
  };

  const promises: Promise<unknown>[] = [
    // add necessary new cache
    cache.addAll(urlToAddSet),
    // delete useless old cache
    ...[...urlToDeleteSet].map((url) => cache.delete(url, deleteOptions)),
  ];

  await Promise.all(promises);
};
