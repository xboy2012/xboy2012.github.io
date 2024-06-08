import 'whatwg-fetch';
import { outputJSON } from './outputJSON';
import { calculateDataHash } from './calculateDataHash';

describe('outputJSON test', () => {
  test('should work as expected', async () => {
    const data = {
      b: Math.random(),
      a: Math.random(),
    };

    const response = outputJSON(data);
    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toBe('application/json');

    const hash = calculateDataHash(data);
    const text = await response.text();

    const expected = JSON.stringify(
      {
        data: {
          a: data.a,
          b: data.b,
        },
        hash,
      },
      null,
      2,
    );
    expect(text).toBe(expected);
  });
});
