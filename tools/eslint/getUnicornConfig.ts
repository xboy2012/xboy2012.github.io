import type { ConfigWithExtendsArray } from '@eslint/config-helpers';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export const getUnicornConfig = (): ConfigWithExtendsArray => {
  return [
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
  ];
};
