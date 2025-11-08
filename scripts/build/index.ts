import { getRootDir } from '../../src/utils/getRootDir';
import { nextBuild } from './nextBuild';
import { buildAssetsForBingIndex } from './buildAssetsForBingIndex';
import { generateServiceWorker } from '../buildServiceWorker/generateServiceWorker';

const main = async () => {
  try {
    const rootDir = getRootDir();

    await nextBuild();
    await generateServiceWorker(rootDir);
    await buildAssetsForBingIndex();

    console.log('All build steps finished successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    // eslint-disable-next-line unicorn/no-process-exit -- intended usage
    process.exit(1);
  }
};

main();
