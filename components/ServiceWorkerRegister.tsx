'use client';

import { useEffect } from 'react';
import { isExperimental } from '../src/experimental';

export const ServiceWorkerRegister = () => {
  // install service worker to current page
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      if (!('serviceWorker' in navigator)) {
        return;
      }
      if (!isExperimental()) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          for (const registration of registrations) {
            registration.unregister();
          }
        });
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
