import { type RouteMatchCallback } from 'workbox-core';
import { isPageRscPath } from '../../utils/isPageRscPath';

export const capturePageRscRoutes: RouteMatchCallback = ({ url }) => {
  return url.origin === self.location.origin && isPageRscPath(url.pathname);
};
