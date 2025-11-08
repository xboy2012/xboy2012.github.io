import { requestGoogleIndexing } from '../tools/requestGoogleIndexing';

const main = async () => {
  try {
    await requestGoogleIndexing();
    console.log('Request Google Indexing successfully!');
  } catch (error) {
    console.error('Request Google Indexing failed:', error);
    // eslint-disable-next-line unicorn/no-process-exit -- intended usage
    process.exit(1);
  }
};

main();
