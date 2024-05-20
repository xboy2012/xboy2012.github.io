import type { PathString } from '../../types';
import { getHashInfo } from './getHashInfo';

let pageRscPaths: Set<PathString> | undefined;

export const getPageRscPaths = () => {
  if (!pageRscPaths) {
    const [pageHashes] = getHashInfo();
    pageRscPaths = new Set(
      pageHashes.map(([pagePath]) => `${pagePath}index.txt` as PathString),
    );
  }
  return pageRscPaths;
};
