import { generateServiceWorker } from './generateServiceWorker';
import { getRootDir } from '../../src/utils/getRootDir';

// entry: build serviceWorker
const main = async () => {
  const rootDir = getRootDir();
  await generateServiceWorker(rootDir);
};

main();
