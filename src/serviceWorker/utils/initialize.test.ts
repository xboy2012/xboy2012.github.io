import type { RouteMatchCallback, RouteHandlerObject } from 'workbox-core';
import { registerRoute } from 'workbox-routing';
import { initialize } from './initialize';
import { CACHE_NAME_HASH, CACHE_NAME_NO_HASH } from './cacheNames';
import type { PathString } from '../../types';

jest.mock('workbox-routing', () => {
  return { registerRoute: jest.fn() };
});

jest.mock('workbox-strategies', () => {
  // Mock the CacheFirst implementation
  function MockCacheFirst(
    this: { handle: () => string },
    { cacheName }: { cacheName: string },
  ) {
    this.handle = function () {
      return cacheName;
    };
  }

  return {
    CacheFirst: MockCacheFirst,
  };
});

describe('service worker initialize test', () => {
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
    path: PathString,
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

  beforeAll(() => {
    // @ts-expect-error mock inject value
    global.NEXT_STATIC_FILES = ['/_next/static/js-01234567.js'];
    // @ts-expect-error mock inject value
    global.HASH_INFO = [[['/', 'aaa', 'bbb']], [['/favicon.ico', 'ccc']]];
    jest
      .mocked(registerRoute)
      .mockImplementation(mockRegisterRoute as typeof registerRoute);

    initialize(self);
  });

  it('should have install handlers', () => {
    const installHandlers = eventHandlers.get('install');
    expect(installHandlers).toBeTruthy();
    expect(installHandlers!.length).toBeGreaterThan(0);
  });

  it('should be able to initialize', async () => {
    const installHandlers = eventHandlers.get('install');
    for (const handler of installHandlers!) {
      handler();
    }

    expect(self.skipWaiting).toHaveBeenCalled();
  });

  const requestCachesNoHash: PathString[] = [
    '/',
    '/?_=123',
    '/index',
    '/index?_=123',
    '/index.html',
    '/index.html?_=123',
    '/index.txt',
    '/index.txt?_=123',
    '/favicon.ico',
  ];

  for (const path of requestCachesNoHash) {
    it(`should use cache "${CACHE_NAME_NO_HASH}" for "${path}"`, async () => {
      expect(await mockRequest(path, true)).toBe(CACHE_NAME_NO_HASH);
    });
  }

  const requestCachesHash: PathString[] = ['/_next/static/js-01234567.js'];

  for (const path of requestCachesHash) {
    it(`should use cache "${CACHE_NAME_HASH}" for "${path}"`, async () => {
      expect(await mockRequest(path, true)).toBe(CACHE_NAME_HASH);
    });
  }

  it('should handle invalid request path cache', async () => {
    expect(await mockRequest('/invalid', true)).toBeUndefined();
  });

  it('should handle cross domain request cache', async () => {
    expect(await mockRequest('/', false)).toBeUndefined();
  });
});
