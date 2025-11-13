import type { ConfigWithExtendsArray } from '@eslint/config-helpers';
import { configs } from 'typescript-eslint';

export const getTypeScriptConfig = (): ConfigWithExtendsArray => {
  return [
    configs.recommended,
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
  ];
};
