import { singleton } from './singleton';

export const isWindows = singleton(() => {
  return process.platform === 'win32';
});
