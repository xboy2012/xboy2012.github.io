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

  if (typeof __filename === 'string' && __filename) {
    return __filename;
  }

  throw Error('cannot detect self path');
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
