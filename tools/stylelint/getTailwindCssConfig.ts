import type { PartialStyleLintConfig } from './types';

export const getTailwindCssConfig = (): PartialStyleLintConfig => {
  return {
    // tailwind
    rules: {
      // tailwind rules
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
