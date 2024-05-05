import { access, constants } from 'node:fs/promises';
import { join as pathJoin } from 'node:path';
import { blogs } from './blogs';

describe('blogs data should follow some conventions', () => {
  const rootDir = process.cwd();

  for (const blog of blogs) {
    if (!blog.link) {
      const blogId = blog.id;
      test(`[${blogId}] should have a matched mdx file`, async () => {
        const filePath = pathJoin(rootDir, 'src', 'blogs', `${blogId}.mdx`);
        await access(filePath, constants.R_OK);
      });
    }
  }

  for (const blog of blogs) {
    const blogId = blog.id;
    const image = blog.image;
    test(`[${blogId}] should have a valid image`, async () => {
      expect(image.startsWith('/')).toBe(true);
      const filePath = pathJoin(
        rootDir,
        'public',
        ...image.substring(1).split('/'),
      );
      await access(filePath, constants.R_OK);
    });
  }
});
