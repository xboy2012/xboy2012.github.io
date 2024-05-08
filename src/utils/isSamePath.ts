import { formatPagePath } from './formatPagePath';
import type { PathString } from '../types';

/**
 * Determine whether two paths are the same, considering potential transforms
 * @param path1
 * @param path2
 * @return {boolean} true if the same, false otherwise.
 */
export const isSamePath = (path1: PathString, path2: PathString): boolean => {
  return path1 === path2 || formatPagePath(path1) === formatPagePath(path2);
};
