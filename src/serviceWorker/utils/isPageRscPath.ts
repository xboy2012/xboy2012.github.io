import type { PathString } from '../../types';
import { getPageRscPaths } from './getPageRscPaths';

export const isPageRscPath = (path: PathString): boolean => {
  return getPageRscPaths().has(path);
};
