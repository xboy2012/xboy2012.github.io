import { render } from '@testing-library/react';
import { userData } from '../../src/data';
import { ContactItemPhone } from './ContactItemPhone';

describe('render test', () => {
  const _userData = { ...userData };
  afterEach(async () => {
    Object.assign(userData, _userData);
  });

  test('should render correctly', () => {
    const { container } = render(<ContactItemPhone />);
    expect(container.innerHTML).toBeTruthy();
  });

  test('should render empty', () => {
    userData.phoneCA = '';
    const { container } = render(<ContactItemPhone />);
    expect(container.innerHTML).toBeFalsy();
  });
});
