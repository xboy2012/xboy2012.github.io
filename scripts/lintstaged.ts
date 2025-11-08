import { lintStaged } from '../tools/lintstaged/lintStaged';
import lintStagedConfig from '../tools/lintstaged/lintstaged.config';

// entry: LintStaged
const main = async () => {
  const success = await lintStaged({
    concurrent: true,
    config: lintStagedConfig,
    relative: true,
    stash: true,
  });

  if (!success) {
    // eslint-disable-next-line unicorn/no-process-exit -- intended usage
    process.exit(1);
  }
};

main();
