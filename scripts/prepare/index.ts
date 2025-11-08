import { getRootDir } from '../../src/utils/getRootDir';
import { generatePostCssConfig } from './generatePostCssConfig';
import { generateStylelintConfig } from './generateStyleLintConfig';

// entry: prepare
const main = async () => {
  const rootDir = getRootDir();
  await Promise.all([
    generatePostCssConfig(rootDir),
    generateStylelintConfig(rootDir),
  ]);
};

main();
