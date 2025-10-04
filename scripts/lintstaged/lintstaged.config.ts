import type { Configuration } from 'lint-staged';
import { filterFilesRequiresESLint } from './filterFilesRequiresESLint';
import { filterFilesRequiresPrettier } from './filterFilesRequiresPrettier';
import { filterFilesExceptExtensions } from './filterFilesExceptExtensions';

const JsTsExtensions = [
  '.js',
  '.jsx',
  '.cjs',
  '.mjs',
  '.ts',
  '.tsx',
  '.mts',
  '.cts',
];

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
  '*': async (originalFiles) => {
    const files = filterFilesExceptExtensions(originalFiles, JsTsExtensions);
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
