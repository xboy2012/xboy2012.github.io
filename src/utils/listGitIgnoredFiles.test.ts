import { join } from 'node:path';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { pathExists } from './pathExists';
import { listGitIgnoredFiles } from './listGitIgnoredFiles';
import { getRootDir } from './getRootDir';

describe('listGitIgnoredFiles', () => {
  const rootDir = getRootDir();
  const createdDirs: string[] = [];

  afterAll(async () => {
    await Promise.all(
      createdDirs.map((dir) => rm(dir, { force: true, recursive: true })),
    );
  });

  const initTemporaryDir = async () => {
    let temporaryDir: string;
    do {
      temporaryDir = join(
        rootDir,
        'temp',
        Math.random().toString(36).substring(2),
      );
    } while (await pathExists(temporaryDir));
    await mkdir(temporaryDir, { recursive: true });
    createdDirs.push(temporaryDir);
    return temporaryDir;
  };

  it('should list ignored files', async () => {
    const temporaryDir = await initTemporaryDir();
    const filePath = join(temporaryDir, 'sample.txt');
    await writeFile(filePath, '', 'utf8');

    const ignoredFiles = listGitIgnoredFiles(temporaryDir);
    await rm(temporaryDir, { force: true, recursive: true });
    const array = [...ignoredFiles];

    expect(array).toEqual([filePath]);
  });
});
