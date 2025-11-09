import lintStagedAPI, { type Options } from 'lint-staged';
import { getRootDir } from '../../src/utils/getRootDir';
import { getMaxArgLength } from '../../src/utils/getMaxArgLength';

export const lintStaged = async (
  opt: Omit<Options, 'maxArgLength' | 'cwd'>,
): Promise<boolean> => {
  return lintStagedAPI({
    ...opt,
    maxArgLength: getMaxArgLength(),
    cwd: getRootDir(),
  });
};
