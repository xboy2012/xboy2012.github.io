import type { PartialStyleLintConfig } from './types';

export const getStylisticConfig = (): PartialStyleLintConfig => {
  return {
    plugins: ['stylelint-prettier'],
    extends: ['@stylistic/stylelint-config', 'stylelint-prettier/recommended'],
    rules: {
      // rules conflict with prettier
      '@stylistic/declaration-colon-newline-after': null,
      '@stylistic/declaration-colon-space-after': null,
      '@stylistic/value-list-comma-newline-after': null,
    },
  };
};
