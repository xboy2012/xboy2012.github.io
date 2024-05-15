import { type WorkboxPlugin } from 'workbox-core';

export const removeSearch: WorkboxPlugin = {
  cacheKeyWillBeUsed: async ({ request }) => {
    const urlObj = new URL(request.url);
    if (!urlObj.search) {
      // no need to modify the request
      return request;
    }
    urlObj.search = '';
    return urlObj.toString();
  },
  requestWillFetch: async ({ request }) => {
    const urlObj = new URL(request.url);
    if (!urlObj.search) {
      // no need to modify the request
      return request;
    }
    urlObj.search = '';
    const newUrl = urlObj.toString();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- exclude url
    const { url, ...options } = request.clone();
    return new Request(newUrl, options);
  },
};
