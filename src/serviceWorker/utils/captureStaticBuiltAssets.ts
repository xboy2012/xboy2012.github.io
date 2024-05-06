import { type RouteMatchCallback } from 'workbox-core';

export const captureStaticBuiltAssets: RouteMatchCallback = ({ url }) => {
  return (
    url.origin === self.location.origin &&
    url.pathname.startsWith('/_next/static/')
  );
};
