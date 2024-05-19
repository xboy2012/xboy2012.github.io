import { join as pathJoin } from 'node:path';
import { globDirContentOccurrence } from './globDirContentOccurrence';

describe('preBuild related tests', () => {
  for (const varName of [
    'PRE_BUILT_BLOG_IDS_FOR_PATH',
    'NON_HASHED_PATHS',
    'NEXT_STATIC_FILES',
  ]) {
    test(`predefined [${varName}] should only occur once`, async () => {
      const rootDir = process.cwd();
      const dir = pathJoin(rootDir, 'src', 'serviceWorker');
      const results = await globDirContentOccurrence(rootDir, dir, varName);
      expect(results).toHaveLength(1);
      expect(results[0]).toEqual({ ...results[0], occurrences: 1 });
    });
  }
});
