import { type WorkboxPlugin } from 'workbox-core';
import type { PathString } from '../../../types';
import { getNonHashedPaths } from '../getNonHashedPaths';

let hashMap: Map<PathString, string> | undefined;
const getHashMap = () => {
  if (!hashMap) {
    hashMap = new Map(getNonHashedPaths());
  }
  return hashMap;
};

export const addHashQuery: WorkboxPlugin = {
  cacheKeyWillBeUsed: async ({ request }) => {
    const urlObj = new URL(request.url);
    const pagePath = urlObj.pathname as PathString;
    const hash = getHashMap().get(pagePath);
    if (!hash) {
      // no hash needed for the url
      return request;
    }
    urlObj.search = `?_=${hash}`;

    // return the modified url as cache key
    return urlObj.toString();
  },
};
