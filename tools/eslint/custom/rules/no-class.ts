import type { Rule } from 'eslint';

export const rule: Rule.RuleModule = {
  meta: {
    docs: {
      description: 'Prevent definition of class',
    },
  },
  create(context) {
    return {
      ClassDeclaration(node) {
        context.report({
          node,
          message: 'Definition of class is forbidden',
        });
      },
      ClassExpression(node) {
        context.report({
          node,
          message: 'Definition of class is forbidden',
        });
      },
    };
  },
};
