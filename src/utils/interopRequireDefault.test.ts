import { interopRequireDefault, type Interoped } from './interopRequireDefault';

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

  test('types', () => {
    type Equal<A, B> =
      (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
        ? true
        : false;

    // assert if two types are strictly equal.
    const assertType = <T, P>(
      ...args: Equal<T, P> extends true ? [] : ['❌ Types are not equal']
    ) => args && undefined;

    // nullish
    assertType<Interoped<null>, null>();
    assertType<Interoped<undefined>, undefined>();
    // numbers
    assertType<Interoped<number>, number>();
    assertType<Interoped<0>, 0>();
    assertType<Interoped<123>, 123>();

    // strings
    assertType<Interoped<string>, string>();
    assertType<Interoped<''>, ''>();
    assertType<Interoped<'abc'>, 'abc'>();
    assertType<Interoped<`${number}`>, `${number}`>();

    // booleans
    assertType<Interoped<boolean>, boolean>();
    assertType<Interoped<true>, true>();
    assertType<Interoped<false>, false>();

    // object
    assertType<Interoped<{ a: 1 }>, { a: 1 }>();

    // wrapped
    assertType<Interoped<{ default: undefined }>, undefined>();
    assertType<Interoped<{ default: null }>, null>();
    assertType<Interoped<{ default: number }>, number>();
    assertType<Interoped<{ default: boolean }>, boolean>();
    assertType<Interoped<{ default: string }>, string>();

    // complicated cases
    assertType<Interoped<string | number>, string | number>();
    assertType<Interoped<'abc' | 123>, 'abc' | 123>();
    assertType<Interoped<{ default?: string }>, string | undefined>();
    assertType<Interoped<{ default: string } | null>, string | null>();
    assertType<Interoped<{ default: string } | number>, string | number>();
    assertType<Interoped<{ default: string | number }>, string | number>();
    assertType<
      Interoped<{ default: string } | { default: number }>,
      string | number
    >();
  });
});
