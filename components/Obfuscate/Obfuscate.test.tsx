import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Obfuscate } from './Obfuscate';

describe('<Obfuscate /> should work as expected', () => {
  test('<Obfuscate /> should secure string correctly', () => {
    const str = Math.random().toString(36).substring(2);
    render(<Obfuscate text={str} />);
    expect(screen.queryAllByAltText(str)).toHaveLength(0);
  });
});
