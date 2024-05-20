import type { PathString } from '../../types';
import { getHashInfo } from './getHashInfo';

let pagePaths: Set<PathString> | undefined;

export const getPagePaths = () => {
  if (!pagePaths) {
    const [pageHashes] = getHashInfo();
    pagePaths = new Set(pageHashes.map(([pagePath]) => pagePath));
  }
  return pagePaths;
};
