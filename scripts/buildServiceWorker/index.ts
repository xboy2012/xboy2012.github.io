import { generateServiceWorker } from './generateServiceWorker';

(async () => {
  const rootDir = process.cwd();
  await generateServiceWorker(rootDir);
})();
