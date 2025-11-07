import { action } from './action';
import { getRootDir } from '../../src/utils/getRootDir';

// entry: prepare
const main = async () => {
  const rootDir = getRootDir();
  await action(rootDir);
};

main();
