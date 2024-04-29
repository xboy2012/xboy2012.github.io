import micromatch from 'micromatch';

/** @type {import('lint-staged').Config} */
const config = {
  '*.{ts,tsx,mts,cts}': () => 'tsc --noEmit',
  '*.{js,jsx,cjs,mjs,ts,tsx,mts,cts}': ['prettier --write', 'eslint --fix'],
  '*': (files) => {
    const otherFiles = micromatch.not(files, [
      '**/*.{js,jsx,cjs,mjs,ts,tsx,mts,cts}',
    ]);
    if (otherFiles.length) {
      return `prettier --write --ignore-unknown '${otherFiles.join("' '")}'`;
    }
    return '';
  },
};

export default config;
