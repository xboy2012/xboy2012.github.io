import { addHashQuery } from './addHashQuery';

const mockParam = (url: string) => {
  const request = { url } as unknown as Request;
  const event = {} as unknown as ExtendableEvent;
  return { mode: 'read', request, event };
};

describe('addHashQuery test', () => {
  beforeAll(() => {
    // @ts-expect-error mock inject value
    global.NON_HASHED_PATHS = [['/', 'abc']];
  });

  test('add hash tags', async () => {
    const param = mockParam('https://www.example.com/');
    const result = await addHashQuery.cacheKeyWillBeUsed!(param);
    expect(result).toBe('https://www.example.com/?_=abc');
  });

  test('skip processing', async () => {
    const param = mockParam('https://www.example.com/bcdef');
    const result = await addHashQuery.cacheKeyWillBeUsed!(param);
    expect(result).toBe(param.request);
  });
});
