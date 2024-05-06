import { getPagePaths } from './getPagePaths';

export const isPagePath = (path: string): boolean => {
  return getPagePaths().has(path);
};
