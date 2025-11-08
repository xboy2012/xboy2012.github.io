import { rollup } from 'rollup';
import rollupESBuild from 'rollup-plugin-esbuild';
import rollupNodeResolve from '@rollup/plugin-node-resolve';
import rollupReplace from '@rollup/plugin-replace';

export const bundleCode = async (options: {
  entry: string;
  inject: Record<string, string>;
}) => {
  const bundle = await rollup({
    input: options.entry,
    plugins: [
      rollupESBuild({
        minify: false,
      }),
      rollupNodeResolve(),
      rollupReplace({
        preventAssignment: true,
        values: options.inject,
      }),
    ].filter(Boolean),
  });

  const output = await bundle.generate({ format: 'esm' });
  return output.output[0].code;
};
