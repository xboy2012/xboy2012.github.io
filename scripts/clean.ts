import { clean } from '../tools/clean';
import { execAsync } from '../tools/execAsync';

// entry: clean
const main = async () => {
  try {
    await clean();
    console.log('Successfully cleaned files');
    // regenerate necessary types for development
    await execAsync('next typegen');
  } catch (error) {
    console.error('Failed to clean files');
    console.error(error);
    // eslint-disable-next-line unicorn/no-process-exit -- intended usage
    process.exit(1);
  }
};

main();
