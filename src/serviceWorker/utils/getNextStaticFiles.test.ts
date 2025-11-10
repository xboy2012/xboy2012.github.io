import { getNextStaticFiles } from './getNextStaticFiles';

describe('getNextStaticFiles', () => {
  it('should return correctly', () => {
    const NEXT_STATIC_FILES = ['/_next/static/js-01234567.js'];
    // @ts-expect-error mock inject value
    global.NEXT_STATIC_FILES = NEXT_STATIC_FILES;

    const result1 = getNextStaticFiles();
    expect(result1).toEqual(NEXT_STATIC_FILES);
    const result2 = getNextStaticFiles();
    expect(result2).toBe(result1);
  });
});
