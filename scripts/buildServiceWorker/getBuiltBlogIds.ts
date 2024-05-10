import { readdir } from 'node:fs/promises';
import { join as pathJoin } from 'node:path';
import { pathExists } from '../utils/pathExists';

const caches = new Map<string, Promise<string[]>>();

const _getBuiltBlogIds = async (rootDir: string): Promise<string[]> => {
  const blogsDir = pathJoin(rootDir, 'out', 'blog');

  const entries = await readdir(blogsDir, { withFileTypes: true });

  const promises = entries
    .filter((o) => o.isDirectory())
    .map(async (o) => {
      const blogId = o.name;
      if (!blogId) {
        return null;
      }
      const [indexHtmlExists, indexTxtExists] = await Promise.all([
        pathExists(pathJoin(blogsDir, blogId, 'index.html')),
        pathExists(pathJoin(blogsDir, blogId, 'index.txt')),
      ]);
      if (!indexHtmlExists || !indexTxtExists) {
        return null;
      }

      return blogId;
    });

  const results = await Promise.all(promises);

  return results.filter(Boolean) as string[];
};

export const getBuiltBlogIds = (rootDir: string): Promise<string[]> => {
  let promise = caches.get(rootDir);
  if (!promise) {
    promise = _getBuiltBlogIds(rootDir);
    caches.set(rootDir, promise);
  }
  return promise;
};
