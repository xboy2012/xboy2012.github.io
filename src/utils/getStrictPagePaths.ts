import type { PathString } from '../types';

let strictPagePaths: Set<PathString> | undefined;

export const getStrictPagePaths = (): Set<PathString> => {
  if (!strictPagePaths) {
    strictPagePaths = new Set(['/', '/resume', '/portfolio', '/blog']);
  }
  return strictPagePaths;
};
