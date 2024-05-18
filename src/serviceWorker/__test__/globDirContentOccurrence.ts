import { readdir } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { createInterface } from 'node:readline';
import { extname, basename, relative, join as pathJoin } from 'node:path';

const extSet = new Set([
  '.ts',
  '.tsx',
  '.mts',
  '.cts',
  '.js',
  '.jsx',
  '.mjs',
  '.cjs',
]);

export const globDirContentOccurrence = async (
  rootDir: string,
  dir: string,
  varName: string,
) => {
  const entries = (
    await readdir(dir, { withFileTypes: true, recursive: true })
  ).filter((entry) => {
    // skip none files
    if (!entry.isFile()) {
      return false;
    }
    const fileName = entry.name;
    const ext = extname(fileName);
    // skip none js/ts files
    if (!extSet.has(ext)) {
      return false;
    }
    // skip test files
    if (basename(fileName, ext).endsWith('.test')) {
      return false;
    }
    // finally it's the file we want to process
    return true;
  });

  const checkFile = async (filePath: string): Promise<number> => {
    const stream = createReadStream(filePath);
    const rl = createInterface({
      input: stream,
      crlfDelay: Infinity,
    });

    let count = 0;
    for await (const line of rl) {
      if (!line) {
        continue;
      }
      count += line.split(varName).length - 1;
      if (count > 1) {
        return 2;
      }
    }
    return count;
  };

  const promises = entries.map(async (entry) => {
    const filePath = pathJoin(entry.parentPath, entry.name);
    const occurrences = await checkFile(filePath);
    return { filePath: relative(rootDir, filePath), occurrences };
  });
  const results = await Promise.all(promises);
  return results.filter((o) => o.occurrences > 0);
};
