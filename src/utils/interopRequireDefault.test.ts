import { interopRequireDefault } from './interopRequireDefault';

describe('interopRequireDefault() should work as expected', () => {
  test('top level values', () => {
    expect(interopRequireDefault('')).toBe('');
    expect(interopRequireDefault(undefined)).toBe(undefined);
    expect(interopRequireDefault(null)).toBe(null);
    expect(interopRequireDefault(true)).toBe(true);
    expect(interopRequireDefault(false)).toBe(false);
    expect(interopRequireDefault(NaN)).toBeNaN();
    expect(interopRequireDefault(0)).toBe(0);
    expect(interopRequireDefault(100)).toBe(100);

    const obj = {};
    expect(interopRequireDefault(obj)).toBe(obj);
  });

  test('default export values', () => {
    expect(interopRequireDefault({ default: '' })).toBe('');
    expect(interopRequireDefault({ default: undefined })).toBe(undefined);
    expect(interopRequireDefault({ default: null })).toBe(null);
    expect(interopRequireDefault({ default: true })).toBe(true);
    expect(interopRequireDefault({ default: false })).toBe(false);
    expect(interopRequireDefault({ default: NaN })).toBeNaN();
    expect(interopRequireDefault({ default: 0 })).toBe(0);
    expect(interopRequireDefault({ default: 100 })).toBe(100);

    const obj = {};
    expect(interopRequireDefault({ default: obj })).toBe(obj);
  });
});
