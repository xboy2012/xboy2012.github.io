/* @jest-environment node */
// avoid define global window to simulate behavior in Node.js Server

import { useNoJs } from './useNoJs';

describe('useNoJs should work as expected in Node.js Server', () => {
  test('should return as expected', () => {
    const { noJsClassName, noJsScript } = useNoJs();
    expect(noJsClassName).toBeTruthy();
    expect(noJsScript).toBeTruthy();
  });
});
