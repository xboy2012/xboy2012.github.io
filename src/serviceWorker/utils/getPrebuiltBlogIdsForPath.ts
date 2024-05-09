let blogIds: Set<string> | undefined;

export const getPrebuiltBlogIdsForPath = (): Set<string> => {
  if (!blogIds) {
    blogIds = new Set(PRE_BUILT_BLOG_IDS_FOR_PATH);
  }
  return blogIds;
};
