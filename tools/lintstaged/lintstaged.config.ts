import type { Configuration } from 'lint-staged';
import { filterFilesRequiresESLint } from './filterFilesRequiresESLint';
import { filterFilesRequiresPrettier } from './filterFilesRequiresPrettier';

const jsExtensions = ['js', 'jsx', 'cjs', 'mjs'] as const satisfies string[];
const tsExtensions = ['ts', 'tsx', 'mts', 'cts'] as const satisfies string[];
const styleExtensions = ['css'] as const satisfies string[];
const eslintExtensions = [
  ...jsExtensions,
  ...tsExtensions,
] as const satisfies string[];

const buildPattern = (extensions: readonly string[]) => {
  if (extensions.length === 1) {
    return `*.${extensions[0]}`;
  }
  return `*.{${extensions.join(',')}}`;
};

const buildReversePattern = (extensions: readonly string[]) => {
  return `!(${extensions.map((extension) => `*.${extension}`).join('|')})`;
};

const tsPattern = buildPattern(tsExtensions);
const eslintPattern = buildPattern(eslintExtensions);
const stylePattern = buildPattern(styleExtensions);
const otherPattern = buildReversePattern([
  // eslint/stylelint has already used prettier internally, skip for prettier
  ...eslintExtensions,
  ...styleExtensions,
]);

const lintStagedConfig: Configuration = {
  [tsPattern]: () => 'tsc --noEmit',
  [eslintPattern]: async (files) => {
    const eslintFiles = await filterFilesRequiresESLint(files);
    if (eslintFiles.length) {
      return [
        `eslint --fix '${eslintFiles.join("' '")}'`,
        `git add '${eslintFiles.join("' '")}'`,
      ];
    }
    return [];
  },
  [stylePattern]: (files) => {
    return [
      `stylelint --fix '${files.join(' ')}'`,
      `git add '${files.join(' ')}'`,
    ];
  },
  [otherPattern]: async (files) => {
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
