import { stableJsonStringify } from './stableJsonStringify';
import type { JsonSerializable } from '../types';

describe('stableJsonStringify test', () => {
  const cases: [JsonSerializable, string][] = [
    [null, 'null'],
    [0, '0'],
    [123, '123'],
    [true, 'true'],
    [false, 'false'],

    [{ a: 1, b: 2 }, '{\n  "a": 1,\n  "b": 2\n}'],
    [{ b: 2, a: 1 }, '{\n  "a": 1,\n  "b": 2\n}'],
    [[1, 2], '[\n  1,\n  2\n]'],
    [
      [
        { a: 1, b: 2 },
        { b: 4, a: 3 },
      ],
      '[\n  {\n    "a": 1,\n    "b": 2\n  },\n  {\n    "a": 3,\n    "b": 4\n  }\n]',
    ],
  ];

  for (const [value, expected] of cases) {
    it(`should work as expected for ${JSON.stringify(value)}`, () => {
      expect(stableJsonStringify(value)).toBe(expected);
    });
  }
});
