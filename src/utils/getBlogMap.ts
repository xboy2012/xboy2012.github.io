import type { BlogData } from '../types';
import { getBlogs } from '../blogs';

let blogMap: Readonly<Map<string, Readonly<BlogData>>>;

export const getBlogMap = (): Readonly<Map<string, Readonly<BlogData>>> => {
  if (!blogMap) {
    const map = new Map<string, Readonly<BlogData>>();
    for (const blog of getBlogs()) {
      map.set(blog.id, blog);
    }
    blogMap = map;
  }
  return blogMap;
};
