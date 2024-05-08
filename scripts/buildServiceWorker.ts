import { join as pathJoin } from 'node:path';
import { rollup } from 'rollup';
import rollupESBuild from 'rollup-plugin-esbuild';
import rollupNodeResolve from '@rollup/plugin-node-resolve';
import rollupReplace from '@rollup/plugin-replace';
import rollupTerser from '@rollup/plugin-terser';

(async () => {
  const rootDir = process.cwd();

  const PRE_BUILT_BLOG_IDS_FOR_PATH: string[] = (
    await import(
      // @ts-ignore the path should be resolved correctly after `next build`
      '../out/temp/PRE_BUILT_BLOG_IDS_FOR_PATH'
    )
  ).PRE_BUILT_BLOG_IDS_FOR_PATH;

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
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || ''),
          'process.env.BUILD_TARGET': JSON.stringify('SERVICE_WORKER'),
          PRE_BUILT_BLOG_IDS_FOR_PATH: JSON.stringify(
            PRE_BUILT_BLOG_IDS_FOR_PATH,
            null,
            2,
          ),
        },
      }),
      process.env.NODE_ENV === 'production' && rollupTerser(),
    ].filter(Boolean),
  });
  await bundle.write({
    file: pathJoin(rootDir, 'out', 'serviceWorker.js'),
    format: 'esm',
  });
})();
