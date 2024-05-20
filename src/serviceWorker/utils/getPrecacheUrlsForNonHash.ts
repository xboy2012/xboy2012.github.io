import { getHashInfo } from './getHashInfo';
import { selfOrigin } from './consts';

export const getPrecacheUrlsForNonHash = (): string[] => {
  const [pageHashes, assetsHashes] = getHashInfo();

  const assetUrls = assetsHashes.map(([assetPath, assetHash]) => {
    return `${selfOrigin}${assetPath}?_=${assetHash}`;
  });

  const indexHtmlUrls = pageHashes.map(([pagePath, indexHtmlHash]) => {
    return `${selfOrigin}${pagePath}?_=${indexHtmlHash}`;
  });

  const indexTxtUrls = pageHashes.map(([pagePath, , indexTxtHash]) => {
    return `${selfOrigin}${pagePath}index.txt?_=${indexTxtHash}`;
  });

  return assetUrls.concat(indexHtmlUrls, indexTxtUrls);
};
