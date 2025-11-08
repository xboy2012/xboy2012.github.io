import { execAsync } from '../tools/execAsync';
import { generateServiceWorker } from '../tools/buildServiceWorker/generateServiceWorker';
import { buildAssetsForBingIndex } from '../tools/buildAssetsForBingIndex';

const main = async () => {
  try {
    await execAsync('next build');
    await generateServiceWorker();
    await buildAssetsForBingIndex();

    console.log('All build steps finished successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    // eslint-disable-next-line unicorn/no-process-exit -- intended usage
    process.exit(1);
  }
};

main();
