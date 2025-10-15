import { useNoJs } from './useNoJs';

describe('useNoJs should work as expected in Browser', () => {
  test('should return as expected', () => {
    const { noJsClassName, noJsScript } = useNoJs();
    expect(noJsClassName).toBeFalsy();
    expect(noJsScript).toBeFalsy();
  });
});
