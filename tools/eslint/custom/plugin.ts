import type { ESLint } from 'eslint';
import { rules } from './rules';

export const pluginName = 'xboy2012';

export const plugin: ESLint.Plugin = {
  meta: {
    name: pluginName,
  },
  rules,
};
