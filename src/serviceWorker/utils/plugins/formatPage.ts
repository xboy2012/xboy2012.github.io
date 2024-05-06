import { type WorkboxPlugin } from 'workbox-core';
import { formatPagePath } from '../formatPagePath';

export const formatPage: WorkboxPlugin = {
  cacheKeyWillBeUsed: async ({ request }) => {
    const urlObj = new URL(request.url);
    const pagePath = urlObj.pathname;
    const formatedPath = formatPagePath(urlObj.pathname);
    if (pagePath === formatedPath) {
      // no need to modify the request
      return request;
    }
    urlObj.pathname = formatedPath;

    // return the modified url as cache key
    return urlObj.toString();
  },
  requestWillFetch: async ({ request }) => {
    const urlObj = new URL(request.url);
    const pagePath = urlObj.pathname;
    const formatedPath = formatPagePath(pagePath);
    if (pagePath === formatedPath) {
      // there's no need to modify the request
      return request;
    }
    const { url, ...options } = request.clone();

    urlObj.pathname = formatedPath;
    const newUrl = urlObj.toString();

    return new Request(newUrl, options);
  },
};
