import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const fileContent = `// THIS FILE IS AUTO-GENERATED, DO NOT MODIFY
// TODO: This file is a workaround until StyleLint finally support stylelint.config.mts natively.

import { createJiti } from 'jiti';

const jiti = createJiti(import.meta.url);
export default jiti('./stylelint.config.mts').default;
`;

const isNodeError = (error: unknown): error is NodeJS.ErrnoException => {
  return !!error && error instanceof Error;
};

export const generateStylelintConfig = async (
  rootDir: string,
): Promise<void> => {
  const filePath = join(rootDir, 'stylelint.config.mjs');

  let oldContent = '';

  try {
    oldContent = await readFile(filePath, 'utf8');
  } catch (error) {
    if (!isNodeError(error) || error.code !== 'ENOENT') {
      throw error;
    }
  }

  if (oldContent !== fileContent) {
    await writeFile(filePath, fileContent, 'utf8');
  }
  console.log('Generated stylelint.config.mjs');
};
