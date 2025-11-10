import { delimiter } from 'node:path';
import { parseEnvPath } from './parseEnvPath';

export const prependEnvPath = (
  envPath: string | null | undefined,
  path: string,
): string => {
  const existingPaths = parseEnvPath(envPath);

  const newArray = [path];
  for (const p of existingPaths) {
    if (p !== path) {
      newArray.push(p);
    }
  }

  return newArray.join(delimiter);
};
