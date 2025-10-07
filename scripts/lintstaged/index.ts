import { lintStaged } from './lintStaged';
import lintStagedConfig from './lintstaged.config';
import { getRootDir } from '../../src/utils/getRootDir';

(async () => {
  const rootDir = getRootDir();
  const success = await lintStaged({
    concurrent: true,
    config: lintStagedConfig,
    cwd: rootDir,
    relative: true,
    stash: true,
  });

  if (!success) {
    process.exit(1);
  }
})();
