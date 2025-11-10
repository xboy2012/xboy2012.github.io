import { capturePageRscRoutes } from './capturePageRscRoutes';

describe('capture test', () => {
  it('should skip cross origin request', () => {
    const event = {} as unknown as ExtendableEvent;
    const url = new URL('https://www.example.com');
    const request = {} as unknown as Request;
    const options = { event, request, url, sameOrigin: false };
    expect(capturePageRscRoutes(options)).toBe(false);
  });

  it('should fall through path check', () => {
    // @ts-expect-error mock inject value
    global.HASH_INFO = [[['/', 'aaa', 'bbb']], [['/favicon.ico', 'ccc']]];
    const event = {} as unknown as ExtendableEvent;
    const url = new URL('https://www.example.com/index.txt');
    const request = {} as unknown as Request;
    const options = { event, request, url, sameOrigin: true };
    expect(capturePageRscRoutes(options)).toBe(true);
  });
});
