import { getProjectsBasic } from './getProjectsBasic';
import { collectDuplicateValues } from '../utils/collectDuplicateValues';

describe('projects data should follow some conventions', () => {
  it('should return the same reference', () => {
    const result1 = getProjectsBasic();
    const result2 = getProjectsBasic();
    expect(result1).toBe(result2);
  });

  it('projects should have distinct ids', () => {
    const duplicatedIds = collectDuplicateValues(
      getProjectsBasic().map((project) => project.id),
    );
    expect(duplicatedIds).toHaveLength(0);
  });
});
