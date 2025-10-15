import { useEffect, useState } from 'react';
import { getFixedPageUrl } from '../utils/getFixedPageUrl';
import { replaceBrowserUrl } from '../utils/replaceBrowserUrl';

export type FixPageUrlStatus = 'pending' | 'ok' | 'redirecting';

export const useFixPageUrl = (): FixPageUrlStatus => {
  const [status, setStatus] = useState<FixPageUrlStatus>('pending');
  useEffect(() => {
    const urlObj = getFixedPageUrl(location);
    if (!urlObj) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- expected effect to ensure correct redirect
      setStatus('ok');
      return;
    }
    // automatically replace irregular page url
    setStatus('redirecting');
    replaceBrowserUrl(urlObj.toString());
  }, []);
  return status;
};
