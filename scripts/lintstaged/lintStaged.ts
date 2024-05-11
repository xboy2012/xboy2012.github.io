import lintStagedAPI, { type Config } from 'lint-staged';

export type LogFunction = (...args: any[]) => void;

export interface Logger {
  error: LogFunction;
  log: LogFunction;
  warn: LogFunction;
}

const getMaxArgLength = () => {
  switch (process.platform) {
    case 'darwin':
      return 262144;
    case 'win32':
      return 8191;
    default:
      return 131072;
  }
};

export const lintStaged = async (opt: {
  allowEmpty?: boolean;
  concurrent?: boolean | number;
  config?: Config;
  configPath?: string;
  cwd?: string;
  debug?: boolean;
  diff?: string;
  diffFilter?: string;
  maxArgLength?: number;
  quiet?: boolean;
  relative?: boolean;
  shell?: boolean | string;
  stash?: boolean;
  verbose?: boolean;
  logger?: Logger;
}): Promise<boolean> => {
  const options = { ...opt };
  if (!options.maxArgLength) {
    options.maxArgLength = getMaxArgLength();
  }
  return (lintStagedAPI as any)(options);
};
