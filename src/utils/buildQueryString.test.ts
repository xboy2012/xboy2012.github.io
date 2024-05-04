import { buildQueryString } from './buildQueryString';

describe('buildQueryString', () => {
  test('should build query string correctly with valid key-value pairs', () => {
    const query = {
      name: 'John',
      age: '30',
    };
    const queryString = buildQueryString(query);
    expect(queryString).toBe('name=John&age=30');
  });

  test('should handle undefined, null values and empty string correctly', () => {
    const query = {
      '': 'abc',
      emptyStringValue: '',
      undefinedValue: undefined,
      nullValue: null,
    };
    const queryString = buildQueryString(query);
    expect(queryString).toBe('');
  });

  test('should handle empty object correctly', () => {
    expect(buildQueryString({})).toBe('');
  });

  test('should handle special characters in values correctly', () => {
    const query = {
      'ID Number': '123',
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'admin',
    };
    const queryString = buildQueryString(query);
    expect(queryString).toBe(
      'ID+Number=123&name=John+Doe&email=john.doe%40example.com&role=admin',
    );
  });
});
