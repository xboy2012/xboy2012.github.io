import type { Config } from 'postcss-load-config';

const config: Config = {
  plugins: {
    '@tailwindcss/postcss': {},
    'postcss-calc': {},
  },
};
export default config;
