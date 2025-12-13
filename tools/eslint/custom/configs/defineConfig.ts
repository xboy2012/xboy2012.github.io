import type { Linter } from 'eslint';
import { plugin, pluginName } from '../plugin';
import { recordWithPrefix } from '../../../../src/utils/recordWithPrefix';

export const defineConfig = (configs: Linter.Config[]): Linter.Config[] => {
  return [
    {
      plugins: {
        [pluginName]: plugin,
      },
    },
    ...configs.map((config) => {
      const { rules } = config;
      if (!rules) {
        return config;
      }
      return {
        ...config,
        rules: recordWithPrefix(rules, pluginName),
      };
    }),
  ];
};
