import { getStrictPagePaths } from './getStrictPagePaths';

let pagePathFormatMap: Map<string, string> | undefined;

export const getPagePathFormatMap = (): Map<string, string> => {
  if (!pagePathFormatMap) {
    const map = new Map<string, string>();
    for (const path of getStrictPagePaths()) {
      const prefix = path === '/' ? '' : path;
      const target = path === '/' ? '/' : `${path}/`;
      if (path !== target) {
        map.set(path, target);
      }
      map.set(`${prefix}/index`, target);
      map.set(`${prefix}/index.html`, target);
    }
    pagePathFormatMap = map;
  }
  return pagePathFormatMap;
};
