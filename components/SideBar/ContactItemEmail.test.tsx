import { render, screen } from '@testing-library/react';
import { ContactItemEmail } from './ContactItemEmail';

jest.mock('./EmailRender', () => ({
  EmailRender: ({ email }: { email: string }) => <div>{email}</div>,
}));

let email: string;
jest.mock('../../src/data', () => ({
  userData: {
    get email() {
      return email;
    },
  },
}));

describe('render test', () => {
  test('should render correctly', () => {
    email = 'example@example.com';
    render(<ContactItemEmail />);
    expect(screen.getByText(email)).toBeInTheDocument();
  });

  test('should render empty', () => {
    email = '';
    const { container } = render(<ContactItemEmail />);
    expect(container.innerHTML).toBeFalsy();
  });
});
