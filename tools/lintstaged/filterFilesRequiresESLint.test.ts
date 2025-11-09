import { filterFilesRequiresESLint } from './filterFilesRequiresESLint';

jest.mock('eslint', () => {
  class ESLint {
    async isPathIgnored(path: string) {
      return path.startsWith('/ignored/');
    }
  }
  return { ESLint };
});

describe('filterFilesRequiresESLint', () => {
  test('ignored', async () => {
    const result = await filterFilesRequiresESLint(['/ignored/1.ts']);
    expect(result).toEqual([]);
  });

  test('tracked', async () => {
    const result = await filterFilesRequiresESLint(['/tracked/2.ts']);
    expect(result).toEqual(['/tracked/2.ts']);
  });

  test('mixed cases', async () => {
    const result = await filterFilesRequiresESLint([
      '/ignored/1.ts',
      '/tracked/2.ts',
    ]);
    expect(result).toEqual(['/tracked/2.ts']);
  });
});
