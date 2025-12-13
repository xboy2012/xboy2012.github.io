import { defineConfig } from '@eslint/config-helpers';
import { getBaseConfig } from './tools/eslint/getBaseConfig';
import { getImportConfig } from './tools/eslint/getImportConfig';
import { getJestConfig } from './tools/eslint/getJestConfig';
import { getNextConfig } from './tools/eslint/getNextConfig';
import { getPrettierConfig } from './tools/eslint/getPrettierConfig';
import { getReactConfig } from './tools/eslint/getReactConfig';
import { getTailwindCssConfig } from './tools/eslint/getTailwindCssConfig';
import { getTypeScriptConfig } from './tools/eslint/getTypeScriptConfig';
import { getUnicornConfig } from './tools/eslint/getUnicornConfig';
import { getCustomConfig } from './tools/eslint/getCustomConfig';

export default defineConfig([
  getBaseConfig(),
  getReactConfig(),
  getUnicornConfig(),
  getImportConfig(),
  getNextConfig(),
  getPrettierConfig(),
  getTypeScriptConfig(),
  getTailwindCssConfig(),
  getJestConfig(),
  getCustomConfig(),
]);
