import { rm } from 'node:fs/promises';
import { join } from 'node:path';
import { getRootDir } from '../src/utils/getRootDir';

const filesToClean = [
  '.next',
  '.swc',
  'coverage',
  'out',
  'tsconfig.tsbuildinfo',
] as const;

export const clean = async (): Promise<void> => {
  const rootDir = getRootDir();
  const promises = filesToClean.map((filePath: string) => {
    const fullPath = join(rootDir, filePath);
    return rm(fullPath, {
      recursive: true,
      force: true,
    });
  });
  await Promise.all(promises);
};
