import type { PartialStyleLintConfig } from './types';

export const getBaseConfig = (): PartialStyleLintConfig => {
  return {
    extends: ['stylelint-config-standard'],
    ignoreFiles: [
      '**/.idea/**',
      '**/node_modules/**',
      '.next/**',
      'out/**',
      'coverage/**',
      '.swc/**',
      '.rollup.cache/**',
    ],
  };
};
