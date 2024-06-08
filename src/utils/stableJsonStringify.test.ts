import { stableJsonStringify } from './stabelJsonStringify';

describe('stableJsonStringify test', () => {
  test('should work as expected', () => {
    expect(stableJsonStringify(null)).toBe('null');
    expect(stableJsonStringify(0)).toBe('0');
    expect(stableJsonStringify(123)).toBe('123');
    expect(stableJsonStringify(true)).toBe('true');
    expect(stableJsonStringify(false)).toBe('false');

    expect(stableJsonStringify({ a: 1, b: 2 })).toBe(
      '{\n  "a": 1,\n  "b": 2\n}',
    );
    expect(stableJsonStringify({ b: 2, a: 1 })).toBe(
      '{\n  "a": 1,\n  "b": 2\n}',
    );
    expect(stableJsonStringify([1, 2])).toBe('[\n  1,\n  2\n]');
    expect(
      stableJsonStringify([
        { a: 1, b: 2 },
        { b: 4, a: 3 },
      ]),
    ).toBe(
      '[\n  {\n    "a": 1,\n    "b": 2\n  },\n  {\n    "a": 3,\n    "b": 4\n  }\n]',
    );
  });
});
