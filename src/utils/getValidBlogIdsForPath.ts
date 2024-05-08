import { getBlogs } from '../blogs';

let blogIds: Set<string> | undefined;

export const getValidBlogIdsForPath = () => {
  if (!blogIds) {
    blogIds = new Set(
      process.env.BUILD_TARGET === 'SERVICE_WORKER'
        ? // In service worker, we use prebuilt data to avoid deep dependence on full blogs data
          PRE_BUILT_BLOG_IDS_FOR_PATH
        : // In browser, we just calculate the data from full blogs data
          getBlogs()
            .filter((blog) => !blog.link)
            .map((blog) => blog.id),
    );
  }
  return blogIds;
};
