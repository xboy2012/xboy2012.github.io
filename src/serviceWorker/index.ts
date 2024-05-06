import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';

// Next.js static assets can be always from cache
registerRoute(
  new RegExp('/_next/static/.*\\.(js|css)'),
  new CacheFirst({
    cacheName: '_next',
  }),
);

// TODO: other files
// registerRoute(new RegExp('/assets/.*\\.*'), new StaleWhileRevalidate());
