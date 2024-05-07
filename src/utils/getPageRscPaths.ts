import { getStrictPagePaths } from './getStrictPagePaths';
import { getRscPath } from './getRscPath';

let pageRscPaths: Set<string> | undefined;

export const getPageRscPaths = (): Set<string> => {
  if (!pageRscPaths) {
    const newPageRscPaths = new Set<string>();
    for (const path of getStrictPagePaths()) {
      newPageRscPaths.add(getRscPath(path));
    }
    pageRscPaths = newPageRscPaths;
  }
  return pageRscPaths;
};
