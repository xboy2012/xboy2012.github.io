import { useEffect, useState } from 'react';
import { getFixedPageUrl } from '../utils/getFixedPageUrl';
import { replaceBrowserUrl } from '../utils/replaceBrowserUrl';

export type FixPageUrlStatus = 'pending' | 'ok' | 'redirecting';

export const useFixPageUrl = (): FixPageUrlStatus => {
  const [status, setStatus] = useState<FixPageUrlStatus>('pending');
  useEffect(() => {
    const urlObj = getFixedPageUrl(location);
    if (!urlObj) {
      setStatus('ok');
      return;
    }
    // automatically replace irregular page url
    setStatus('redirecting');
    replaceBrowserUrl(urlObj.toString());
  }, []);
  return status;
};
