import { access, constants } from 'node:fs/promises';
import { join as pathJoin } from 'node:path';
import { projects } from './projects';

describe('projects data should follow some conventions', () => {
  const rootDir = process.cwd();

  for (const project of projects) {
    const projectId = project.id;
    const image = project.image;
    test(`[${projectId}] should have a valid image`, async () => {
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
