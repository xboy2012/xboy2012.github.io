import type { WorkboxPlugin } from 'workbox-core';
import type { PathString } from '../../../types';
import { getHashMapFromHashInfo } from '../getHashMapFromHashInfo';
import { getHashInfo } from '../getHashInfo';

let hashMap: Map<PathString, string> | undefined;
const getHashMap = () => {
  if (!hashMap) {
    hashMap = getHashMapFromHashInfo(getHashInfo());
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
