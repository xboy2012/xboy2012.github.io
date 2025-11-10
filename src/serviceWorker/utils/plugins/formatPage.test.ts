import { formatPage } from './formatPage';

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
  it('should keep original url if no already formatted', async () => {
    const param = mockParam('https://www.example.com/');
    const result = await formatPage.cacheKeyWillBeUsed!(param);
    expect(result).toBe(param.request);
  });

  const validCases: [string, string][] = [
    ['https://www.example.com/index', 'https://www.example.com/'],
    ['https://www.example.com/index.html', 'https://www.example.com/'],
  ];

  for (const [url, expected] of validCases) {
    it(`cacheKeyWillBeUsed should work for ${url}`, async () => {
      const value = await formatPage.cacheKeyWillBeUsed!(mockParam(url));
      expect(value).toBe(expected);
    });

    it(`requestWillFetch should work for ${url}`, async () => {
      const req = await formatPage.requestWillFetch!(mockParam(url));
      expect(req.url).toBe(expected);
    });
  }

  it('skip processing', async () => {
    const param = mockParam('https://www.example.com/bcdef.js');
    expect(await formatPage.cacheKeyWillBeUsed!(param)).toBe(param.request);
    expect(await formatPage.requestWillFetch!(param)).toBe(param.request);
  });
});
