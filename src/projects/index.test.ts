import { getProjects } from './index';

describe('projects data should follow some conventions', () => {
  test('blogs should have distinct ids', () => {
    const set = new Set<string>();
    const duplicatedIds: string[] = [];
    for (const project of getProjects()) {
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
