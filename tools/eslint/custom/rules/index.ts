import type { Rule } from 'eslint';
import { rule as noClass } from './no-class';
import { rule as noEnum } from './no-enum';
import { rule as noDecorator } from './no-decorator';
import { rule as noUsePrivateModule } from './no-use-private-module';

export const rules = {
  'no-class': noClass,
  'no-enum': noEnum,
  'no-decorator': noDecorator,
  'no-use-private-module': noUsePrivateModule,
} satisfies Record<string, Rule.RuleModule>;
