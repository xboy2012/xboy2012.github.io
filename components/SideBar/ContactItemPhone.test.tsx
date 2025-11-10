import { render, screen } from '@testing-library/react';
import { ContactItemPhone } from './ContactItemPhone';

jest.mock('./PhoneRender', () => ({
  PhoneRender: ({ phoneCA }: { phoneCA: string }) => <div>{phoneCA}</div>,
}));

let phoneCA: string;
jest.mock('../../src/data', () => ({
  userData: {
    get phoneCA() {
      return phoneCA;
    },
  },
}));

describe('render test', () => {
  it('should render correctly', () => {
    phoneCA = '123456';
    render(<ContactItemPhone />);
    expect(screen.getByText(phoneCA)).toBeInTheDocument();
  });

  it('should render empty', () => {
    phoneCA = '';
    const { container } = render(<ContactItemPhone />);
    expect(container.innerHTML).toBeFalsy();
  });
});
