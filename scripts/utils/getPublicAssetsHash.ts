import { join as pathJoin } from 'node:path';
import { getFileMD5 } from './getFileMD5';
import type { PathString } from '../../src/types';
import { getPreBuiltBlogIdsForPath } from './getPreBuiltBlogIdsForPath';

export const getPublicAssetsHash = async (): Promise<
  [PathString, string][]
> => {
  const rootDir = process.cwd();

  const paths: PathString[] = [
    '/manifest.webmanifest',
    '/favicon.ico',
    '/',
    '/index.txt',
    '/resume/',
    '/resume/index.txt',
    '/portfolio/',
    '/portfolio/index.txt',
    '/blog/',
    '/blog/index.txt',
    ...(await getPreBuiltBlogIdsForPath()).flatMap((blogId): PathString[] => [
      `/blog/${blogId}/`,
      `/blog/${blogId}/index.txt`,
    ]),
  ];

  const promises = paths.map(async (path) => {
    const parts = path.split('/').slice(1);
    if (!parts[parts.length - 1]) {
      parts[parts.length - 1] = 'index.html';
    }
    const filePath = pathJoin(rootDir, 'out', ...parts);
    const md5 = await getFileMD5(filePath);
    return md5.substring(0, 8);
  });

  const hashes = await Promise.all(promises);

  return paths.map((path, index) => {
    return [path, hashes[index]];
  });
};
