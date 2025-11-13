import type { ConfigObject } from '@eslint/core';
import eslintPluginBetterTailwindCss from 'eslint-plugin-better-tailwindcss';
import { join } from 'node:path';
import { getRootDir } from '../../src/utils/getRootDir';

export const getTailwindCssConfig = (): ConfigObject[] => {
  return [
    {
      plugins: {
        'better-tailwindcss': eslintPluginBetterTailwindCss,
      },
      rules: {
        ...eslintPluginBetterTailwindCss.configs['recommended-error'].rules,
        'better-tailwindcss/enforce-consistent-class-order': 'error',
        'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
      },
      settings: {
        'better-tailwindcss': {
          entryPoint: join(getRootDir(), 'app', 'globals.css'),
        },
      },
    },
    {
      files: ['**/*.test.{ts,tsx}'],
      rules: {
        'better-tailwindcss/no-unregistered-classes': 'off',
      },
    },
  ];
};
