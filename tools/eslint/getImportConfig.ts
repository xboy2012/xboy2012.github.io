import type { ConfigWithExtendsArray } from '@eslint/config-helpers';
import eslintPluginImport from 'eslint-plugin-import';
import globals from 'globals';

export const getImportConfig = (): ConfigWithExtendsArray => {
  return [
    eslintPluginImport.flatConfigs.recommended,
    eslintPluginImport.flatConfigs.typescript,
    {
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.mts', '.cts', '.tsx', '.d.ts'],
        },
        'import/resolver': {
          'eslint-import-resolver-node': {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
          'eslint-import-resolver-typescript': {
            alwaysTryTypes: true,
          },
        },
      },
      languageOptions: {
        globals: {
          ...globals.node,
          ...globals.browser,
        },
      },
    },
    {
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: false,
            optionalDependencies: false,
            peerDependencies: false,
            bundledDependencies: false,
          },
        ],
      },
    },
    {
      files: [
        '**/*.test.{ts,tsx,js,jsx}',
        'scripts/**',
        'tools/**',
        'eslint.config.mts',
        'jest.config.ts',
        'jest.setup.ts',
        'next.config.ts',
        'postcss.config.mts',
        'postcss.config.mjs',
        'prettier.config.mts',
        'stylelint.config.mjs',
        'stylelint.config.mts',
      ],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
            optionalDependencies: true,
            peerDependencies: true,
            bundledDependencies: true,
          },
        ],
      },
    },
  ];
};
