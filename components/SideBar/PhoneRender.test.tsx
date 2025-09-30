import { render, screen } from '@testing-library/react';
import { PhoneRender } from './PhoneRender';

jest.mock('../../src/utils/displayPhoneCA', () => ({
  displayPhoneCA: (phone: string) => phone,
}));

jest.mock('../Obfuscate', () => ({
  Obfuscate: ({ text }: { text: string }) => <div>{text}</div>,
}));

describe('PhoneRender', () => {
  it('renders correctly', () => {
    const phoneCA = '123456';
    render(<PhoneRender phoneCA={phoneCA} />);
    expect(screen.getByText(phoneCA)).toBeInTheDocument();

    const href = `tel:${phoneCA}`;
    expect(screen.getByRole('link')).toHaveAttribute('href', href);
  });
});
