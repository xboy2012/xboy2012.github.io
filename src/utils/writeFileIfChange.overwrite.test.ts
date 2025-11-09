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

  test('overwrite existing file', async () => {
    const fileName = 'existing.txt';
    const oldContent = 'existing';
    const fileContent = 'new';
    const filePath = join(dir, fileName);
    await writeFile(filePath, oldContent, 'utf8');

    jest.mocked(writeFile).mockClear();
    await writeFileIfChange(filePath, fileContent);

    expect(writeFile).toHaveBeenCalled();
    const resultContent = await readFile(filePath, 'utf8');
    expect(resultContent).toBe(fileContent);
  });
});
