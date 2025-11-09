import { filterFilesRequiresPrettier } from './filterFilesRequiresPrettier';

jest.mock('prettier', () => {
  const getInferredParser = (filePath: string): string | undefined => {
    if (filePath.endsWith('.ts')) {
      return 'babel';
    }
    return undefined;
  };

  const getFileInfo = async (filePath: string) => {
    const ignored = filePath.startsWith('/ignored/');
    const inferredParser = getInferredParser(filePath);
    return { ignored, inferredParser };
  };

  return { getFileInfo };
});

describe('filterFilesRequiresPrettier', () => {
  test('ignored', async () => {
    const result = await filterFilesRequiresPrettier(['/ignored/1.ts']);
    expect(result).toEqual([]);
  });

  test('unknown parser', async () => {
    const result = await filterFilesRequiresPrettier(['/tracked/1.unknown']);
    expect(result).toEqual([]);
  });

  test('tracked', async () => {
    const result = await filterFilesRequiresPrettier(['/tracked/1.ts']);
    expect(result).toEqual(['/tracked/1.ts']);
  });

  test('mixed cases', async () => {
    const result = await filterFilesRequiresPrettier([
      '/ignored/1.ts',
      '/ignored/2.unknown',
      '/tracked/3.ts',
      '/tracked/4.unknown',
    ]);
    expect(result).toEqual(['/tracked/3.ts']);
  });
});
