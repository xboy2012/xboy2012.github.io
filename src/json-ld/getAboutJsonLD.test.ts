import { getAboutJsonLD } from './getAboutJsonLD';

describe('JsonLD test', () => {
  it('should return as expected', () => {
    const result1 = getAboutJsonLD();
    const result2 = getAboutJsonLD();
    expect(result1).toBe(result2);
    expect(result1).toBeTruthy();
  });
});
