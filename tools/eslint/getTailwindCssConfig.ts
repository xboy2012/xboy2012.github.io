import type { ConfigObject, RuleConfig, RulesConfig } from '@eslint/core';
import eslintPluginTailwindCss from 'eslint-plugin-tailwindcss';

const defaultTailwindRuleOptions = {
  callees: ['cx'],
  // FIXME: eslint-plugin-tailwindcss doesn't implement the config load logic correctly for tailwindcss v4 yet.
  // this is just a workaround currently
  config: {},
} as const;

const patchRuleConfig = (config: RuleConfig): RuleConfig => {
  switch (typeof config) {
    case 'string':
    case 'number':
      return [config, defaultTailwindRuleOptions];
  }
  const [severity, rawOptions] = config;
  const newOptions = {
    ...(rawOptions as object),
    ...defaultTailwindRuleOptions, // inject default options
  };
  return [severity, newOptions];
};

const patchConfig = (config: ConfigObject) => {
  const rules = config.rules as RulesConfig;
  if (!rules) {
    // no rules to patch
    return config;
  }

  // patch rules
  const resultRules: RulesConfig = {};
  for (const [ruleName, ruleConfig] of Object.entries(rules)) {
    resultRules[ruleName] = patchRuleConfig(ruleConfig);
  }
  return {
    ...config,
    rules: resultRules,
  };
};

export const getTailwindCssConfig = (): ConfigObject[] => {
  const recommended = eslintPluginTailwindCss.configs['flat/recommended'];
  return [
    ...recommended.map((config) => patchConfig(config)),
    {
      rules: {
        // FIXME: turn off this check until correctly configure tailwind config
        'tailwindcss/no-custom-classname': 'off',
      },
    },
    {
      files: ['**/*.test.{ts,tsx}'],
      rules: {
        'tailwindcss/no-custom-classname': 'off',
      },
    },
  ];
};
