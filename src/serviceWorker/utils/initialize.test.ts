import type { RouteMatchCallback, RouteHandlerObject } from 'workbox-core';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { initialize } from './initialize';
import { CACHE_NAME_HASH, CACHE_NAME_NO_HASH } from './cacheNames';

jest.mock('workbox-routing', () => {
  return { registerRoute: jest.fn() };
});

jest.mock('workbox-strategies', () => {
  return { CacheFirst: jest.fn() };
});

describe('service worker initialize test', () => {
  test('should be able to initialize', async () => {
    // @ts-expect-error mock inject value
    global.NEXT_STATIC_FILES = ['/_next/static/js-01234567.js'];
    // @ts-expect-error mock inject value
    global.HASH_INFO = [[['/', 'aaa', 'bbb']], [['/favicon.ico', 'ccc']]];

    const eventHandlers = new Map<string, (() => void)[]>();

    const self = {
      addEventListener: (type: string, handler: () => void) => {
        let list = eventHandlers.get(type);
        if (!list) {
          list = [];
          eventHandlers.set(type, list);
        }
        list.push(handler);
      },
      skipWaiting: jest.fn(),
      caches: {
        open: jest.fn(() =>
          Promise.resolve({
            keys: jest.fn(() => Promise.resolve([])),
            addAll: jest.fn(),
            delete: jest.fn(),
          }),
        ),
      },
    } as unknown as ServiceWorkerGlobalScope;

    const mockRoutes: [RouteMatchCallback, () => Promise<string>][] = [];

    const mockRequest = async (
      path: string,
      sameOrigin: boolean,
    ): Promise<string | undefined> => {
      const event = {} as unknown as ExtendableEvent;
      const url = new URL(`https://www.example.com${path}`);
      const request = {} as unknown as Request;
      const options = {
        event,
        request,
        url,
        sameOrigin,
      };
      const matchedRoute = mockRoutes.find(([capture]) => capture(options));
      if (!matchedRoute) {
        return undefined;
      }
      const [, handler] = matchedRoute;
      return handler();
    };

    const mockRegisterRoute = (
      capture: RouteMatchCallback,
      handler: RouteHandlerObject,
    ) => {
      mockRoutes.push([
        capture,
        handler.handle as unknown as () => Promise<string>,
      ]);
    };

    const mockCacheFirst = ({ cacheName }: { cacheName: string }) => {
      return {
        handle: async () => {
          return cacheName;
        },
      };
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jest.mocked(registerRoute).mockImplementation(mockRegisterRoute as any);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jest.mocked(CacheFirst).mockImplementation(mockCacheFirst as any);

    initialize(self);

    const installHandlers = eventHandlers.get('install');
    expect(installHandlers).toBeTruthy();
    for (const handler of installHandlers!) {
      handler();
    }

    expect(self.skipWaiting).toHaveBeenCalled();

    // should use correct cache names
    expect(await mockRequest('/', true)).toBe(CACHE_NAME_NO_HASH);
    expect(await mockRequest('/?_=123', true)).toBe(CACHE_NAME_NO_HASH);
    expect(await mockRequest('/index', true)).toBe(CACHE_NAME_NO_HASH);
    expect(await mockRequest('/index?_=123', true)).toBe(CACHE_NAME_NO_HASH);
    expect(await mockRequest('/index.html', true)).toBe(CACHE_NAME_NO_HASH);
    expect(await mockRequest('/index.html?_=123', true)).toBe(
      CACHE_NAME_NO_HASH,
    );
    expect(await mockRequest('/index.txt', true)).toBe(CACHE_NAME_NO_HASH);
    expect(await mockRequest('/index.txt?_=123', true)).toBe(
      CACHE_NAME_NO_HASH,
    );
    expect(await mockRequest('/favicon.ico', true)).toBe(CACHE_NAME_NO_HASH);
    expect(await mockRequest('/_next/static/js-01234567.js', true)).toBe(
      CACHE_NAME_HASH,
    );
    expect(await mockRequest('/invalid', true)).toBeUndefined();
    expect(await mockRequest('/', false)).toBeUndefined();
  });
});
