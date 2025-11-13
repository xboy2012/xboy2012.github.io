import type { ConfigWithExtendsArray } from '@eslint/config-helpers';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';

export const getReactConfig = (): ConfigWithExtendsArray => {
  return [
    eslintPluginReact.configs.flat.recommended,
    eslintPluginReact.configs.flat['jsx-runtime'],
    eslintPluginReactHooks.configs.flat.recommended,
    {
      rules: {
        'react/display-name': 'off',
        'react/prop-types': 'off',
      },
    },
    {
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ];
};
