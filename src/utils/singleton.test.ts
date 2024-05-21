import { singleton } from './singleton';

describe('singleton() test', () => {
  test('should work as expected', () => {
    const fn = jest.fn(() => Math.random().toString());
    const resFn = singleton(fn);
    const result1 = resFn();
    const result2 = resFn();
    expect(fn).toHaveBeenCalledTimes(1);
    expect(result1).toEqual(result2);
    expect(result1).toBeTruthy();
  });

  test('should not cache result if error occurs', () => {
    const random = Math.random().toString();
    const fn = jest.fn();
    fn.mockImplementationOnce(() => {
      throw Error('Intended Error');
    }).mockImplementation(() => random);

    const resFn = singleton(fn);

    expect(() => resFn()).toThrow();
    expect(resFn()).toBe(random);
    expect(resFn()).toBe(random);
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
