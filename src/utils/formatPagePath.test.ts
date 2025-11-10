import { formatPagePath } from './formatPagePath';
import type { PathString } from '../types';

describe('formatPagePath() should work as expected', () => {
  const cases: [PathString, PathString[]][] = [
    ['/', ['/', '/index', '/index/', '/index.html']],
    [
      '/resume/',
      [
        '/resume',
        '/resume/',
        '/resume/index',
        '/resume/index/',
        '/resume/index.html',
      ],
    ],
    [
      '/portfolio/',
      [
        '/portfolio',
        '/portfolio/',
        '/portfolio/index',
        '/portfolio/index/',
        '/portfolio/index.html',
      ],
    ],
    [
      '/blog/',
      ['/blog', '/blog/', '/blog/index', '/blog/index/', '/blog/index.html'],
    ],
  ];

  for (const [expected, paths] of cases) {
    for (const path of paths) {
      it(`should resolve "${path}" to "${expected}"`, () => {
        expect(formatPagePath(path)).toBe(expected);
      });
    }
  }
});
