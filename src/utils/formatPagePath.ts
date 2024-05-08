import type { PathString } from '../types';

export const formatPagePath = (path: PathString): PathString => {
  const length = path.length;
  const p = path.lastIndexOf('/');
  if (p === length - 1) {
    if (path.endsWith('/index/')) {
      // "/index".length is 7
      return (path.substring(0, path.length - 6) as PathString) || '/';
    }
    return path;
  }
  const lastPart = path.substring(p + 1);
  if (lastPart === 'index' || lastPart === 'index.html') {
    // trims trailing index or index.html
    return `${path.substring(0, p)}/` as PathString;
  }
  // the url is a file, keep untouched.
  if (lastPart.includes('.')) {
    return path;
  }
  return `${path}/`;
};
