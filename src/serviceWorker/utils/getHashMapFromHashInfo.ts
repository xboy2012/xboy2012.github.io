import type { HashInfo, PathString } from '../../types';

export const getHashMapFromHashInfo = (
  hashInfo: HashInfo,
): Map<PathString, string> => {
  const [pageHashes, assetHashes] = hashInfo;
  const htmlHashes = pageHashes.map(([path, hash]) => {
    return [path, hash] as const;
  });
  const rscHashes = pageHashes.map(([path, , hash]) => {
    const rscPath = `${path}index.txt` as PathString;
    return [rscPath, hash] as const;
  });

  const result = htmlHashes.concat(rscHashes, assetHashes);
  return new Map(result);
};
