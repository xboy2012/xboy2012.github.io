import { readdir } from 'node:fs/promises';
import { join as pathJoin, relative as pathRelative, sep } from 'node:path';

export const getNextStaticFiles = async (): Promise<string[]> => {
  const rootDir = pathJoin(process.cwd(), 'out', '_next', 'static');
  const files = (
    await readdir(rootDir, {
      recursive: true,
      withFileTypes: true,
    })
  )
    .filter((o) => o.isFile())
    .map((o) => {
      const dir = pathRelative(rootDir, o.path);
      return pathJoin(dir, o.name);
    });

  if (sep != '/') {
    // handle path format for windows
    return files.map((path) => path.split(sep).join('/'));
  }
  return files;
};
