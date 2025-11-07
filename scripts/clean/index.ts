import { action } from './action';
import { filesToClean } from './filesToClean';
import { getRootDir } from '../../src/utils/getRootDir';

// entry: clean
const main = async () => {
  try {
    const rootDir = getRootDir();
    await action(rootDir);
    console.log('Successfully cleaned files:');
    for (const file of filesToClean) {
      console.log(file);
    }
  } catch (error) {
    console.error('Failed to clean files');
    console.error(error);
    // eslint-disable-next-line unicorn/no-process-exit -- intended usage
    process.exit(1);
  }
};

main();
