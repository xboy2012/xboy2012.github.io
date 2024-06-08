import type { ProjectData } from '../types';
import src from '../utils/getImageUrl';
import { getProjectsBasic } from './getProjectsBasic';

let promise: Promise<ProjectData[]> | undefined;

const _getProjectsFull = (): Promise<ProjectData[]> => {
  const promises = getProjectsBasic().map(async (project) => {
    const image = src(await project.image());
    return { ...project, image };
  });
  return Promise.all(promises);
};

export const getProjects = (): Promise<ProjectData[]> => {
  if (!promise) {
    promise = _getProjectsFull();
  }
  return promise;
};
