import type { Config } from 'lint-staged';
import { shouldRunPrettier } from './shouldRunPrettier';
import { shouldRunESLint } from './shouldRunESLint';
import { extname } from 'node:path';

const lintStagedConfig: Config = {
  '*.{ts,tsx,mts,cts}': () => 'tsc --noEmit',
  '*.{js,jsx,cjs,mjs,ts,tsx,mts,cts}': async (files) => {
    const results = await Promise.all(
      files.map(async (file) => {
        const [runPrettier, runESLint] = await Promise.all([
          shouldRunPrettier(file),
          shouldRunESLint(file),
        ]);
        return { file, runPrettier, runESLint };
      }),
    );

    const prettierFiles = results
      .filter((o) => o.runPrettier)
      .map((o) => o.file);
    const eslintFiles = results.filter((o) => o.runESLint).map((o) => o.file);

    const allFiles = results
      .filter((o) => o.runPrettier || o.runESLint)
      .map((o) => o.file);

    const commands: string[] = [
      prettierFiles.length
        ? `prettier --write '${prettierFiles.join("' '")}'`
        : '',
      eslintFiles.length ? `eslint --fix '${eslintFiles.join("' '")}'` : '',
      allFiles.length ? `git add '${allFiles.join("' '")}'` : '',
    ].filter(Boolean);

    return commands;
  },
  '*': async (files) => {
    const extensionSet = new Set([
      '.js',
      '.jsx',
      '.cjs',
      '.mjs',
      '.ts',
      '.tsx',
      '.mts',
      '.cts',
    ]);

    const promises = files
      .filter((file) => {
        // skipped files that already processed in other rules
        const extension = extname(file);
        return !extensionSet.has(extension);
      })
      .map(async (file) => {
        const runPrettier = await shouldRunPrettier(file);
        return { file, runPrettier };
      });

    const results = await Promise.all(promises);

    const otherFiles = results.filter((o) => o.runPrettier).map((o) => o.file);

    if (otherFiles.length) {
      return [
        `prettier --write '${otherFiles.join("' '")}'`,
        `git add '${otherFiles.join("' '")}'`,
      ];
    }
    return [];
  },
};

export default lintStagedConfig;
