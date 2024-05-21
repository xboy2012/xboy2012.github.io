import { getResumeJsonLD } from './getResumeJsonLD';

describe('JsonLD test', () => {
  test('should return as expected', () => {
    const result1 = getResumeJsonLD();
    const result2 = getResumeJsonLD();
    expect(result1).toBe(result2);
    expect(result1).toBeTruthy();
  });
});
