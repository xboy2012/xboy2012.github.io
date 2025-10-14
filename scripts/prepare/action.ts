import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const fileContent = `// THIS FILE IS AUTO-GENERATED, DO NOT MODIFY
// TODO: This file is a workaround until Next.js finally support postcss.config.mts natively.

import { createJiti } from 'jiti';

const jiti = createJiti(import.meta.url);
export default jiti('./postcss.config.mts').default;
`;

const isNodeError = (err: unknown): err is NodeJS.ErrnoException => {
  return !!err && err instanceof Error;
};

export const action = async (rootDir: string): Promise<void> => {
  const filePath = join(rootDir, 'postcss.config.mjs');

  let oldContent = '';

  try {
    oldContent = await readFile(filePath, 'utf-8');
  } catch (err) {
    if (!isNodeError(err) || err.code !== 'ENOENT') {
      throw err;
    }
  }

  if (oldContent !== fileContent) {
    await writeFile(filePath, fileContent, 'utf-8');
  }
};
