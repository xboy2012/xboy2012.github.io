import { build } from 'esbuild';
import { minify } from 'terser';
import { format } from 'prettier';
import { ESLint } from 'eslint';

export const bundleCode = async (options: {
  entry: string;
  inject: Record<string, string>;
  minify: boolean;
}): Promise<string> => {
  const shouldMinify = options.minify;

  // bundle with esbuild
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

  // convert var to let/const
  const eslint = new ESLint({
    fix: true,
    overrideConfigFile: true,
    overrideConfig: {
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      rules: {
        'prefer-const': 'error',
        'no-var': 'error',
      },
    },
  });
  const results = await eslint.lintText(codeFromEsBuild);
  const codeFromEsLint = results[0]!.output!;

  // trim dead code and minify with terser
  const terserOutput = await minify(codeFromEsLint, {
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

  // return minified code for production
  if (shouldMinify) {
    return codeFromTerser;
  }

  // format with prettier
  const formatedCode = await format(codeFromEsBuild, { parser: 'babel' });
  return formatedCode;
};
