import { capturePageRoutes } from './capturePageRoutes';

describe('capture test', () => {
  test('should skip cross origin request', () => {
    const event = {} as unknown as ExtendableEvent;
    const url = new URL('https://www.example.com');
    const request = {} as unknown as Request;
    const options = { event, request, url, sameOrigin: false };
    expect(capturePageRoutes(options)).toBe(false);
  });

  test('should fall through path check', () => {
    const event = {} as unknown as ExtendableEvent;
    const url = new URL('https://www.example.com');
    const request = {} as unknown as Request;
    const options = { event, request, url, sameOrigin: true };
    expect(capturePageRoutes(options)).toBe(true);
  });
});
