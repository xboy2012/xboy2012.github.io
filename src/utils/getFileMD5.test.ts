import { join } from 'node:path';
import { writeFile } from 'node:fs/promises';
import { getFileMD5 } from './getFileMD5';
import { createTemporaryDir } from './createTemporaryDir';

describe('getFileMD5', () => {
  const { setup, dispose, dir } = createTemporaryDir();
  beforeAll(setup);
  afterAll(dispose);

  it('error', async () => {
    const path = join(dir, 'none-existing.txt');

    await expect(getFileMD5(path)).rejects.toThrow();
  });

  it('ok', async () => {
    const path = join(dir, 'ok.txt');
    await writeFile(path, '123456', 'utf8');
    const md5 = await getFileMD5(path);

    expect(md5).toBe('e10adc3949ba59abbe56e057f20f883e');
  });
});
