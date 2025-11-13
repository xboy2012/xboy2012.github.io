import type { ConfigWithExtendsArray } from '@eslint/config-helpers';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export const getPrettierConfig = (): ConfigWithExtendsArray => {
  return [eslintPluginPrettierRecommended];
};
