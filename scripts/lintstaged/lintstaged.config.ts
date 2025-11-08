import type { Configuration } from 'lint-staged';
import { filterFilesRequiresESLint } from './filterFilesRequiresESLint';
import { filterFilesRequiresPrettier } from './filterFilesRequiresPrettier';
import { filterFilesExceptExtensions } from './filterFilesExceptExtensions';

const JsExtensions = [
  '.js',
  '.jsx',
  '.cjs',
  '.mjs',
] as const satisfies string[];
const tsExtensions = [
  '.ts',
  '.tsx',
  '.mts',
  '.cts',
] as const satisfies string[];
const styleExtensions = ['.css'] as const satisfies string[];

// js,ts,styles has already been handled by eslint/stylelint, skip for prettier
const skipPrettierExtensionSet = new Set([
  ...JsExtensions,
  ...tsExtensions,
  ...styleExtensions,
]);

const lintStagedConfig: Configuration = {
  '*.{ts,tsx,mts,cts}': () => 'tsc --noEmit',
  '*.{js,jsx,cjs,mjs,ts,tsx,mts,cts}': async (files) => {
    const eslintFiles = await filterFilesRequiresESLint(files);
    if (eslintFiles.length) {
      return [
        `eslint --fix '${eslintFiles.join("' '")}'`,
        `git add '${eslintFiles.join("' '")}'`,
      ];
    }
    return [];
  },
  '*.css': (files) => {
    return [
      `stylelint --fix '${files.join(' ')}'`,
      `git add '${files.join(' ')}'`,
    ];
  },
  '*': async (originalFiles) => {
    const files = filterFilesExceptExtensions(
      originalFiles,
      skipPrettierExtensionSet,
    );
    const prettierFiles = await filterFilesRequiresPrettier(files);
    if (prettierFiles.length) {
      return [
        `prettier --write '${prettierFiles.join("' '")}'`,
        `git add '${prettierFiles.join("' '")}'`,
      ];
    }
    return [];
  },
};

export default lintStagedConfig;
