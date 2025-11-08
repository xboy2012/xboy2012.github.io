import lintStagedAPI, { type Options } from 'lint-staged';
import { getRootDir } from '../../src/utils/getRootDir';

const getMaxArgLength = () => {
  switch (process.platform) {
    case 'darwin':
      return 262144;
    case 'win32':
      return 8191;
    default:
      return 131072;
  }
};

export const lintStaged = async (
  opt: Omit<Options, 'maxArgLength' | 'cwd'>,
): Promise<boolean> => {
  return lintStagedAPI({
    ...opt,
    maxArgLength: getMaxArgLength(),
    cwd: getRootDir(),
  });
};
