import { join } from 'node:path';
import { pathExists } from './pathExists';
import { createTemporaryDir } from './createTemporaryDir';

describe('pathExists', () => {
  const { setup, dispose, dir } = createTemporaryDir();

  beforeAll(setup);
  afterAll(dispose);

  test('existing path', async () => {
    const exists = await pathExists(dir);
    expect(exists).toBe(true);
  });

  test('non-existing path', async () => {
    const path = join(dir, 'non-existing');
    const exists = await pathExists(path);
    expect(exists).toBe(false);
  });
});
