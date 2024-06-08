import { getProjectsBasic } from './getProjectsBasic';

describe('projects data should follow some conventions', () => {
  test('projects should have distinct ids', () => {
    const set = new Set<string>();
    const duplicatedIds: string[] = [];
    for (const project of getProjectsBasic()) {
      const projectId = project.id;
      if (set.has(projectId)) {
        duplicatedIds.push(projectId);
      } else {
        set.add(projectId);
      }
    }
    expect(duplicatedIds).toHaveLength(0);
  });
});
