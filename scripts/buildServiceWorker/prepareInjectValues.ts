import { getNextStaticFiles } from './getNextStaticFiles';
import { getHashInfo } from './getHashInfo';

const wrapJSON = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- generic value
  values: Record<string, any>,
) => {
  const result: Record<string, string> = {};
  for (const key of Object.keys(values)) {
    result[key] = JSON.stringify(values[key], null, 2);
  }
  return result;
};

export const prepareInjectValues = async (rootDir: string) => {
  const [NEXT_STATIC_FILES, HASH_INFO] = await Promise.all([
    getNextStaticFiles(rootDir),
    getHashInfo(rootDir),
  ]);

  return wrapJSON({
    'process.env.NODE_ENV': 'production',
    NEXT_STATIC_FILES,
    HASH_INFO,
  });
};
