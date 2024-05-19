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
  test('should keep original url if no already formatted', async () => {
    const param = mockParam('https://www.example.com/');
    const result = await formatPage.cacheKeyWillBeUsed!(param);
    expect(result).toBe(param.request);
  });

  test('should format irregular url', async () => {
    const t = (url: string) => formatPage.cacheKeyWillBeUsed!(mockParam(url));
    const t2 = async (url: string) => {
      const req = await formatPage.requestWillFetch!(mockParam(url));
      return req.url;
    };
    expect(await t('https://www.example.com/index')).toBe(
      'https://www.example.com/',
    );
    expect(await t('https://www.example.com/index.html')).toBe(
      'https://www.example.com/',
    );
    expect(await t2('https://www.example.com/index')).toBe(
      'https://www.example.com/',
    );
    expect(await t2('https://www.example.com/index.html')).toBe(
      'https://www.example.com/',
    );
  });

  test('skip processing', async () => {
    const param = mockParam('https://www.example.com/bcdef.js');
    expect(await formatPage.cacheKeyWillBeUsed!(param)).toBe(param.request);
    expect(await formatPage.requestWillFetch!(param)).toBe(param.request);
  });
});
