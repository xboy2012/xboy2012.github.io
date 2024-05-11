import { access, constants } from 'node:fs/promises';
import { join as pathJoin } from 'node:path';
import { getBlogs } from './index';

describe('blogs data should follow some conventions', () => {
  const rootDir = process.cwd();

  test('blogs should have distinct ids', () => {
    const set = new Set<string>();
    const duplicatedIds: string[] = [];
    for (const blog of getBlogs()) {
      const blogId = blog.id;
      if (set.has(blogId)) {
        duplicatedIds.push(blogId);
      } else {
        set.add(blogId);
      }
    }
    expect(duplicatedIds).toHaveLength(0);
  });

  for (const blog of getBlogs()) {
    if (!blog.link) {
      const blogId = blog.id;
      test(`[${blogId}] should have a matched mdx file`, async () => {
        const filePath = pathJoin(
          rootDir,
          'src',
          'blogs',
          'mdx',
          `${blogId}.mdx`,
        );
        await access(filePath, constants.R_OK);
      });
    }
  }
});
