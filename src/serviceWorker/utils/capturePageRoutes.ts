import { type RouteMatchCallback } from 'workbox-core';
import { isPagePath } from './isPagePath';
import type { PathString } from '../../types';

export const capturePageRoutes: RouteMatchCallback = ({ url, sameOrigin }) => {
  return sameOrigin && isPagePath(url.pathname as PathString);
};
