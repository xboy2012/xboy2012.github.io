import { generateServiceWorker } from './generateServiceWorker';
import { getRootDir } from '../../src/utils/getRootDir';

(async () => {
  const rootDir = getRootDir();
  await generateServiceWorker(rootDir);
})();
