import type { BlogData } from '../types';
import { getBlogMap } from './getBlogMap';

export const getMetaByBlogId = async (
  blogId: string,
): Promise<BlogData | undefined> => {
  const map = await getBlogMap();
  return map.get(blogId);
};
