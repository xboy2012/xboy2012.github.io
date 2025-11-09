import { join } from 'node:path';
import { readFile, writeFile } from 'node:fs/promises';
import { writeFileIfChange } from './writeFileIfChange';
import { createTemporaryDir } from './createTemporaryDir';

jest.mock('node:fs/promises', () => {
  const actual = jest.requireActual('node:fs/promises');
  return {
    ...actual,
    readFile: jest.fn(actual.readFile),
    writeFile: jest.fn(actual.writeFile),
  };
});

describe('writeFileIfChange', () => {
  const { setup, dispose, dir } = createTemporaryDir();
  beforeAll(setup);
  afterAll(dispose);

  test('should throw unexpected error', async () => {
    const fileName = 'file.txt';
    const fileContent = 'file';
    const filePath = join(dir, fileName);
    await writeFile(filePath, fileContent, 'utf8');

    jest.mocked(writeFile).mockClear();
    jest.mocked(readFile).mockImplementation(async () => {
      throw new Error('Mock Error');
    });

    await expect(writeFileIfChange(filePath, fileContent)).rejects.toThrow(
      new Error('Mock Error'),
    );
  });
});
