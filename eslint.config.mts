import { FlatCompat } from '@eslint/eslintrc';
import type { Linter } from 'eslint';
import legacyConfig from './.eslintrc.cjs';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname, // project root directory
});

const config = [
  {
    ignores: ['.next', '.swc', 'coverage', 'node_modules', 'out'],
  },
  ...compat.config(legacyConfig as Linter.LegacyConfig),
];

export default config;
