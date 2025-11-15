import { getBlogsBasic } from './getBlogsBasic';
import { makeAbsoluteSrc } from '../utils/makeAbsoluteSrc';
import type { BlogData } from '../types';

let promise: Promise<readonly BlogData[]> | undefined;

const _getBlogsFull = () => {
  return makeAbsoluteSrc<'image', BlogData>('image', getBlogsBasic());
};

export const getBlogs = (): Promise<readonly BlogData[]> => {
  if (!promise) {
    promise = _getBlogsFull();
  }
  return promise;
};
