/**
 * @jest-environment node
 */
import { rule } from './no-use-private-module';
import { getRuleTester } from './getRuleTester';

getRuleTester().run('no-use-private-module', rule, {
  valid: [
    // non-private
    { code: "import fs from 'node:fs';" },
    { code: "import * as React from 'foo';" },
    { code: "import { foo } from './foo';" },
    { code: "import { foo } from '../foo';" },
    { code: "import('node:fs');" },
    { code: "import('foo');" },
    { code: "import('./foo');" },
    { code: "import('../foo');" },
    { code: "const { a } = require('node:fs');" },
    { code: "const { foo } = require('foo');" },
    { code: "const { a } = require('./foo');" },
    { code: "const { a } = require('../foo');" },
    { code: "export * from 'node:fs';" },
    { code: "export * from 'foo';" },
    { code: "export * from './foo';" },
    { code: "export * from '../foo';" },
    { code: "export { a }  from 'node:fs';" },
    { code: "export { a }  from 'foo';" },
    { code: "export { a }  from './foo';" },
    { code: "export { a }  from '../foo';" },
    { code: "export const foo = 'abc';" },
    { code: "export default 'abc';" },
    // private
    { code: "import { foo } from './_private';" },
    { code: "import { foo } from './_private/foo';" },
    { code: "import('./_private/foo');" },
    { code: "const { foo } = require('./_private/foo');" },
    { code: "export * from './_private/foo';" },
    { code: "export { foo } from './_private/foo';" },
  ],
  invalid: [
    {
      code: "import { bar } from './foo/_private';",
      errors: [{ message: 'Import of private modules is forbidden' }],
    },
    {
      code: "import { bar } from '../bar/_private';",
      errors: [{ message: 'Import of private modules is forbidden' }],
    },
    {
      code: "const { bar } = import('./foo/_private');",
      errors: [{ message: 'Import of private modules is forbidden' }],
    },
    {
      code: "import('../bar/_private');",
      errors: [{ message: 'Import of private modules is forbidden' }],
    },
    {
      code: "const { bar } = require('./foo/_private');",
      errors: [{ message: 'Import of private modules is forbidden' }],
    },
    {
      code: "const { bar } = require('../bar/_private');",
      errors: [{ message: 'Import of private modules is forbidden' }],
    },
    {
      code: "export * from './foo/_private';",
      errors: [{ message: 'Export of private modules is forbidden' }],
    },
    {
      code: "export { bar } from '../bar/_private';",
      errors: [{ message: 'Export of private modules is forbidden' }],
    },
  ],
});
