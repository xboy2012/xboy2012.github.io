import { getRootDir } from './getRootDir';
import { join } from 'node:path';
import { getEnvPathKey } from './getEnvPathKey';
import { getProcessEnv } from './getProcessEnv';
import { prependEnvPath } from './prependEnvPath';

export const getEnvWithNodePath = (): typeof process.env => {
  const rootDir = getRootDir();
  const binDir = join(rootDir, 'node_modules', '.bin');
  const pathKey = getEnvPathKey();
  const env = getProcessEnv();
  return {
    ...env,
    [pathKey]: prependEnvPath(env[pathKey], binDir),
  };
};
