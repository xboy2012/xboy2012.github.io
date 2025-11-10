import { isPagePath } from './isPagePath';
import type { PathString } from '../../types';

describe('isPagePath() should work as expected', () => {
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

  const whitelist: PathString[] = [
    '/',
    '/index',
    '/index.html',
    '/a',
    '/a/',
    '/a/index',
    '/a/index.html',
  ];

  for (const path of whitelist) {
    it(`whitelist page path "${path}"`, () => {
      expect(isPagePath(path)).toBe(true);
    });
  }

  const hash = Math.random().toString(36).substring(2);
  const others: PathString[] = [
    `/_next/static/media/img.${hash}.jpg`,
    '/favicon.ico',
    '/manifest.webmanifest',
    '/serviceWorker.js',
    '/index.txt',
    '/resume/index.txt',
    '/portfolio/index.txt',
    '/blog/index.txt',
    '/invalid-path',
  ];

  for (const path of others) {
    it(`other path "${path}"`, () => {
      expect(isPagePath(path)).toBe(false);
    });
  }
});
