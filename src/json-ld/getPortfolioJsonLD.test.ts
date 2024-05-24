import { getPortfolioJsonLD } from './getPortfolioJsonLD';

describe('JsonLD test', () => {
  test('should return as expected', () => {
    const result1 = getPortfolioJsonLD();
    const result2 = getPortfolioJsonLD();
    expect(result1).toBe(result2);
    expect(result1).toBeTruthy();
  });
});
