import type { Config } from 'stylelint';

export const getBaseConfig = (): Config => {
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
      'temp/**',
    ],

    defaultSeverity: 'error',
    reportDescriptionlessDisables: true,
    reportInvalidScopeDisables: true,
    reportNeedlessDisables: true,
    reportUnscopedDisables: true,

    allowEmptyInput: true,
    // For now stylelint only cost less than 1 second, no need to enable caching yet.
    // May consider that when it takes longer.
    cache: false,
    // Disable the validation of the rules' options, which would make CI faster
    validate: process.env.GITHUB_ACTIONS !== 'true',
  };
};
