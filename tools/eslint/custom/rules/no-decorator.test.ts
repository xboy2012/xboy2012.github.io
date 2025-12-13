/**
 * @jest-environment node
 */
import { rule } from './no-decorator';
import { getRuleTester } from './getRuleTester';

getRuleTester().run('no-decorator', rule, {
  valid: [
    { code: 'const a = 123;' },
    { code: 'class A {}' },
    { code: 'function A() {}' },
  ],
  invalid: [
    {
      code: `
        @decorator
        class A {}
      `,
      errors: [{ message: 'Usage of decorator is forbidden' }],
    },
    {
      code: `
        class A {
          @decorator
          private foo: string;
        }
      `,
      errors: [{ message: 'Usage of decorator is forbidden' }],
    },
    {
      code: `
        class A {
          @decorator
          private bar() {};
        }
      `,
      errors: [{ message: 'Usage of decorator is forbidden' }],
    },
  ],
});
