import { getValidBlogIdsForPath } from '../../../src/utils/getValidBlogIdsForPath';

export async function GET() {
  // generate prebuilt code for building service worker
  const PRE_BUILT_BLOG_IDS_FOR_PATH = JSON.stringify(
    Array.from(getValidBlogIdsForPath()),
    null,
    2,
  );

  const code = `export const PRE_BUILT_BLOG_IDS_FOR_PATH: string[] = ${PRE_BUILT_BLOG_IDS_FOR_PATH};`;

  return new Response(code, { status: 200 });
}
