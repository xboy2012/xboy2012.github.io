import { type RouteMatchCallback } from 'workbox-core';

export const captureStaticBuiltAssets: RouteMatchCallback = ({
  url,
  sameOrigin,
}) => {
  return sameOrigin && url.pathname.startsWith('/_next/static/');
};
