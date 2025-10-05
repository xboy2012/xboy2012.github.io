import { formatPagePath } from '../../utils/formatPagePath';
import { getPagePaths } from './getPagePaths';
import type { PathString } from '../../types';

export const isPagePath = (path: PathString): boolean => {
  const formatedPath = formatPagePath(path);
  return getPagePaths().has(formatedPath);
};
