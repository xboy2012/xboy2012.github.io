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
});
