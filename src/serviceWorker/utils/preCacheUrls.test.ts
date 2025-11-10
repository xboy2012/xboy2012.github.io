import { preCacheUrls } from './preCacheUrls';

describe('preCacheUrls test', () => {
  const sortStrings = (values: Iterable<string>): string[] => {
    return [...values].sort((a, b) => (a < b ? -1 : 1));
  };
  it('preCacheUrls works', async () => {
    const cacheName = `cache-${Math.random().toString(36).substring(2)}`;

    const existUrls = ['/a.js', '/b.js'];
    const newUrls = ['/b.js', '/c.js'];

    const resultUrls = new Set(existUrls);

    const self = {
      caches: {
        open: jest.fn(() =>
          Promise.resolve({
            keys: async () => {
              return existUrls.map((url) => ({ url }) as unknown as Request);
            },
            addAll: (urlsToAdd: Iterable<string>) => {
              for (const url of urlsToAdd) {
                resultUrls.add(url);
              }
            },
            delete: (url: string) => {
              resultUrls.delete(url);
            },
          }),
        ),
      },
    };

    await preCacheUrls(
      self as unknown as ServiceWorkerGlobalScope,
      cacheName,
      newUrls,
    );

    const array = sortStrings(resultUrls);
    expect(array).toEqual(newUrls);
  });
});
