import type { PathString } from '../../types';
import { getHashInfo } from './getHashInfo';

let publicAssets: Set<PathString> | undefined;

export const getPublicAssets = (): Set<PathString> => {
  if (!publicAssets) {
    const [, assetHashes] = getHashInfo();
    publicAssets = new Set(assetHashes.map(([assetPath]) => assetPath));
  }
  return publicAssets;
};
