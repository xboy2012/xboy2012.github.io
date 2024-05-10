import { getNonHashedPaths } from './getNonHashedPaths';

let urls: string[] | undefined;

export const getNonHashedUrlsToPreCache = () => {
  if (!urls) {
    urls = getNonHashedPaths().map(([path, hash]) => {
      return `${self.location.origin}${path}?_=${hash}`;
    });
  }
  return urls;
};
