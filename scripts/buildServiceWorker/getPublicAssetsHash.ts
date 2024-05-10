import { join as pathJoin } from 'node:path';
import { getFileMD5 } from '../utils/getFileMD5';
import type { PathString } from '../../src/types';
import { getBuiltBlogIds } from './getBuiltBlogIds';

export const getPublicAssetsHash = async (
  rootDir: string,
): Promise<[PathString, string][]> => {
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
    ...(await getBuiltBlogIds(rootDir)).flatMap((blogId): PathString[] => [
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
