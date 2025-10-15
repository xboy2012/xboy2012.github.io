import { useState, useEffect } from 'react';

export const useMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- expected effect to ensure consistence in SSR
    setMounted(true);
  }, []);

  return mounted;
};
