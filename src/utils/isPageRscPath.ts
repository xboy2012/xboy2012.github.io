import { getStrictPagePaths } from './getStrictPagePaths';
import { getValidBlogIdsForPath } from './getValidBlogIdsForPath';
import type { PathString } from '../types';

export const isPageRscPath = (path: PathString): boolean => {
  if (path === '/') {
    return false;
  }
  const length = path.length;
  const p = path.lastIndexOf('/');
  if (p === length - 1) {
    return false;
  }
  const lastPart = path.substring(p + 1);
  if (lastPart !== 'index.txt') {
    return false;
  }

  // trim trailing /index.txt
  path = (path.substring(0, p) as PathString) || '/';

  if (getStrictPagePaths().has(path)) {
    return true;
  }

  // matches path for /blog/:blogId
  if (path.startsWith('/blog/')) {
    const p = path.lastIndexOf('/');
    if (p !== 5) {
      return false;
    }
    const blogId = path.substring(6);
    return getValidBlogIdsForPath().has(blogId);
  }

  return false;
};
