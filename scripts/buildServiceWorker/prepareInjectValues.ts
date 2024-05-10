import { getBuiltBlogIds } from './getBuiltBlogIds';
import { getPublicAssetsHash } from './getPublicAssetsHash';
import { getNextStaticFiles } from './getNextStaticFiles';
import type { RollupReplaceOptions } from '@rollup/plugin-replace';

const wrapJSON = (values: Record<string, any>) => {
  const result: Record<string, string> = {};
  for (const key of Object.keys(values)) {
    result[key] = JSON.stringify(values[key], null, 2);
  }
  return result;
};

export const prepareInjectValues = async (rootDir: string) => {
  const [PRE_BUILT_BLOG_IDS_FOR_PATH, NON_HASHED_PATHS, NEXT_STATIC_FILES] =
    await Promise.all([
      getBuiltBlogIds(rootDir),
      getPublicAssetsHash(rootDir),
      getNextStaticFiles(rootDir),
    ]);

  const values: RollupReplaceOptions['values'] = wrapJSON({
    'process.env.NODE_ENV': process.env.NODE_ENV || '',
    PRE_BUILT_BLOG_IDS_FOR_PATH,
    NON_HASHED_PATHS,
    NEXT_STATIC_FILES,
  });
  return values;
};
