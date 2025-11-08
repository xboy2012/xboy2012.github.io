import { requestBingIndexing } from '../tools/requestBingIndexing';

const main = async () => {
  try {
    await requestBingIndexing();
    console.log('Request Bing Indexing successfully!');
  } catch (error) {
    console.error('Request Bing Indexing failed:', error);
    // eslint-disable-next-line unicorn/no-process-exit -- intended usage
    process.exit(1);
  }
};

main();
