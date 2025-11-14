import type { ConfigWithExtendsArray } from '@eslint/config-helpers';
import eslintPluginBetterTailwindCss from 'eslint-plugin-better-tailwindcss';
import { join } from 'node:path';
import { getRootDir } from '../../src/utils/getRootDir';

const getCssEntry = () => join(getRootDir(), 'app', 'globals.css');

export const getTailwindCssConfig = (): ConfigWithExtendsArray => {
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
          entryPoint: getCssEntry(),
        },
      },
    },
  ];
};
