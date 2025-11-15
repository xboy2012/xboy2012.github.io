import type { ConfigWithExtendsArray } from '@eslint/config-helpers';
import js from '@eslint/js';

export const getBaseConfig = (): ConfigWithExtendsArray => {
  return [
    js.configs.recommended,
    {
      ignores: ['node_modules', 'temp'],
    },
  ];
};
