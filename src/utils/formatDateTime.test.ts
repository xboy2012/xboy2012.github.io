import { formatDateTime } from './formatDateTime';

describe('formatDateTime', () => {
  const cases: [`${string}-${string}-${string}`, string][] = [
    ['2024-01-01', 'Jan 01, 2024'],
    ['2024-02-01', 'Feb 01, 2024'],
    ['2024-03-01', 'Mar 01, 2024'],
    ['2024-04-01', 'Apr 01, 2024'],
    ['2024-05-01', 'May 01, 2024'],
    ['2024-06-01', 'Jun 01, 2024'],
    ['2024-07-01', 'Jul 01, 2024'],
    ['2024-08-01', 'Aug 01, 2024'],
    ['2024-09-01', 'Sep 01, 2024'],
    ['2024-10-01', 'Oct 01, 2024'],
    ['2024-11-01', 'Nov 01, 2024'],
    ['2024-12-01', 'Dec 01, 2024'],
  ];

  for (const [input, output] of cases) {
    it(`should format "${input}" -> "${output}"`, () => {
      expect(formatDateTime(input)).toBe(output);
    });
  }
});
