import { type RouteMatchCallback } from 'workbox-core';
import { isPagePath } from '../../utils/isPagePath';

export const capturePageRoutes: RouteMatchCallback = ({ url }) => {
  return url.origin === self.location.origin && isPagePath(url.pathname);
};
