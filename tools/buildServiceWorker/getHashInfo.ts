import { join as pathJoin } from 'node:path';
import { getStaticPagePaths } from './getStaticPagePaths';
import { getFileMD5 } from '../../src/utils/getFileMD5';
import type {
  HashInfo,
  PageHashInfo,
  AssetHashInfo,
  PathString,
} from '../../src/types';

export const getHashInfo = async (rootDir: string): Promise<HashInfo> => {
  const outDir = pathJoin(rootDir, 'out');

  const getPageHashInfo = async (): Promise<PageHashInfo[]> => {
    const staticPagePaths = await getStaticPagePaths(rootDir);
    const promises = staticPagePaths.map(
      async (pagePath): Promise<PageHashInfo> => {
        // trim prefixing and trailing slash
        const path = pagePath.substring(1, pagePath.length - 1);
        const parts = path.length ? path.split('/') : [];
        const indexHtmlPath = pathJoin(outDir, ...parts, 'index.html');
        const indexTxtPath = pathJoin(outDir, ...parts, 'index.txt');
        const [indexHtmlMD5, indexTxtMD5] = await Promise.all([
          getFileMD5(indexHtmlPath),
          getFileMD5(indexTxtPath),
        ]);
        return [
          pagePath,
          indexHtmlMD5.substring(0, 8),
          indexTxtMD5.substring(0, 8),
        ];
      },
    );
    return Promise.all(promises);
  };

  const getStaticAssetsHash = async (): Promise<AssetHashInfo[]> => {
    const assetPaths: PathString[] = ['/manifest.webmanifest', '/favicon.ico'];

    const promises = assetPaths.map(
      async (assetPath): Promise<AssetHashInfo> => {
        // trim prefixing and trailing slash
        const path = assetPath.substring(1);
        const parts = path.length ? path.split('/') : [];
        const filePath = pathJoin(outDir, ...parts);
        const md5 = await getFileMD5(filePath);
        return [assetPath, md5.substring(0, 8)];
      },
    );

    return Promise.all(promises);
  };

  return Promise.all([getPageHashInfo(), getStaticAssetsHash()]);
};
