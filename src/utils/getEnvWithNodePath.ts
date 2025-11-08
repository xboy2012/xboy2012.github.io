import { getRootDir } from './getRootDir';
import { delimiter, join } from 'node:path';
import { getEnvPathKey } from './getEnvPathKey';
import { getProcessEnv } from './getProcessEnv';

export const getEnvWithNodePath = (): typeof process.env => {
  const rootDir = getRootDir();
  const binDir = join(rootDir, 'node_modules', '.bin');
  const pathKey = getEnvPathKey();
  const env = getProcessEnv();
  const oldPath = env[pathKey];
  const newPath = oldPath ? `${binDir}${delimiter}${oldPath}` : binDir;
  return { ...env, [pathKey]: newPath };
};
