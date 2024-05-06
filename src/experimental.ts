import { useEffect, useState } from 'react';

// this file contains some tool involving experimental features

export const useExperimental = () => {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    if (isExperimental()) {
      setEnabled(true);
    }
    const dispose = listenExperimentalChange((enabled) => {
      setEnabled(enabled);
    });

    return () => {
      dispose();
    };
  }, []);
  return enabled;
};

const listenExperimentalChange = (callback: (enabled: boolean) => void) => {
  const handler = (e: StorageEvent) => {
    if (e.key === 'exp') {
      callback(e.newValue === '1');
    }
  };
  window.addEventListener('storage', handler);
  return () => {
    window.removeEventListener('storage', handler);
  };
};

export const isExperimental = () => {
  return localStorage.getItem('exp') === '1';
};

export const enableExperimental = () => {
  localStorage.setItem('exp', '1');
};
