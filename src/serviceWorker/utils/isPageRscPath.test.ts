import { isPageRscPath } from './isPageRscPath';
import type { PathString } from '../../types';

describe('isPageRscPath() should work as expected', () => {
  beforeAll(() => {
    // @ts-expect-error mock inject value
    global.HASH_INFO = [
      [
        ['/', 'aaa', 'bbb'],
        ['/a/', 'ddd', 'eee'],
      ],
      [['/favicon.ico', 'ccc']],
    ];
  });

  const validCases: PathString[] = ['/index.txt', '/a/index.txt'];

  for (const path of validCases) {
    it(`valid case "${path}"`, () => {
      expect(isPageRscPath(path)).toBe(true);
    });
  }

  const hash = Math.random().toString(36).substring(2);
  const invalidCases: PathString[] = [
    `/_next/static/media/img.${hash}.jpg`,
    '/',
    '/invalid',
    '/invalid/index.txt',
    '/favicon.ico',
    '/manifest.webmanifest',
    '/serviceWorker.js',
  ];

  for (const path of invalidCases) {
    it(`invalid case "${path}"`, () => {
      expect(isPageRscPath(path)).toBe(false);
    });
  }
});
