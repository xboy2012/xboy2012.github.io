import type { HashInfo } from '../../types';

let hashInfo: HashInfo | undefined;

export const getHashInfo = (): HashInfo => {
  if (!hashInfo) {
    hashInfo = HASH_INFO;
  }
  return hashInfo;
};
