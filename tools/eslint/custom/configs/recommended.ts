import type { Linter } from 'eslint';
import { recordWithPrefix } from '../../../../src/utils/recordWithPrefix';
import { plugin, pluginName } from '../plugin';

const rules = {
  'no-enum': 'error',
} satisfies Linter.RulesRecord;

const prefixedRules = recordWithPrefix(rules, pluginName);

export const recommended: Linter.Config = {
  files: ['**/*.{ts,tsx,mts,cts}'],
  plugins: {
    [pluginName]: plugin,
  },
  rules: prefixedRules,
};
