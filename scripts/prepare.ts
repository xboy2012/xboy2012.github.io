import { generatePostCssConfig } from '../tools/generatePostCssConfig';
import { generateStylelintConfig } from '../tools/generateStyleLintConfig';
import { execAsync } from '../tools/execAsync';

// entry: prepare
const main = async () => {
  await Promise.all([
    execAsync('next typegen'),
    generatePostCssConfig(),
    generateStylelintConfig(),
  ]);
};

main();
