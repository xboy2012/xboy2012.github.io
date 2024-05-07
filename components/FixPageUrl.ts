'use client';

import { useEffect } from 'react';
import { formatPagePath } from '../src/utils/formatPagePath';

export const FixPageUrl = () => {
  useEffect(() => {
    const path = location.pathname;
    const formatedPath = formatPagePath(path);
    if (path === formatedPath) {
      return;
    }
    const urlObj = new URL(location.href);
    urlObj.pathname = formatedPath;

    // automatically replace irregular page url
    location.replace(urlObj.toString());
  }, []);

  return null;
};
