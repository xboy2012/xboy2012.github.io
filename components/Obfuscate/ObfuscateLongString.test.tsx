import { render, screen } from '@testing-library/react';
import { ObfuscateLongString } from './ObfuscateLongString';
import { useMounted } from '../../src/hooks/useMounted';

jest.mock('../../src/hooks/useMounted');

jest.mock('./InitialObfuscateLongString', () => ({
  InitialObfuscateLongString: () => <div>InitialObfuscateLongString</div>,
}));

jest.mock('./CssObfuscateLongString', () => ({
  CssObfuscateLongString: () => <div>CssObfuscateLongString</div>,
}));

describe('ObfuscateLongString', () => {
  let mounted: boolean;

  beforeAll(() => {
    jest.mocked(useMounted).mockImplementation(() => mounted);
  });

  test('should render mounted=false', () => {
    mounted = false;
    render(<ObfuscateLongString text="text" />);
    expect(screen.getByText('InitialObfuscateLongString')).toBeInTheDocument();
  });

  test('should render mounted=true', () => {
    mounted = true;
    render(<ObfuscateLongString text="text" />);
    expect(screen.getByText('CssObfuscateLongString')).toBeInTheDocument();
  });
});
