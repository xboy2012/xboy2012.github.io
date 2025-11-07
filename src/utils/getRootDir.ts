/* istanbul ignore file */
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const getSelfPath = () => {
  try {
    const url = import.meta.url;
    return fileURLToPath(url);
  } catch {
    // silent fail
  }

  /* eslint-disable unicorn/prefer-module -- intended usage for CommonJS env */
  if (typeof __filename === 'string' && __filename) {
    return __filename;
  }
  /* eslint-enable unicorn/prefer-module */

  throw new Error('cannot detect self path');
};

let rootDir: string | undefined;
export const getRootDir = () => {
  if (!rootDir) {
    const selfPath = getSelfPath();
    // <root>/src/utils/getRootDir.ts => <root>
    rootDir = dirname(dirname(dirname(selfPath)));
  }
  return rootDir;
};
