// import { registerRoute } from 'workbox-routing';
// import { CacheFirst } from 'workbox-strategies';
import { initialize } from './initialize';

jest.mock('workbox-routing', () => {
  return {
    registerRoute: jest.fn(),
  };
});

jest.mock('workbox-strategies', () => {
  return {
    CacheFirst: jest.fn(),
  };
});

describe('service worker initialize test', () => {
  test('should be able to initialize', () => {
    // @ts-expect-error mock inject value
    global.NON_HASHED_PATHS = [['/', 'abc']];
    // @ts-expect-error mock inject value
    global.NEXT_STATIC_FILES = ['a.js'];

    let installHandler: (() => void) | undefined;

    const self = {
      addEventListener: (type: string, handler: () => void) => {
        if (type === 'install') {
          installHandler = handler;
        }
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
    };

    initialize(self as unknown as ServiceWorkerGlobalScope);

    expect(installHandler).toBeTruthy();
    installHandler!();
    expect(self.skipWaiting).toHaveBeenCalled();
  });
});
