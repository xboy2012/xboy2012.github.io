/**
 * @jest-environment node
 */
import { rule } from './no-class';
import { getRuleTester } from './getRuleTester';

getRuleTester().run('no-class', rule, {
  valid: [
    { code: 'const a = 123;' },
    { code: 'function A() {}' },
    { code: 'const A = function() {}' },
  ],
  invalid: [
    {
      code: 'class A {}',
      errors: [{ message: 'Definition of class is forbidden' }],
    },
    {
      code: 'const A = class {}',
      errors: [{ message: 'Definition of class is forbidden' }],
    },
  ],
});
