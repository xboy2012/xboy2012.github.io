import { getStrictPagePaths } from './getStrictPagePaths';
import { getPagePathFormatMap } from './getPagePathFormatMap';

let pagePaths: Set<string> | undefined;

export const getPagePaths = (): Set<string> => {
  if (!pagePaths) {
    const newPagePaths = new Set<string>(getStrictPagePaths());
    for (const [loosePath, target] of getPagePathFormatMap()) {
      newPagePaths.add(loosePath);
      newPagePaths.add(target);
    }
    pagePaths = newPagePaths;
  }
  return pagePaths;
};
