// eslint.config.js
import { FlatCompat } from '@eslint/eslintrc';
import legacyConfig from './.eslintrc.cjs';

const compat = new FlatCompat({
  baseDirectory: process.cwd(), // 设置为你的项目根目录
});

const config = [
  {
    ignores: ['.next', '.swc', 'coverage', 'node_modules', 'out'],
  },
  ...compat.config(legacyConfig),
  {
    rules: {
      // FIXME: eslint 9 incompatible
      'import/namespace': 'off',
      'import/default': 'off',
    },
  },
];

export default config;
