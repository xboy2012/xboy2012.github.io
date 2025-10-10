// @ts-check

/** @type {import('eslint').Linter.LegacyConfig} */
const config = {
  plugins: ['prettier', 'unicorn'],
  extends: [
    'next/core-web-vitals',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'react/display-name': 'off',
    'prettier/prettier': 'error',
    'unicorn/prefer-node-protocol': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      rules: {
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            disallowTypeAnnotations: false,
            prefer: 'type-imports',
          },
        ],
      },
    },
    {
      // prevent eslint error as it's auto-generated
      files: ['next-env.d.ts'],
      rules: {
        '@typescript-eslint/triple-slash-reference': 'off',
      },
    },
  ],
  ignorePatterns: ['.next', '.swc', 'coverage', 'node_modules', 'out'],
  root: true,
};

module.exports = config;
