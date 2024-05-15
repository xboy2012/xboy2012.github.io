module.exports = {
  plugins: ['prettier', 'import', 'unicorn'],
  extends: [
    'next/core-web-vitals',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'react/display-name': 'off',
    'prettier/prettier': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'import/first': 'error',
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
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  root: true,
};
