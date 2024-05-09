import { type RouteMatchCallback } from 'workbox-core';
import { isPageRscPath } from './isPageRscPath';
import type { PathString } from '../../types';

export const capturePageRscRoutes: RouteMatchCallback = ({ url }) => {
  return (
    url.origin === self.location.origin &&
    isPageRscPath(url.pathname as PathString)
  );
};
