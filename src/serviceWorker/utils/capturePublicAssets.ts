import { type RouteMatchCallback } from 'workbox-core';

const publicAssets = new Set<string>(['/manifest.webmanifest', '/favicon.ico']);

export const capturePublicAssets: RouteMatchCallback = ({ url }) => {
  return url.origin === self.location.origin && publicAssets.has(url.pathname);
};
