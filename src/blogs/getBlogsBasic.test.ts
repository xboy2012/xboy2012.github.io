import { join as pathJoin } from 'node:path';
import { getBlogsBasic } from './getBlogsBasic';
import { getRootDir } from '../utils/getRootDir';
import { pathExists } from '../utils/pathExists';
import { collectDuplicateValues } from '../utils/collectDuplicateValues';

describe('blogs data should follow some conventions', () => {
  const rootDir = getRootDir();

  it('blogs should have distinct ids', () => {
    const duplicatedIds = collectDuplicateValues(
      getBlogsBasic().map((blog) => blog.id),
    );
    expect(duplicatedIds).toHaveLength(0);
  });

  for (const blog of getBlogsBasic()) {
    if (!blog.link) {
      const blogId = blog.id;
      it(`[${blogId}] should have a matched mdx file`, async () => {
        const filePath = pathJoin(
          rootDir,
          'src',
          'blogs',
          'mdx',
          `${blogId}.mdx`,
        );
        const exists = await pathExists(filePath);
        expect(exists).toBe(true);
      });
    }
  }
});
