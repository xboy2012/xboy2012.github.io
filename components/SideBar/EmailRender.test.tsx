import { render, screen } from '@testing-library/react';
import { EmailRender } from './EmailRender';

jest.mock('../Obfuscate', () => ({
  Obfuscate: ({ text }: { text: string }) => <div>{text}</div>,
}));

describe('EmailRender', () => {
  it('renders correctly', () => {
    const email = 'example@example.com';
    render(<EmailRender email={email} />);
    expect(screen.getByText(email)).toBeInTheDocument();
    const href = `mailto:${email}`;
    expect(screen.getByRole('link')).toHaveAttribute('href', href);
  });
});
