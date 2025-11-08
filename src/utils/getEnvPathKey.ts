import { singleton } from './singleton';
import { isWindows } from './isWindows';
import { getProcessEnv } from './getProcessEnv';

export const getEnvPathKey = singleton(() => {
  if (!isWindows()) {
    return 'PATH';
  }
  const env = getProcessEnv();
  const pathKey = Object.keys(env).find((key) => key.toLowerCase() === 'path');
  return pathKey || 'PATH';
});
