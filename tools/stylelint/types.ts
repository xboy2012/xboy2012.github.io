import type { Config } from 'stylelint';

export type PartialStyleLintConfig = Pick<
  Config,
  // TODO: for now, only these fields are supported, type-guard is applied here to avoid unexpected usage.
  'plugins' | 'extends' | 'ignoreFiles' | 'rules'
>;
