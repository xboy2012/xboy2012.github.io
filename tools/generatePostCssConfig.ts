import { join } from 'node:path';
import { getRootDir } from '../src/utils/getRootDir';
import { writeFileIfChange } from '../src/utils/writeFileIfChange';

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

export const generatePostCssConfig = async (): Promise<void> => {
  const rootDir = getRootDir();
  const filePath = join(rootDir, 'postcss.config.mjs');
  await writeFileIfChange(filePath, fileContent);
  console.log('Generated postcss.config.mjs');
};
