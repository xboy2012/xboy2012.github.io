import { action } from './action';
import { getRootDir } from '../../src/utils/getRootDir';

(async () => {
  const rootDir = getRootDir();
  await action(rootDir);
})();
