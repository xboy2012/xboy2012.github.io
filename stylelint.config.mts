import type { Config } from 'stylelint';

const config: Config = {
  plugins: ['stylelint-prettier'],
  extends: [
    'stylelint-config-standard',
    '@stylistic/stylelint-config',
    'stylelint-prettier/recommended',
  ],
  rules: {
    // tailwind rules
    'import-notation': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'theme',
          'source',
          'utility',
          'variant',
          'custom-variant',
          'plugin',
        ],
      },
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme'],
      },
    ],

    // rules conflict with prettier
    '@stylistic/declaration-colon-newline-after': null,
    '@stylistic/declaration-colon-space-after': null,
    '@stylistic/value-list-comma-newline-after': null,

    'custom-property-pattern': null,
  },
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

export default config;
