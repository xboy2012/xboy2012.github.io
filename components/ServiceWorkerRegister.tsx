'use client';

import { useEffect } from 'react';

export const ServiceWorkerRegister = () => {
  // install service worker to current page
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      if (!('serviceWorker' in navigator)) {
        return;
      }
      (async () => {
        const { Workbox } = await import('workbox-window');
        const wb = new Workbox('/serviceWorker.js');
        await wb.register();
      })();
    }
  }, []);
  return null;
};
