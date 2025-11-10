import { getFixedPageUrl } from './getFixedPageUrl';
import { PROD_BASE_URL } from '../config/app';
import type { PathString } from '../types';

const p = (pathname: PathString) => {
  return { pathname, href: `${PROD_BASE_URL}${pathname}` };
};

describe('getFixedPageUrl() should work as expected', () => {
  const noNeedFixes: PathString[] = ['/', '/resume/', '/portfolio/', '/blog/'];

  for (const value of noNeedFixes) {
    it(`no need to fix for "${value}"`, () => {
      expect(getFixedPageUrl(p(value))).toBeUndefined();
    });
  }

  const needFixes: [PathString, PathString][] = [
    ['/index', '/'],
    ['/index.html', '/'],
    ['/resume', '/resume/'],
    ['/resume/index', '/resume/'],
    ['/resume/index.html', '/resume/'],
    ['/portfolio', '/portfolio/'],
    ['/portfolio/index', '/portfolio/'],
    ['/portfolio/index.html', '/portfolio/'],
    ['/blog', '/blog/'],
    ['/blog/index', '/blog/'],
    ['/blog/index.html', '/blog/'],
  ];

  for (const [value, fixed] of needFixes) {
    it(`fix "${value}"`, () => {
      expect(getFixedPageUrl(p(value))!.pathname).toBe(fixed);
    });
  }
});
