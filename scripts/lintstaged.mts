import { lintStaged } from './utils/lintStaged.mts';
import lintStagedConfig from './utils/lintstaged.config.mts';

(async () => {
  const success = await lintStaged({
    allowEmpty: false,
    concurrent: true,
    config: lintStagedConfig,
    cwd: process.cwd(),
    debug: false,
    quiet: false,
    relative: false,
    shell: false,
    stash: true,
    verbose: false,
  });

  if (!success) {
    process.exit(1);
  }
})();
