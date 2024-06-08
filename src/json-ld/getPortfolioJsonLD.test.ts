import { getPortfolioJsonLD } from './getPortfolioJsonLD';
import { getProjects } from '../projects/getProjects';

describe('JsonLD test', () => {
  test('should return as expected', async () => {
    const projects = await getProjects();
    const result1 = getPortfolioJsonLD(projects);
    const result2 = getPortfolioJsonLD(projects);
    expect(result1).toBe(result2);
    expect(result1).toBeTruthy();
  });
});
