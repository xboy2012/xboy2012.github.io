import type { WorkboxPlugin } from 'workbox-core';
import { replaceRequestUrl } from '../replaceRequestUrl';

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
    return replaceRequestUrl(request, urlObj.toString());
  },
};
