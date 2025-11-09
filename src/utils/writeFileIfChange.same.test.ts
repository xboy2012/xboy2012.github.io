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

  test('should not overwrite the same content', async () => {
    const fileName = 'same.txt';
    const fileContent = 'same';
    const filePath = join(dir, fileName);
    await writeFile(filePath, fileContent, 'utf8');

    jest.mocked(writeFile).mockClear();
    await writeFileIfChange(filePath, fileContent);
    expect(writeFile).not.toHaveBeenCalled();

    const resultContent = await readFile(filePath, 'utf8');
    expect(resultContent).toBe(fileContent);
  });
});
