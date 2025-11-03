import { defineConfig } from '@eslint/config-helpers';
import type { Plugin, RulesConfig } from '@eslint/core';
import js from '@eslint/js';
import eslintPluginNext from '@next/eslint-plugin-next';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import { configs as typeScriptEslintConfigs } from 'typescript-eslint';

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

  // prefer-node-protocol
  {
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      'unicorn/prefer-node-protocol': 'error',
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
      'eslint.config.mts',
      'jest.config.ts',
      'jest.setup.ts',
      'next.config.ts',
      'postcss.config.mts',
      'postcss.config.mjs',
      'prettier.config.mts',
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
  {
    files: ['next-env.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
  {
    ignores: ['.next', '.swc', 'coverage', 'node_modules', 'out'],
  },
]);
