import type { PathString } from '../types';

let publicAssets: Set<PathString> | undefined;

export const getPublicAssets = (): Set<PathString> => {
  if (!publicAssets) {
    publicAssets = new Set(['/manifest.webmanifest', '/favicon.ico']);
  }
  return publicAssets;
};
