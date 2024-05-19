import { type RouteMatchCallback } from 'workbox-core';
import { isPageRscPath } from './isPageRscPath';
import type { PathString } from '../../types';

export const capturePageRscRoutes: RouteMatchCallback = ({
  url,
  sameOrigin,
}) => {
  return sameOrigin && isPageRscPath(url.pathname as PathString);
};
