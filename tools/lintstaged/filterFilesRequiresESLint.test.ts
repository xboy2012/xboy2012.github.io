import { filterFilesRequiresESLint } from './filterFilesRequiresESLint';

jest.mock('eslint', () => {
  // eslint-disable-next-line xboy2012/no-class -- required to mock eslint
  class ESLint {
    async isPathIgnored(path: string) {
      return path.startsWith('/ignored/');
    }
  }
  return { ESLint };
});

describe('filterFilesRequiresESLint', () => {
  it('ignored', async () => {
    const result = await filterFilesRequiresESLint(['/ignored/1.ts']);
    expect(result).toEqual([]);
  });

  it('tracked', async () => {
    const result = await filterFilesRequiresESLint(['/tracked/2.ts']);
    expect(result).toEqual(['/tracked/2.ts']);
  });

  it('mixed cases', async () => {
    const result = await filterFilesRequiresESLint([
      '/ignored/1.ts',
      '/tracked/2.ts',
    ]);
    expect(result).toEqual(['/tracked/2.ts']);
  });
});
