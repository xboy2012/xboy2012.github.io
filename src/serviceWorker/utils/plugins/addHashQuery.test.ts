import { addHashQuery } from './addHashQuery';

const mockParam = (url: string) => {
  const request = { url } as unknown as Request;
  const event = {} as unknown as ExtendableEvent;
  return { mode: 'read', request, event };
};

describe('addHashQuery test', () => {
  const indexHtmlHash = Math.random().toString(36).substring(2, 10);
  const indexTxtHash = Math.random().toString(36).substring(2, 10);

  beforeAll(() => {
    // @ts-expect-error mock inject value
    global.HASH_INFO = [
      [['/', indexHtmlHash, indexTxtHash]],
      [['/favicon.ico', 'ccc']],
    ];
  });

  test('add hash tags for index.html', async () => {
    const param = mockParam('https://www.example.com/');
    const result = await addHashQuery.cacheKeyWillBeUsed!(param);
    expect(result).toBe(`https://www.example.com/?_=${indexHtmlHash}`);
  });

  test('add hash tags for index.txt', async () => {
    const param = mockParam('https://www.example.com/index.txt');
    const result = await addHashQuery.cacheKeyWillBeUsed!(param);
    expect(result).toBe(`https://www.example.com/index.txt?_=${indexTxtHash}`);
  });

  test('skip processing', async () => {
    const param = mockParam('https://www.example.com/bcdef');
    const result = await addHashQuery.cacheKeyWillBeUsed!(param);
    expect(result).toBe(param.request);
  });
});
