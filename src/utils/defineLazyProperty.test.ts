import { defineLazyProperty } from './defineLazyProperty';

describe('defineLazyProperty test', () => {
  test('should work as expected', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const obj: any = {};
    const key = Math.random().toString(36).substring(2);
    const value = Math.random().toString(36).substring(2);
    const getFn = jest.fn(() => value);

    defineLazyProperty(obj, key, getFn);

    expect(getFn).not.toHaveBeenCalled();
    const v1 = obj[key];
    expect(v1).toBe(value);
    expect(getFn).toHaveBeenCalledTimes(1);
    const v2 = obj[key];
    expect(v2).toBe(value);
    expect(getFn).toHaveBeenCalledTimes(1);
  });
});
