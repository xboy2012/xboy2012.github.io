import { formatDateTime } from './formatDateTime';

describe('formatDateTime', () => {
  test('should format date correctly', () => {
    expect(formatDateTime('2024-01-01')).toBe('Jan 01, 2024');
    expect(formatDateTime('2024-02-01')).toBe('Feb 01, 2024');
    expect(formatDateTime('2024-03-01')).toBe('Mar 01, 2024');
    expect(formatDateTime('2024-04-01')).toBe('Apr 01, 2024');
    expect(formatDateTime('2024-05-01')).toBe('May 01, 2024');
    expect(formatDateTime('2024-06-01')).toBe('Jun 01, 2024');
    expect(formatDateTime('2024-07-01')).toBe('Jul 01, 2024');
    expect(formatDateTime('2024-08-01')).toBe('Aug 01, 2024');
    expect(formatDateTime('2024-09-01')).toBe('Sep 01, 2024');
    expect(formatDateTime('2024-10-01')).toBe('Oct 01, 2024');
    expect(formatDateTime('2024-11-01')).toBe('Nov 01, 2024');
    expect(formatDateTime('2024-12-01')).toBe('Dec 01, 2024');
  });
});
