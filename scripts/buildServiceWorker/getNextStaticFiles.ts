import { readdir } from 'node:fs/promises';
import { join as pathJoin, relative as pathRelative, sep } from 'node:path';

const formatPath = (path: string): string => {
  if (sep === '/') {
    return path;
  }
  // handle path format for windows
  return path.split(sep).join('/');
};

export const getNextStaticFiles = async (
  rootDir: string,
): Promise<{ skippedFiles: string[]; files: string[] }> => {
  const staticDir = pathJoin(rootDir, 'out', '_next', 'static');

  const allEntries = await readdir(staticDir, {
    recursive: true,
    withFileTypes: true,
  });
  const entries = allEntries.filter((o) => o.isFile());

  const skippedFiles: string[] = [];
  const files: string[] = [];

  for (const o of entries) {
    const dir = pathRelative(staticDir, o.parentPath);
    const file = formatPath(pathJoin(dir, o.name));
    if (o.name.startsWith('ns-')) {
      skippedFiles.push(file);
    } else {
      files.push(file);
    }
  }

  return { skippedFiles, files };
};
