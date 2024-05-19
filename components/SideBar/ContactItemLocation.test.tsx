import { render } from '@testing-library/react';
import { userData } from '../../src/data';
import { ContactItemLocation } from './ContactItemLocation';

describe('render test', () => {
  const _userData = { ...userData };
  afterEach(async () => {
    Object.assign(userData, _userData);
  });

  test('should render correctly', () => {
    const { container } = render(<ContactItemLocation />);
    expect(container.innerHTML).toBeTruthy();
  });

  test('should render empty', () => {
    userData.location = '';
    const { container } = render(<ContactItemLocation />);
    expect(container.innerHTML).toBeFalsy();
  });
});
