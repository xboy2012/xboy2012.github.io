import { execAsync } from '../tools/execAsync';

const main = async () => {
  await execAsync('next typegen');
  await execAsync('tsc --noEmit');
};

main();
