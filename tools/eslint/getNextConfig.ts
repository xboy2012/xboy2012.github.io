import type { ConfigWithExtendsArray } from '@eslint/config-helpers';
import eslintPluginNext from '@next/eslint-plugin-next';

export const getNextConfig = (): ConfigWithExtendsArray => {
  return [
    eslintPluginNext.configs.recommended,
    eslintPluginNext.configs['core-web-vitals'],
    {
      ignores: ['next-env.d.ts', '.next', '.swc', 'out'],
    },
  ];
};
