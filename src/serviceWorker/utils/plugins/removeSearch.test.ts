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
  it('should keep original url if no search param', async () => {
    const param = mockParam('https://www.example.com/');
    const result1 = await removeSearch.cacheKeyWillBeUsed!(param);
    expect(result1).toBe(param.request);
    const result2 = await removeSearch.requestWillFetch!(param);
    expect(result2).toBe(param.request);
  });

  it('should remove search param', async () => {
    const param = mockParam('https://www.example.com/?a=123');
    const result1 = await removeSearch.cacheKeyWillBeUsed!(param);
    expect(result1).toBe('https://www.example.com/');
    const result2 = await removeSearch.requestWillFetch!(param);
    expect(result2.url).toBe('https://www.example.com/');
  });
});
