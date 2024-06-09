module.exports = {
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
    'import/first': 'error',

    // FIXME: eslint 9 incompatible
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    '@next/next/no-duplicate-head': 'off',
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
  ],
  ignorePatterns: ['.next', '.swc', 'coverage', 'node_modules', 'out'],
  root: true,
};
