import type { Config } from 'stylelint';

export const getTailwindCssConfig = (): Config => {
  return {
    rules: {
      'import-notation': null,
      'at-rule-no-unknown': [
        true,
        {
          ignoreAtRules: [
            'theme',
            'source',
            'utility',
            'variant',
            'custom-variant',
            'plugin',
          ],
        },
      ],
      'function-no-unknown': [
        true,
        {
          ignoreFunctions: ['theme'],
        },
      ],

      'custom-property-pattern': null,
    },
  };
};
