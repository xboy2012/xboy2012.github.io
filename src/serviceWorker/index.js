'use strict';
/// <reference lib="webworker" />
Object.defineProperty(exports, '__esModule', { value: true });
var workbox_routing_1 = require('workbox-routing');
var workbox_strategies_1 = require('workbox-strategies');
(function (self) {
  self.addEventListener('install', function (event) {
    self.skipWaiting();
  });
  // Next.js static assets can be always from cache
  (0, workbox_routing_1.registerRoute)(
    new RegExp('/_next/static/.*\\.(js|css)'),
    new workbox_strategies_1.CacheFirst({
      cacheName: '_next',
    }),
  );
  // TODO: other files
  // registerRoute(new RegExp('/assets/.*\\.*'), new StaleWhileRevalidate());
})(self);
