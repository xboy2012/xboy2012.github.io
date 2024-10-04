import { cx } from './cx';

describe('cx() should work as expected', () => {
  it('should return the correct value', () => {
    expect(
      cx(1, true, 'abc', 'def', {
        toString: () => 'serializableObject',
      }),
    ).toEqual('1 true abc def serializableObject');
  });

  const emptyValues = ['', undefined, null, NaN, false, 0];

  const stringify = (value: unknown) => {
    if (typeof value === 'string') {
      return JSON.stringify(value);
    }
    return String(value);
  };

  for (const value of emptyValues) {
    it(`should skip falsy value ${stringify(value)}`, () => {
      expect(cx('abc', value, 'def')).toBe('abc def');
    });
  }
});
