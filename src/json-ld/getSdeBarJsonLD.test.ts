import { getSideBarJsonLD } from './getSideBarJsonLD';

describe('JsonLD test', () => {
  test('should return as expected', () => {
    const result1 = getSideBarJsonLD();
    const result2 = getSideBarJsonLD();
    expect(result1).toBe(result2);
    expect(result1).toBeTruthy();
  });
});
