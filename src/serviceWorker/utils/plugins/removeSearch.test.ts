import { removeSearch } from './removeSearch';

jest.mock('../replaceRequestUrl', () => {
  return {
    replaceRequestUrl: jest.fn((request: Request, newUrl: string) => {
      return { ...request, url: newUrl } as unknown as Request;
    }),
  };
});

const mockParam = (url: string) => {
  const request = { url } as unknown as Request;
  const event = {} as unknown as ExtendableEvent;
  return { mode: 'read', request, event };
};

describe('formatPage test', () => {
  test('should keep original url if no search param', async () => {
    const param = mockParam('https://www.example.com/');
    expect(await removeSearch.cacheKeyWillBeUsed!(param)).toBe(param.request);
    expect(await removeSearch.requestWillFetch!(param)).toBe(param.request);
  });

  test('should remove search param', async () => {
    const param = mockParam('https://www.example.com/?a=123');
    expect(await removeSearch.cacheKeyWillBeUsed!(param)).toBe(
      'https://www.example.com/',
    );
    expect((await removeSearch.requestWillFetch!(param)).url).toBe(
      'https://www.example.com/',
    );
  });
});
