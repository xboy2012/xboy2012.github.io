import { join as pathJoin } from 'node:path';
import { globDirContentOccurrence } from './globDirContentOccurrence';
import { getRootDir } from '../../utils/getRootDir';

describe('preBuild related tests', () => {
  const rootDir = getRootDir();

  for (const varName of ['NEXT_STATIC_FILES', 'HASH_INFO']) {
    test(`predefined [${varName}] should only occur once`, async () => {
      const dir = pathJoin(rootDir, 'src', 'serviceWorker');
      const results = await globDirContentOccurrence(rootDir, dir, varName);
      expect(results).toHaveLength(1);
      expect(results[0]).toEqual({ ...results[0], occurrences: 1 });
    });
  }
});
