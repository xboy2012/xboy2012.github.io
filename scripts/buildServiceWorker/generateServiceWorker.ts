import { join as pathJoin } from 'node:path';
import { writeFile } from 'node:fs/promises';
import { bundleCode } from './bundleCode';
import { prepareInjectValues } from './prepareInjectValues';
import { compressCode } from './compressCode';
import { prettierCode } from './prettierCode';

export const generateServiceWorker = async (rootDir: string) => {
  const rawCode = await bundleCode({
    entry: pathJoin(rootDir, 'src', 'serviceWorker', 'index.ts'),
    inject: await prepareInjectValues(rootDir),
  });

  const outputProduction = async () => {
    const code = await compressCode(rawCode);
    await writeFile(
      pathJoin(rootDir, 'out', 'serviceWorker.js'),
      code,
      'utf-8',
    );
  };

  const outputDev = async () => {
    const code = await prettierCode(rawCode);
    await writeFile(
      pathJoin(rootDir, 'out', 'serviceWorker.dev.js'),
      code,
      'utf-8',
    );
  };

  await Promise.all([
    outputProduction(),
    process.env.NODE_ENV !== 'production' && outputDev(),
  ]);
};
