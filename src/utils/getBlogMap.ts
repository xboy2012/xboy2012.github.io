import type { BlogData } from '../types';
import { getBlogs } from '../blogs/getBlogs';

let promise: Promise<Readonly<Map<string, BlogData>>> | undefined;

const _getBlogMap = async (): Promise<Readonly<Map<string, BlogData>>> => {
  const blogs = await getBlogs();
  const map = new Map<string, BlogData>();
  for (const blog of blogs) {
    map.set(blog.id, blog);
  }
  return map;
};

export const getBlogMap = (): Promise<Readonly<Map<string, BlogData>>> => {
  if (!promise) {
    promise = _getBlogMap();
  }
  return promise;
};
