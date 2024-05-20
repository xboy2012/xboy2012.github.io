import { capturePublicAssets } from './capturePublicAssets';

describe('capture test', () => {
  test('should skip cross origin request', () => {
    const event = {} as unknown as ExtendableEvent;
    const url = new URL('https://www.example.com');
    const request = {} as unknown as Request;
    const options = { event, request, url, sameOrigin: false };
    expect(capturePublicAssets(options)).toBe(false);
  });

  test('should fall through path check', () => {
    // @ts-expect-error mock inject value
    global.HASH_INFO = [[['/', 'aaa', 'bbb']], [['/favicon.ico', 'ccc']]];
    const event = {} as unknown as ExtendableEvent;
    const url = new URL('https://www.example.com/favicon.ico');
    const request = {} as unknown as Request;
    const options = { event, request, url, sameOrigin: true };
    expect(capturePublicAssets(options)).toBe(true);
  });
});
