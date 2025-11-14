import type { Config, Plugin } from 'stylelint';

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

export const defineStylelintConfig = (configs: Config[]): Config => {
  const finalBaseConfig: Config = {};
  const finalPlugins: (Plugin | string)[] = [];
  const finalExtends: string[] = [];
  const finalIgnoreFiles: string[] = [];
  const finalRules: Config['rules'] = {};
  const finalLanguageOptions: Config['languageOptions'] = {};
  const finalOverrides: Config['overrides'] = [];

  // use set to deduplicate
  const pluginSet = new Set<Plugin | string>();
  const extendsSet = new Set<string>();
  const ignoreFilesSet = new Set<string>();

  for (const config of configs) {
    Object.assign(finalBaseConfig, config);

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

    const languageOptions = config.languageOptions;
    if (languageOptions) {
      Object.assign(finalLanguageOptions, languageOptions);
    }

    const overrides = config.overrides;
    if (overrides) {
      finalOverrides.push(...overrides);
    }
  }

  return {
    ...finalBaseConfig,
    plugins: finalPlugins,
    extends: finalExtends,
    rules: finalRules,
    ignoreFiles: finalIgnoreFiles,
    languageOptions: finalLanguageOptions,
    overrides: finalOverrides,
  };
};
