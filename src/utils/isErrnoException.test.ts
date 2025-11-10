import { isErrnoException } from './isErrnoException';

describe('isErrnoException', () => {
  const invalidValues: [string, unknown][] = [
    // falsy
    ['null', null],
    ['undefined', undefined],
    ['false', false],
    ['0', 0],
    ['NaN', NaN],
    ['""', ''],

    // truthy
    ['true', true],
    ['"abc"', 'abc'],
    ['Infinity', Infinity],
    ['Function', () => {}],
    ['[]', []],
  ];

  for (const [desc, value] of invalidValues) {
    it(`should return false for ${desc}`, () => {
      expect(isErrnoException(value)).toBe(false);
    });
  }

  const truthyValues: [string, unknown][] = [
    ['Object', {}],
    ['Error', new Error('MockError')],
  ];

  for (const [desc, value] of truthyValues) {
    it(`should return true for ${desc}`, () => {
      expect(isErrnoException(value)).toBe(true);
    });
  }
});
