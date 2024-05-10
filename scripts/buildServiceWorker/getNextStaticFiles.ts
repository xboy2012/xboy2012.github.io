import { readdir } from 'node:fs/promises';
import { join as pathJoin, relative as pathRelative, sep } from 'node:path';

export const getNextStaticFiles = async (
  rootDir: string,
): Promise<string[]> => {
  const staticDir = pathJoin(rootDir, 'out', '_next', 'static');
  const files = (
    await readdir(staticDir, {
      recursive: true,
      withFileTypes: true,
    })
  )
    .filter((o) => o.isFile())
    .map((o) => {
      const dir = pathRelative(staticDir, o.path);
      return pathJoin(dir, o.name);
    });

  if (sep != '/') {
    // handle path format for windows
    return files.map((path) => path.split(sep).join('/'));
  }
  return files;
};
