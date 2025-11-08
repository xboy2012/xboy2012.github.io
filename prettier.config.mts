import type { Config } from 'prettier';

const config: Config = {
  semi: true,
  singleQuote: true,
  quoteProps: 'consistent',
  useTabs: false,
  tabWidth: 2,

  overrides: [
    {
      files: ['**/*.css'],
      options: {
        singleQuote: false,
      },
    },
  ],
};

export default config;
