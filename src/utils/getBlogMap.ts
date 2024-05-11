import type { BlogData } from '../types';
import { getBlogs } from '../blogs';

let blogMap: Readonly<Map<string, BlogData>>;

export const getBlogMap = (): Readonly<Map<string, BlogData>> => {
  if (!blogMap) {
    const map = new Map<string, BlogData>();
    for (const blog of getBlogs()) {
      map.set(blog.id, blog);
    }
    blogMap = map;
  }
  return blogMap;
};
