import type { Linter } from 'eslint';
import { defineConfig } from './defineConfig';

export const recommended: Linter.Config[] = defineConfig([
  {
    rules: {
      'no-class': 'error',
      'no-decorator': 'error',
      'no-use-private-module': 'error',
    },
  },
  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    rules: {
      'no-enum': 'error',
    },
  },
]);
