export const getPreBuiltBlogIdsForPath = async (): Promise<string[]> => {
  return (
    await import(
      // @ts-ignore the path should be resolved correctly after `next build`
      '../../out/temp/PRE_BUILT_BLOG_IDS_FOR_PATH'
    )
  ).PRE_BUILT_BLOG_IDS_FOR_PATH;
};
