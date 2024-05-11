import type { BlogData } from '../types';
import { getBlogMap } from './getBlogMap';

export const getMetaByBlogId = (blogId: string): BlogData | undefined => {
  return getBlogMap().get(blogId);
};
