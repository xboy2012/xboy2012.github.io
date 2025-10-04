import lintStagedAPI, { type Options } from 'lint-staged';

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

export const lintStaged = async (opt: Options): Promise<boolean> => {
  const options = { ...opt };
  if (!options.maxArgLength) {
    options.maxArgLength = getMaxArgLength();
  }
  return lintStagedAPI(options);
};
