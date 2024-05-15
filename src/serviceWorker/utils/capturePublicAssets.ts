import { type RouteMatchCallback } from 'workbox-core';
import { getPublicAssets } from './getPublicAssets';
import type { PathString } from '../../types';

export const capturePublicAssets: RouteMatchCallback = ({ url }) => {
  return (
    url.origin === self.location.origin &&
    getPublicAssets().has(url.pathname as PathString)
  );
};
