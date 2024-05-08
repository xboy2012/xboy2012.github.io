import { type RouteMatchCallback } from 'workbox-core';
import { isPagePath } from '../../utils/isPagePath';
import type { PathString } from '../../types';

export const capturePageRoutes: RouteMatchCallback = ({ url }) => {
  return (
    url.origin === self.location.origin &&
    isPagePath(url.pathname as PathString)
  );
};
