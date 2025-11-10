import { singleton } from './singleton';

describe('singleton() test', () => {
  it('should work as expected', () => {
    const fn = jest.fn(() => Math.random().toString());
    const resultFn = singleton(fn);
    const result1 = resultFn();
    const result2 = resultFn();
    expect(fn).toHaveBeenCalledTimes(1);
    expect(result1).toEqual(result2);
    expect(result1).toBeTruthy();
  });

  it('should not cache result if error occurs', () => {
    const random = Math.random().toString();
    const fn = jest.fn();
    fn.mockImplementationOnce(() => {
      throw new Error('Intended Error');
    }).mockImplementation(() => random);

    const resultFn = singleton(fn);

    expect(() => resultFn()).toThrow();
    expect(resultFn()).toBe(random);
    expect(resultFn()).toBe(random);
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
