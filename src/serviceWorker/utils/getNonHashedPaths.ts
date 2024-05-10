import type { PathString } from '../../types';

let paths: [PathString, string][] | undefined;

export const getNonHashedPaths = (): [PathString, string][] => {
  if (!paths) {
    paths = NON_HASHED_PATHS;
  }
  return paths;
};
