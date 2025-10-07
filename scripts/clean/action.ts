import { rm } from 'node:fs/promises';
import { join } from 'node:path';
import { filesToClean } from './filesToClean';

export const action = async (rootDir: string): Promise<void> => {
  const promises = filesToClean.map((filePath: string) => {
    const fullPath = join(rootDir, filePath);
    return rm(fullPath, {
      recursive: true,
      force: true,
    });
  });
  await Promise.all(promises);
};
