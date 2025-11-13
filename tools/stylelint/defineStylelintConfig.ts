import type { Config, Plugin } from 'stylelint';
import type { PartialStyleLintConfig } from './types';

const formatValue = <T>(value: T | T[] | undefined): T[] => {
  if (!value) {
    return [];
  }
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
};

const dedupeAdd = <T>(array: T[], values: T[], set: Set<T>) => {
  for (const item of values) {
    if (!set.has(item)) {
      set.add(item);
      array.push(item);
    }
  }
};

export const defineStylelintConfig = (
  configs: PartialStyleLintConfig[],
): Config => {
  const finalPlugins: (Plugin | string)[] = [];
  const finalExtends: string[] = [];
  const finalIgnoreFiles: string[] = [];
  const finalRules: Config['rules'] = {};

  // use set to deduplicate
  const pluginSet = new Set<Plugin | string>();
  const extendsSet = new Set<string>();
  const ignoreFilesSet = new Set<string>();

  for (const config of configs) {
    const plugins = formatValue(config.plugins);
    dedupeAdd(finalPlugins, plugins, pluginSet);

    const extendsValue = formatValue(config.extends);
    dedupeAdd(finalExtends, extendsValue, extendsSet);

    const ignoreFiles = formatValue(config.ignoreFiles);
    dedupeAdd(finalIgnoreFiles, ignoreFiles, ignoreFilesSet);

    const rules = config.rules;
    if (rules) {
      Object.assign(finalRules, rules);
    }
  }

  return {
    plugins: finalPlugins,
    extends: finalExtends,
    rules: finalRules,
    ignoreFiles: finalIgnoreFiles,
  };
};
