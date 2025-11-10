import { interopRequireDefault, type Interoped } from './interopRequireDefault';

describe('interopRequireDefault() should work as expected', () => {
  const values = [undefined, null, true, false, 0, 100];

  it('top level value ""', () => {
    expect(interopRequireDefault('')).toBe('');
  });
  it('top level value NaN', () => {
    expect(interopRequireDefault(NaN)).toBeNaN();
  });
  it('top level value {}', () => {
    const obj = {};
    expect(interopRequireDefault(obj)).toBe(obj);
  });
  for (const value of values) {
    it(`top level value ${value}`, () => {
      expect(interopRequireDefault(value)).toBe(value);
    });
  }

  it('default export value ""', () => {
    expect(interopRequireDefault({ default: '' })).toBe('');
  });
  it('default export value NaN', () => {
    expect(interopRequireDefault({ default: NaN })).toBeNaN();
  });
  it('default export value {}', () => {
    const obj = {};
    expect(interopRequireDefault({ default: obj })).toBe(obj);
  });
  for (const value of values) {
    it(`default export value ${value}`, () => {
      expect(interopRequireDefault({ default: value })).toBe(value);
    });
  }

  const validateTypes = () => {
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
  };

  it('types', () => {
    expect(validateTypes).not.toThrow();
  });
});
