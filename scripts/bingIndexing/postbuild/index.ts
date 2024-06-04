import { writeFile } from 'node:fs/promises';
import { join as pathJoin } from 'node:path';

(async () => {
  // see https://www.bing.com/indexnow/getstarted#

  const key = process.env.BING_INDEX_NOW_KEY;
  if (!key) {
    return;
  }

  const rootDir = process.cwd();

  const keyFilePath = pathJoin(rootDir, 'out', `${key}.txt`);
  await writeFile(keyFilePath, key, 'utf-8');
})();
