import { access, constants } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { getRootDir } from './getRootDir';

describe('getRootDir', () => {
  const pathExists = async (path: string): Promise<boolean> => {
    try {
      await access(path, constants.R_OK);
      return true;
    } catch {
      return false;
    }
  };

  const findRootDirOnce = async (): Promise<string> => {
    let currentDir = import.meta.dirname;
    while (true) {
      const pkgJsonFile = resolve(currentDir, './package.json');
      if (await pathExists(pkgJsonFile)) {
        return currentDir;
      }
      const nextDir = dirname(currentDir);
      if (nextDir === currentDir) {
        break;
      }
      currentDir = nextDir;
    }
    throw new Error('no root directory found');
  };

  let findDirRootPromise: Promise<string> | undefined;
  const findRootDir = (): Promise<string> => {
    if (!findDirRootPromise) {
      findDirRootPromise = findRootDirOnce();
    }
    return findDirRootPromise;
  };

  it('esm should return correct path', async () => {
    const expectedResult = await findRootDir();
    expect(getRootDir()).toBe(expectedResult);
  });
});
