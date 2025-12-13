import type { JSSyntaxElement, Rule } from 'eslint';

type MessageId = 'no-enum';

const messages = {
  'no-enum': 'Usage of TypeScript Enums is forbidden',
} satisfies Record<MessageId, string>;

const meta = {
  docs: {
    description: 'Prevent usage of TypeScript Enums',
  },
  messages,
} satisfies Rule.RuleMetaData;

export const rule: Rule.RuleModule = {
  meta,
  create(context) {
    return {
      TSEnumDeclaration(node: JSSyntaxElement) {
        context.report({
          node,
          messageId: 'no-enum',
        });
      },
    };
  },
};
