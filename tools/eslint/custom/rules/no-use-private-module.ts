import type { Rule } from 'eslint';

const shouldReport = (source: unknown) => {
  if (!source || typeof source !== 'string') {
    return false;
  }
  if (source.startsWith('./')) {
    const parts = source.split('/');
    const index = parts.indexOf('_private', 1);
    if (index === -1) {
      // valid: ./abc
      // valid: ./abc/def
      return false;
    }
    if (index === 1) {
      // valid: ./_private
      // valid: ./_private/abc
      return false;
    }
    // invalid: ./abc/_private
    return true;
  }
  if (source.startsWith('../')) {
    const parts = source.split('/');
    const index = parts.indexOf('_private', 1);
    if (index === -1) {
      // valid: ../abc
      // valid: ../../abc/def
      return false;
    }
    // invalid: ../_private/abc
    // invalid: ../abc/_private/def
    return true;
  }
  // always valid for non-relative paths.
  return false;
};

export const rule: Rule.RuleModule = {
  meta: {
    docs: {
      description: 'Prevent import of private modules',
    },
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        if (!shouldReport(node.source.value)) {
          return;
        }
        context.report({
          node,
          message: 'Import of private modules is forbidden',
        });
      },
      ExportAllDeclaration(node) {
        if (!shouldReport(node.source.value)) {
          return;
        }
        context.report({
          node,
          message: 'Export of private modules is forbidden',
        });
      },
      ExportNamedDeclaration(node) {
        if (!node.source) {
          return;
        }
        if (!shouldReport(node.source.value)) {
          return;
        }
        context.report({
          node,
          message: 'Export of private modules is forbidden',
        });
      },
      ImportExpression(node) {
        if (node.source.type !== 'Literal') {
          return;
        }
        if (!shouldReport(node.source.value)) {
          return;
        }
        context.report({
          node,
          message: 'Import of private modules is forbidden',
        });
      },
      CallExpression(node) {
        if (node.callee.type !== 'Identifier') {
          return;
        }
        if (
          (node.callee.name === 'require' || node.callee.name === 'import') &&
          node.arguments.length &&
          node.arguments[0].type === 'Literal' &&
          shouldReport(node.arguments[0].value)
        ) {
          context.report({
            node,
            message: 'Import of private modules is forbidden',
          });
        }
      },
    };
  },
};
