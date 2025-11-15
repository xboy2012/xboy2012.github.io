import type { ProjectData } from '../types';
import { makeAbsoluteSrc } from '../utils/makeAbsoluteSrc';
import { getProjectsBasic } from './getProjectsBasic';

let promise: Promise<readonly ProjectData[]> | undefined;

const _getProjectsFull = () => {
  return makeAbsoluteSrc<'image', ProjectData>('image', getProjectsBasic());
};

export const getProjects = (): Promise<readonly ProjectData[]> => {
  if (!promise) {
    promise = _getProjectsFull();
  }
  return promise;
};
