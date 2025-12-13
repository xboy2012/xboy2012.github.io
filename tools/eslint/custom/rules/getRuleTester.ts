import { RuleTester } from 'eslint';
import * as tsParser from '@typescript-eslint/parser';

export const getRuleTester = () => {
  return new RuleTester({
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tsParser,
    },
  });
};
