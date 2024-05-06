import { getPageRscPaths } from './getPageRscPaths';

export const isPageRscPath = (path: string): boolean => {
  return getPageRscPaths().has(path);
};
