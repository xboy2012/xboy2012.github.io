import { getFixedPageUrl } from './getFixedPageUrl';
import { PROD_BASE_URL } from '../config/app';
import type { PathString } from '../types';

const p = (pathname: PathString) => {
  return { pathname, href: `${PROD_BASE_URL}${pathname}` };
};

describe('getFixedPageUrl() should work as expected', () => {
  test('no need to fix', () => {
    expect(getFixedPageUrl(p('/'))).toBeUndefined();
    expect(getFixedPageUrl(p('/resume/'))).toBeUndefined();
    expect(getFixedPageUrl(p('/portfolio/'))).toBeUndefined();
    expect(getFixedPageUrl(p('/blog/'))).toBeUndefined();
  });

  test('fix', () => {
    expect(getFixedPageUrl(p('/index'))!.pathname).toBe('/');
    expect(getFixedPageUrl(p('/index.html'))!.pathname).toBe('/');
    expect(getFixedPageUrl(p('/resume'))!.pathname).toBe('/resume/');
    expect(getFixedPageUrl(p('/resume/index'))!.pathname).toBe('/resume/');
    expect(getFixedPageUrl(p('/resume/index.html'))!.pathname).toBe('/resume/');
    expect(getFixedPageUrl(p('/portfolio'))!.pathname).toBe('/portfolio/');
    expect(getFixedPageUrl(p('/portfolio/index'))!.pathname).toBe(
      '/portfolio/',
    );
    expect(getFixedPageUrl(p('/portfolio/index.html'))!.pathname).toBe(
      '/portfolio/',
    );
    expect(getFixedPageUrl(p('/blog'))!.pathname).toBe('/blog/');
    expect(getFixedPageUrl(p('/blog/index'))!.pathname).toBe('/blog/');
    expect(getFixedPageUrl(p('/blog/index.html'))!.pathname).toBe('/blog/');
  });
});
