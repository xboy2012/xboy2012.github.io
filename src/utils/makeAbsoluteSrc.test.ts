import { makeAbsoluteSrc } from './makeAbsoluteSrc';

describe('makeAbsoluteSrc', () => {
  const mockImport = async (path: string) => `https://example.com/${path}`;

  it('should handle import("...")', async () => {
    const result = await makeAbsoluteSrc<'url', { url: string }>('url', [
      { url: mockImport('image.png') },
    ]);
    expect(result).toEqual([{ url: 'https://example.com/image.png' }]);
  });

  it('should handle importedResult', async () => {
    const importedResult = await mockImport('image.png');
    const result = await makeAbsoluteSrc<'url', { url: string }>('url', [
      { url: importedResult },
    ]);
    expect(result).toEqual([{ url: 'https://example.com/image.png' }]);
  });

  it('should handle () => import("...")', async () => {
    const result = await makeAbsoluteSrc<'url', { url: string }>('url', [
      { url: () => mockImport('image.png') },
    ]);
    expect(result).toEqual([{ url: 'https://example.com/image.png' }]);
  });

  it('should handle () => importedResult)', async () => {
    const importedResult = await mockImport('image.png');
    const result = await makeAbsoluteSrc<'url', { url: string }>('url', [
      { url: () => importedResult },
    ]);
    expect(result).toEqual([{ url: 'https://example.com/image.png' }]);
  });
});
