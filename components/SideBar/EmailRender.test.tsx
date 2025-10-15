import { render, screen } from '@testing-library/react';
import { EmailRender } from './EmailRender';
import { useMounted } from '../../src/hooks/useMounted';
import { preventDefault } from '../../src/utils/preventDefault';

jest.mock('../../src/hooks/useMounted');
jest.mock('../../src/utils/preventDefault', () => ({
  preventDefault: jest.fn(),
}));

jest.mock('../Obfuscate', () => ({
  Obfuscate: () => <div>Obfuscate</div>,
}));

describe('EmailRender', () => {
  let mounted: boolean;

  beforeAll(() => {
    jest.mocked(useMounted).mockImplementation(() => mounted);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly mounted=false', () => {
    mounted = false;
    const email = 'example@example.com';
    render(<EmailRender email={email} />);
    expect(screen.getByText('Obfuscate')).toBeInTheDocument();
    const anchor = screen.getByRole('link');
    expect(anchor).toHaveAttribute('href', '#');
    anchor.click();
    expect(preventDefault).toHaveBeenCalled();
  });

  it('renders correctly mounted=true', () => {
    mounted = true;
    const email = 'example@example.com';
    render(<EmailRender email={email} />);
    expect(screen.getByText('Obfuscate')).toBeInTheDocument();
    const href = `mailto:${email}`;
    const anchor = screen.getByRole('link');
    expect(anchor).toHaveAttribute('href', href);
    anchor.click();
    expect(preventDefault).not.toHaveBeenCalled();
  });
});
