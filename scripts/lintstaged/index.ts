import { lintStaged } from './lintStaged';
import lintStagedConfig from './lintstaged.config';
import { getRootDir } from '../../src/utils/getRootDir';

// entry: LintStaged
const main = async () => {
  const rootDir = getRootDir();
  const success = await lintStaged({
    concurrent: true,
    config: lintStagedConfig,
    cwd: rootDir,
    relative: true,
    stash: true,
  });

  if (!success) {
    // eslint-disable-next-line unicorn/no-process-exit -- intended usage
    process.exit(1);
  }
};

main();
