import { defineStylelintConfig } from './tools/stylelint/defineStylelintConfig';
import { getBaseConfig } from './tools/stylelint/getBaseConfig';
import { getStylisticConfig } from './tools/stylelint/getStylisticConfig';
import { getTailwindCssConfig } from './tools/stylelint/getTailwindCssConfig';

export default defineStylelintConfig([
  getBaseConfig(),
  getStylisticConfig(),
  getTailwindCssConfig(),
]);
