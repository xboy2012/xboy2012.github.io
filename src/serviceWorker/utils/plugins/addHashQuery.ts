import { type WorkboxPlugin } from 'workbox-core';
import type { PathString } from '../../../types';

const assetsHashes = new Map(ASSETS_HASHES);

export const addHashQuery: WorkboxPlugin = {
  cacheKeyWillBeUsed: async ({ request }) => {
    const urlObj = new URL(request.url);
    const pagePath = urlObj.pathname as PathString;
    const hash = assetsHashes.get(pagePath);
    if (!hash) {
      // no hash needed for the url
      return request;
    }
    urlObj.search = `?_=${hash}`;

    // return the modified url as cache key
    return urlObj.toString();
  },
};
