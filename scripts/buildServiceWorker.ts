import { join as pathJoin } from 'node:path';
import { rollup } from 'rollup';
import rollupESBuild from 'rollup-plugin-esbuild';
import rollupNodeResolve from '@rollup/plugin-node-resolve';
import rollupReplace from '@rollup/plugin-replace';
import rollupTerser from '@rollup/plugin-terser';
import { rm } from 'node:fs/promises';
import { getPublicAssetsHash } from './utils/getPublicAssetsHash';
import { getPreBuiltBlogIdsForPath } from './utils/getPreBuiltBlogIdsForPath';
import { getNextStaticFiles } from './utils/getNextStaticFiles';

(async () => {
  const rootDir = process.cwd();

  const v = (value: any) => {
    return JSON.stringify(value, null, 2);
  };

  const bundle = await rollup({
    input: pathJoin(rootDir, 'src', 'serviceWorker', 'index.ts'),
    plugins: [
      rollupESBuild({
        minify: false,
      }),
      rollupNodeResolve(),
      rollupReplace({
        preventAssignment: true,
        values: {
          'process.env.NODE_ENV': v(process.env.NODE_ENV || ''),
          PRE_BUILT_BLOG_IDS_FOR_PATH: v(await getPreBuiltBlogIdsForPath()),
          NON_HASHED_PATHS: v(await getPublicAssetsHash()),
          NEXT_STATIC_FILES: v(await getNextStaticFiles()),
        },
      }),
      process.env.NODE_ENV === 'production' && rollupTerser(),
    ].filter(Boolean),
  });

  const result = await bundle.generate({
    format: 'esm',
  });
  const code = result.output[0].code;

  await bundle.write({
    file: pathJoin(rootDir, 'out', 'serviceWorker.js'),
    format: 'esm',
  });

  // remove the temporal directory of `out`
  await rm(pathJoin(rootDir, 'out', 'temp'), { recursive: true });
})();
