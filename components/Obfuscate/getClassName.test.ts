import { getClassName } from './getClassName';

describe('getClassName', () => {
  it('return empty if empty text', () => {
    expect(getClassName('')).toBe('');
  });

  it('return correct className', () => {
    // first-time
    expect(getClassName('to_be_processed')).toBe('obfuscate-1');
    // second-time
    expect(getClassName('to_be_processed')).toBe('obfuscate-1');
  });

  it('return correct className for text with length=1', () => {
    expect(getClassName('X')).toBe('obfuscate-2');
  });
});
