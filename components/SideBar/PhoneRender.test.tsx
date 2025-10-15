import { render, screen } from '@testing-library/react';
import { PhoneRender } from './PhoneRender';
import { useMounted } from '../../src/hooks/useMounted';
import { preventDefault } from '../../src/utils/preventDefault';

jest.mock('../../src/hooks/useMounted');
jest.mock('../../src/utils/preventDefault', () => ({
  preventDefault: jest.fn(),
}));

jest.mock('../../src/utils/displayPhoneCA', () => ({
  displayPhoneCA: (phone: string) => phone,
}));

jest.mock('../Obfuscate', () => ({
  Obfuscate: () => <div>Obfuscate</div>,
}));

describe('PhoneRender', () => {
  let mounted: boolean;

  beforeAll(() => {
    jest.mocked(useMounted).mockImplementation(() => mounted);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly mounted=false', () => {
    mounted = false;
    const phoneCA = '123456';
    render(<PhoneRender phoneCA={phoneCA} />);
    expect(screen.getByText('Obfuscate')).toBeInTheDocument();
    const anchor = screen.getByRole('link');
    expect(anchor).toHaveAttribute('href', '#');
    anchor.click();
    expect(preventDefault).toHaveBeenCalled();
  });

  it('renders correctly mounted=true', () => {
    mounted = true;
    const phoneCA = '123456';
    render(<PhoneRender phoneCA={phoneCA} />);
    expect(screen.getByText('Obfuscate')).toBeInTheDocument();

    const href = `tel:${phoneCA}`;
    const anchor = screen.getByRole('link');
    expect(anchor).toHaveAttribute('href', href);
    anchor.click();
    expect(preventDefault).not.toHaveBeenCalled();
  });
});
