import { getNextStaticFiles } from './getNextStaticFiles';

let urls: string[] | undefined;

export const getNextStaticUrlsToPreCache = () => {
  if (!urls) {
    urls = getNextStaticFiles().map((file) => {
      return `${self.location.origin}/_next/static/${file}`;
    });
  }
  return urls;
};
