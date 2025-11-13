import type { ConfigWithExtendsArray } from '@eslint/config-helpers';
import eslintPluginJest from 'eslint-plugin-jest';

export const getJestConfig = (): ConfigWithExtendsArray => {
  return [
    eslintPluginJest.configs['flat/recommended'],
    eslintPluginJest.configs['flat/style'],
    {
      files: ['**/*.test.{ts,tsx}'],
      rules: {
        'jest/consistent-test-it': 'error',
        'jest/max-expects': 'error',
        'jest/max-nested-describe': ['error', { max: 3 }],
        'jest/no-conditional-in-test': 'error',
        'jest/no-confusing-set-timeout': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-test-return-statement': 'error',
        // 'jest/prefer-called-with': 'error',
        'jest/prefer-comparison-matcher': 'error',
        'jest/prefer-equality-matcher': 'error',
        'jest/prefer-jest-mocked': 'error',
        'jest/require-top-level-describe': 'error',
      },
    },
    {
      // ignore the test coverage folder
      ignores: ['coverage'],
    },
  ];
};
