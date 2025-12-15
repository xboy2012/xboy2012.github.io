import { build } from 'esbuild';
import { minify } from 'terser';
import { format } from 'prettier';

export const bundleCode = async (options: {
  entry: string;
  inject: Record<string, string>;
  minify: boolean;
}): Promise<string> => {
  const shouldMinify = options.minify;
  const esbuildResult = await build({
    entryPoints: [options.entry],
    bundle: true,
    format: 'esm',
    write: false,
    define: options.inject,
    platform: 'neutral',
    treeShaking: true,
    minifyIdentifiers: shouldMinify,
    minifySyntax: true,
  });
  const codeFromEsBuild = esbuildResult.outputFiles[0].text;

  const terserOutput = await minify(codeFromEsBuild, {
    compress: {
      passes: 3,
      dead_code: true,
      conditionals: true,
      unused: true,
    },
    mangle: shouldMinify,
    format: {
      preserve_annotations: !shouldMinify,
    },
  });
  const codeFromTerser = terserOutput.code!;

  if (shouldMinify) {
    return codeFromTerser;
  }

  const formatedCode = await format(codeFromEsBuild, { parser: 'babel' });
  return formatedCode;
};
