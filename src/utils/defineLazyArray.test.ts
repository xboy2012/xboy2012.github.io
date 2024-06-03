import { defineLazyArray } from './defineLazyArray';

describe('defineLazyArray test', () => {
  test('should work as expected', () => {
    const v1 = Math.random().toString(36).substring(2);
    const v2 = Math.random().toString(36).substring(2);
    const arr = [{ v: () => v1 }, { v: () => v2 }];

    const lazyArr = defineLazyArray(arr);

    expect(lazyArr).toHaveLength(2);
    expect(lazyArr[0].v).toBe(v1);
    expect(lazyArr[1].v).toBe(v2);
  });
});
