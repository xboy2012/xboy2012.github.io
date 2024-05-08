import type { PathString } from '../types';
import { formatPagePath } from './formatPagePath';

export const getFixedPageUrl = (location: {
  pathname: string;
  href: string;
}): URL | undefined => {
  const path = location.pathname as PathString;
  const formatedPath = formatPagePath(path);
  if (path === formatedPath) {
    return undefined;
  }
  const urlObj = new URL(location.href);
  urlObj.pathname = formatedPath;
  return urlObj;
};
