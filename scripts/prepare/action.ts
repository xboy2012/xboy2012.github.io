import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const fileContent = `// THIS FILE IS AUTO-GENERATED, DO NOT MODIFY
// TODO: This file is a workaround until Next.js finally support postcss.config.mts natively.

import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createJiti } from 'jiti';

const resolve = (targetFile) => {
  // During 'next build' only import.meta.url has value
  let dir = dirname(fileURLToPath(import.meta.url));
  while (true) {
    const path = join(dir, targetFile);
    if (existsSync(path)) {
      return path;
    }
    const newDir = dirname(dir);
    if (newDir === dir) {
      throw new Error(\`Cannot find $\{targetFile}\`);
    }
    dir = newDir;
  }
};

const jiti = createJiti();
export default jiti(resolve('postcss.config.mts')).default;
`;

const isNodeError = (error: unknown): error is NodeJS.ErrnoException => {
  return !!error && error instanceof Error;
};

export const action = async (rootDir: string): Promise<void> => {
  const filePath = join(rootDir, 'postcss.config.mjs');

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
};
