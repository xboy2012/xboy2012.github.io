import { blogs } from '../blogs';

let blogIds: Set<string> | undefined;

export const getValidBlogIdsForPath = () => {
  if (!blogIds) {
    blogIds = new Set(
      blogs.filter((blog) => !blog.link).map((blog) => blog.id),
    );
  }
  return blogIds;
};
