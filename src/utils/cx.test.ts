import { cx } from './cx';

const stringify = (value: unknown) => {
  if (typeof value === 'string') {
    return JSON.stringify(value);
  }
  return String(value);
};

describe('cx() should work as expected', () => {
  it('should return the correct value', () => {
    expect(
      cx(1, true, 'abc', 'def', {
        toString: () => 'serializableObject',
      }),
    ).toEqual('1 true abc def serializableObject');
  });

  const emptyValues = ['', undefined, null, NaN, false, 0];

  for (const value of emptyValues) {
    it(`should skip falsy value ${stringify(value)}`, () => {
      expect(cx('abc', value, 'def')).toBe('abc def');
    });
  }
});
