import { getProjects } from '../../../src/projects/getProjects';
import { getFullUrl } from '../../../src/utils/getFullUrl';
import { outputJSON } from '../../../src/utils/api/outputJSON';
import type { ProjectData, JsonSerializable } from '../../../src/types';

export const dynamic = 'force-static';

export const GET = async () => {
  const projects = await getProjects();
  const result: ProjectData[] = projects.map((project) => {
    const image = getFullUrl(project.image);
    return { ...project, image };
  }) satisfies JsonSerializable;
  return outputJSON(result as unknown as JsonSerializable);
};
