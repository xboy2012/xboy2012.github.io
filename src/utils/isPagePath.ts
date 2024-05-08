import { getStrictPagePaths } from './getStrictPagePaths';
import { formatPagePath } from './formatPagePath';
import { getValidBlogIdsForPath } from './getValidBlogIdsForPath';
import type { PathString } from '../types';

export const isPagePath = (path: PathString): boolean => {
  path = formatPagePath(path);
  if (path === '/') {
    return true;
  }

  // trim trailing slash
  path = path.substring(0, path.length - 1) as PathString;

  if (getStrictPagePaths().has(path)) {
    return true;
  }

  const p = path.lastIndexOf('/');
  const lastPart = path.substring(p + 1);

  // link with file extension should not be considered a page path
  if (lastPart.includes('.')) {
    return false;
  }

  // matches path for /blog/:blogId
  if (path.startsWith('/blog/')) {
    // '/blog/'.length is 6

    const p = path.lastIndexOf('/');
    if (p !== 5) {
      return false;
    }
    const blogId = path.substring(6);
    return getValidBlogIdsForPath().has(blogId);
  }

  return false;
};
