import type { JSSyntaxElement, Rule } from 'eslint';

export const rule: Rule.RuleModule = {
  meta: {
    docs: {
      description: 'Prevent usage of decorator',
    },
  },
  create(context) {
    return {
      Decorator(node: JSSyntaxElement) {
        context.report({
          node,
          message: 'Usage of decorator is forbidden',
        });
      },
    };
  },
};
