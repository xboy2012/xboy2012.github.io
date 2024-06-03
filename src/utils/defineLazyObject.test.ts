import { defineLazyObject } from './defineLazyObject';

describe('defineLazyObject test', () => {
  test('should work as expected', () => {
    const k1 = Math.random().toString(36).substring(2);
    const k2 = Math.random().toString(36).substring(2);
    const v1 = Math.random().toString(36).substring(2);
    const v2 = Math.random().toString(36).substring(2);

    const obj = {
      [k1]: v1,
      [k2]: () => v2,
    };

    const lazyObj = defineLazyObject(obj);

    expect(lazyObj[k1]).toBe(v1);
    expect(lazyObj[k2]).toBe(v2);
  });
});
