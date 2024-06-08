import { getBlogsBasic } from './getBlogsBasic';
import src from '../utils/getImageUrl';
import type { BlogData } from '../types';

let promise: Promise<BlogData[]> | undefined;

const _getBlogsFull = (): Promise<BlogData[]> => {
  const blogs = getBlogsBasic();
  const promises = blogs.map(async (blog): Promise<BlogData> => {
    const image = src(await blog.image());
    return { ...blog, image };
  });
  return Promise.all(promises);
};

export const getBlogs = (): Promise<BlogData[]> => {
  if (!promise) {
    promise = _getBlogsFull();
  }
  return promise;
};
