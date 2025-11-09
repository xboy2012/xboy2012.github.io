import { readdir } from 'node:fs/promises';
import { join as pathJoin } from 'node:path';
import { pathExists } from '../../src/utils/pathExists';
import type { PathString } from '../../src/types';

const excludedDirs = new Set<PathString>(['/_next/', '/404/', '/exp/']);

export const getStaticPagePaths = async (rootDir: string) => {
  const outDir = pathJoin(rootDir, 'out');

  const result: PathString[] = [];

  const dfs = async (parts: string[]) => {
    const path: PathString = parts.length ? `/${parts.join('/')}/` : '/';
    if (excludedDirs.has(path)) {
      return;
    }

    // verify current directory is a valid page path
    const verifyCurrent = async () => {
      const indexHtmlPath = pathJoin(outDir, ...parts, 'index.html');
      const indexTxtPath = pathJoin(outDir, ...parts, 'index.txt');
      const [indexHtmlExists, indexTxtExists] = await Promise.all([
        pathExists(indexHtmlPath),
        pathExists(indexTxtPath),
      ]);
      if (indexHtmlExists && indexTxtExists) {
        result.push(path);
      }
    };

    // verify children folders recursively
    const verifyChildren = async () => {
      const entries = await readdir(pathJoin(outDir, ...parts), {
        withFileTypes: true,
      });
      const dirEntries = entries.filter((o) => o.isDirectory());
      const promises = dirEntries.map((o) => dfs([...parts, o.name]));
      await Promise.all(promises);
    };

    // ensure the maximum possible concurrency
    await Promise.all([verifyCurrent(), verifyChildren()]);
  };

  await dfs([]);

  // sort the result alphabetically to avoid inconsistent order.
  result.sort((a, b) => (a < b ? -1 : 1));

  return result;
};
