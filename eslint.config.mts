import { defineConfig } from '@eslint/config-helpers';
import type { Plugin, RulesConfig } from '@eslint/core';
import js from '@eslint/js';
import eslintPluginNext from '@next/eslint-plugin-next';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginJest from 'eslint-plugin-jest';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import { configs as typeScriptEslintConfigs } from 'typescript-eslint';
import { getTailwindCssConfig } from './tools/eslint/getTailwindCssConfig';

export default defineConfig([
  js.configs.recommended,

  // react configs
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReact.configs.flat['jsx-runtime'],
  {
    rules: {
      'react/display-name': 'off',
      'react/prop-types': 'off',
    },
  },
  eslintPluginReactHooks.configs.flat.recommended,

  eslintPluginUnicorn.configs.recommended,
  {
    rules: {
      'unicorn/filename-case': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          replacements: {
            arg: false,
            args: false,
            cur: false,
            dev: false,
            dir: false,
            dirs: false,
            env: false,
            fn: false,
            i: false,
            obj: false,
            props: false,
            req: false,
            res: false,
            src: false,
            str: false,
            param: false,
            params: false,
            pkg: false,
          },
        },
      ],
      'unicorn/prefer-number-properties': 'off',
      'unicorn/no-useless-undefined': ['error', { checkArguments: false }],
      'unicorn/import-style': [
        'error',
        {
          extendDefaultStyles: false,
          styles: {
            // internal modules
            crypto: { named: true },
            path: { named: true },
            fs: { named: true },
            readline: { named: true },
            url: { named: true },

            // node modules
            react: { named: true },
          },
        },
      ],
      'unicorn/prefer-string-slice': 'off',
      'unicorn/no-array-sort': 'off',
      'unicorn/prefer-global-this': 'off',
      'unicorn/explicit-length-check': 'off',
      'unicorn/numeric-separators-style': 'off',
      'unicorn/switch-case-braces': 'off',
      'unicorn/prefer-string-replace-all': 'off',
      'unicorn/prefer-dom-node-append': 'off',
    },
  },
  {
    files: ['**/*.test.{ts,tsx,js,jsx}'],
    rules: {
      // some functions are put in smaller scope for better readability
      'unicorn/consistent-function-scoping': 'off',
    },
  },

  // import configs
  eslintPluginImport.flatConfigs.recommended,
  eslintPluginImport.flatConfigs.typescript,
  {
    settings: {
      'react': {
        version: 'detect',
      },
      'import/parsers': {
        ['@typescript-eslint/parser']: ['.ts', '.mts', '.cts', '.tsx', '.d.ts'],
      },
      'import/resolver': {
        ['eslint-import-resolver-node']: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        ['eslint-import-resolver-typescript']: {
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

  // next.js configs
  {
    plugins: {
      '@next/next': eslintPluginNext as Plugin,
    },
    rules: {
      ...(eslintPluginNext.configs.recommended.rules as RulesConfig),
      ...(eslintPluginNext.configs['core-web-vitals'].rules as RulesConfig),
    },
  },

  // prettier configs
  eslintPluginPrettierRecommended,

  // typescript-eslint configs
  typeScriptEslintConfigs.recommended,
  {
    files: ['**/*.{ts,tsx,mts,cts}'],
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
  getTailwindCssConfig(),
  {
    files: ['**/*.test.{ts,tsx}'],
    extends: [
      eslintPluginJest.configs['flat/recommended'],
      eslintPluginJest.configs['flat/style'],
    ],
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
    ignores: [
      'next-env.d.ts',
      '.next',
      '.swc',
      'coverage',
      'node_modules',
      'out',
    ],
  },
]);
