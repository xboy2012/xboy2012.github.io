import type { Rule } from 'eslint';
import { rule as noEnum } from './no-enum';

export const rules = {
  'no-enum': noEnum,
} satisfies Record<string, Rule.RuleModule>;
