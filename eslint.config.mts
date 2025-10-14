import type { Plugin, RulesConfig } from '@eslint/core';
import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  js.configs.recommended,
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReact.configs.flat['jsx-runtime'],
  {
    plugins: {
      'react-hooks': eslintPluginReactHooks,
      'rules': {
        ...eslintPluginReactHooks.configs.recommended.rules,
      },
    },
  },
  {
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      'unicorn/prefer-node-protocol': 'error',
    },
  },
  {
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      'react/display-name': 'off',
      'react/prop-types': 'off',
    },
  },
  {
    ...importPlugin.flatConfigs.recommended,
    ...importPlugin.flatConfigs.typescript,
    settings: {
      'react': {
        version: 'detect',
      },
      'import/parsers': {
        [require.resolve('@typescript-eslint/parser')]: [
          '.ts',
          '.mts',
          '.cts',
          '.tsx',
          '.d.ts',
        ],
      },
      'import/resolver': {
        [require.resolve('eslint-import-resolver-node')]: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        [require.resolve('eslint-import-resolver-typescript')]: {
          alwaysTryTypes: true,
        },
      },
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
  {
    plugins: {
      '@next/next': nextPlugin as Plugin,
    },
    rules: {
      ...(nextPlugin.configs.recommended.rules as RulesConfig),
      ...(nextPlugin.configs['core-web-vitals'].rules as RulesConfig),
    },
  },
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  tseslint.configs.recommended,
  {
    files: ['*.{ts,tsx,mts,cts}'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
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
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
  {
    ignores: ['.next', '.swc', 'coverage', 'node_modules', 'out'],
  },
]);
