import { getBlogListJsonLD } from './getBlogListJsonLD';

describe('JsonLD test', () => {
  test('should return as expected', () => {
    const result1 = getBlogListJsonLD();
    const result2 = getBlogListJsonLD();
    expect(result1).toBe(result2);
    expect(result1).toBeTruthy();
  });
});
