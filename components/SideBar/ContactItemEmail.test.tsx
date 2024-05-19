import { render } from '@testing-library/react';
import { userData } from '../../src/data';
import { ContactItemEmail } from './ContactItemEmail';

describe('render test', () => {
  const _userData = { ...userData };
  afterEach(async () => {
    Object.assign(userData, _userData);
  });

  test('should render correctly', () => {
    const { container } = render(<ContactItemEmail />);
    expect(container.innerHTML).toBeTruthy();
  });

  test('should render empty', () => {
    userData.email = '';
    const { container } = render(<ContactItemEmail />);
    expect(container.innerHTML).toBeFalsy();
  });
});
