import { join } from 'node:path';
import { readFile, writeFile } from 'node:fs/promises';
import { writeFileIfChange } from './writeFileIfChange';
import { createTemporaryDir } from './createTemporaryDir';

jest.mock('node:fs/promises', () => {
  const actual = jest.requireActual('node:fs/promises');
  return {
    ...actual,
    writeFile: jest.fn(actual.writeFile),
  };
});

describe('writeFileIfChange', () => {
  const { setup, dispose, dir } = createTemporaryDir();
  beforeAll(setup);
  afterAll(dispose);

  it('write File if not exist', async () => {
    const fileName = 'non-exist.txt';
    const fileContent = 'non-exist';
    const filePath = join(dir, fileName);

    jest.mocked(writeFile).mockClear();
    await writeFileIfChange(filePath, fileContent);

    expect(writeFile).toHaveBeenCalled();
    const resultContent = await readFile(filePath, 'utf8');
    expect(resultContent).toBe(fileContent);
  });
});
