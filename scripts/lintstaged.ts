import { lintStaged } from './utils/lintStaged';
import lintStagedConfig from './utils/lintstaged.config';

(async () => {
  const success = await lintStaged({
    concurrent: true,
    config: lintStagedConfig,
    cwd: process.cwd(),
    relative: true,
    stash: true,
  });

  if (!success) {
    process.exit(1);
  }
})();
