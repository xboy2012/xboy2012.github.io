import { getBlogs } from '../blogs';

let blogIds: Set<string> | undefined;

export const getValidBlogIdsForPath = () => {
  if (!blogIds) {
    blogIds = new Set(
      getBlogs()
        .filter((blog) => !blog.link)
        .map((blog) => blog.id),
    );
  }
  return blogIds;
};
