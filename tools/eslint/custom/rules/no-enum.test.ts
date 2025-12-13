/**
 * @jest-environment node
 */
import { rule } from './no-enum';
import { getRuleTester } from './getRuleTester';

getRuleTester().run('no-enum', rule, {
  valid: [
    { code: 'const a = 123;' },
    { code: 'type A = 1 | 2 | 3;' },
    { code: "type B = 'x' | 'y' | 'z';" },
  ],
  invalid: [
    {
      code: 'enum A { X, Y, Z }',
      errors: [{ message: 'Usage of TypeScript Enums is forbidden' }],
    },
    {
      code: 'const enum A { X, Y, Z }',
      errors: [{ message: 'Usage of TypeScript Enums is forbidden' }],
    },
  ],
});
