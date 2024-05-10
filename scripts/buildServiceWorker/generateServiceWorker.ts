import { rollup } from 'rollup';
import { join as pathJoin } from 'node:path';
import rollupESBuild from 'rollup-plugin-esbuild';
import rollupNodeResolve from '@rollup/plugin-node-resolve';
import rollupReplace from '@rollup/plugin-replace';
import rollupTerser from '@rollup/plugin-terser';
import { prepareInjectValues } from './prepareInjectValues';

export const generateServiceWorker = async (rootDir: string) => {
  const bundle = await rollup({
    input: pathJoin(rootDir, 'src', 'serviceWorker', 'index.ts'),
    plugins: [
      rollupESBuild({
        minify: false,
      }),
      rollupNodeResolve(),
      rollupReplace({
        preventAssignment: true,
        values: await prepareInjectValues(rootDir),
      }),
      process.env.NODE_ENV === 'production' && rollupTerser(),
    ].filter(Boolean),
  });

  await bundle.write({
    file: pathJoin(rootDir, 'out', 'serviceWorker.js'),
    format: 'esm',
  });
};
