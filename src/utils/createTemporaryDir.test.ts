import { existsSync } from 'node:fs';
import { createTemporaryDir } from './createTemporaryDir';

describe('createTemporaryDir', () => {
  test('should create and destroy correctly', async () => {
    const { setup, dispose, dir } = createTemporaryDir();
    await setup();
    expect(existsSync(dir)).toBe(true);
    await dispose();
    expect(existsSync(dir)).toBe(false);
  });
  test('created directories should be different', () => {
    const count = 100;
    const dirs = Array.from({ length: count })
      .fill(0)
      .map(() => createTemporaryDir().dir);
    const set = new Set(dirs);
    expect(set.size).toBe(count);
  });
});
