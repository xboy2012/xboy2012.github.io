import { useEffect, useState } from 'react';

// this file contains some tool involving experimental features

export const useExperimental = () => {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('exp') === '1') {
      setEnabled(true);
    }
    const handler = (e: StorageEvent) => {
      if (e.key === 'exp') {
        setEnabled(e.newValue === '1');
      }
    };
    window.addEventListener('storage', handler);
    return () => {
      window.removeEventListener('storage', handler);
    };
  }, []);
  return enabled;
};

export const enableExperimental = () => {
  localStorage.setItem('exp', '1');
};
