import { ESLint } from 'eslint';

let eslint: ESLint | undefined;

export const getESLintInstance = (): ESLint => {
  if (!eslint) {
    eslint = new ESLint();
  }
  return eslint;
};
