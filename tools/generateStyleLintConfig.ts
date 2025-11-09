import { join } from 'node:path';
import { getRootDir } from '../src/utils/getRootDir';
import { writeFileIfChange } from '../src/utils/writeFileIfChange';

const fileContent = `// THIS FILE IS AUTO-GENERATED, DO NOT MODIFY
// TODO: This file is a workaround until StyleLint finally support stylelint.config.mts natively.

import { createJiti } from 'jiti';

const jiti = createJiti(import.meta.url);
export default jiti('./stylelint.config.mts').default;
`;

export const generateStylelintConfig = async (): Promise<void> => {
  const rootDir = getRootDir();
  const filePath = join(rootDir, 'stylelint.config.mjs');
  await writeFileIfChange(filePath, fileContent);
  console.log('Generated stylelint.config.mjs');
};
