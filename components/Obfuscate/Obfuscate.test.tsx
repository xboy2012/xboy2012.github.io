import { render, screen } from '@testing-library/react';
import { Obfuscate } from '.';

describe('<Obfuscate /> should work as expected', () => {
  test('should secure string >= 4 correctly', () => {
    const str = Math.random().toString(36).substring(2);
    render(<Obfuscate text={str} />);
    expect(screen.queryAllByText(str)).toHaveLength(0);
  });

  test('should preserve raw string < 4', () => {
    const str = Math.random().toString(36).substring(2, 5);
    render(<Obfuscate text={str} />);
    expect(screen.getByText(str)).toBeInTheDocument();
  });
});
