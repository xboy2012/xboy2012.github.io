import { readFile, writeFile } from 'node:fs/promises';
import { isErrnoException } from './isErrnoException';

export const writeFileIfChange = async (
  filePath: string,
  fileContent: string,
) => {
  let oldContent = '';

  try {
    oldContent = await readFile(filePath, 'utf8');
  } catch (error) {
    if (!isErrnoException(error) || error.code !== 'ENOENT') {
      throw error;
    }
  }

  if (oldContent !== fileContent) {
    await writeFile(filePath, fileContent, 'utf8');
  }
};
