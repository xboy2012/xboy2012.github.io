import { join as pathJoin } from 'node:path';
import { rollup } from 'rollup';
import rollupESBuild from 'rollup-plugin-esbuild';
import rollupNodeResolve from '@rollup/plugin-node-resolve';
import rollupReplace from '@rollup/plugin-replace';
import rollupTerser from '@rollup/plugin-terser';

(async () => {
  const rootDir = process.cwd();
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
          'process.env.NODE_ENV': JSON.stringify('production'),
        },
      }),
      rollupTerser(),
    ],
  });
  await bundle.write({
    file: pathJoin(rootDir, 'out', 'serviceWorker.js'),
    format: 'esm',
  });
})();
