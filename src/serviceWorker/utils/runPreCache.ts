const staticFiles = NEXT_STATIC_FILES;

export const runPreCache = async () => {
  const urls = staticFiles.map((file) => {
    return `${self.location.origin}/_next/static/${file}`;
  });
  const cache = await caches.open('_next');
  await cache.addAll(urls);
};
