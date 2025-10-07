import { action } from './action';
import { filesToClean } from './filesToClean';

(async () => {
  try {
    const rootDir = process.cwd();
    await action(rootDir);
    console.log('Successfully cleaned files:');
    for (const file of filesToClean) {
      console.log(file);
    }
  } catch (e) {
    console.error('Failed to clean files');
    console.error(e);
    process.exit(1);
  }
})();
