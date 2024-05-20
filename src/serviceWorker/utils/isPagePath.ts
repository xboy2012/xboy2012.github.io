import { formatPagePath } from '../../utils/formatPagePath';
import { getPagePaths } from './getPagePaths';
import type { PathString } from '../../types';

export const isPagePath = (path: PathString): boolean => {
  path = formatPagePath(path);
  return getPagePaths().has(path);
};
