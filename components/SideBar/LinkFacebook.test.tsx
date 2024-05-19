import { render } from '@testing-library/react';
import { userData } from '../../src/data';
import { LinkFacebook } from './LinkFacebook';

describe('render test', () => {
  const _userData = { ...userData };
  afterEach(async () => {
    Object.assign(userData, _userData);
  });

  test('should render correctly', () => {
    const { container } = render(<LinkFacebook />);
    expect(container.innerHTML).toBeTruthy();
  });

  test('should render empty', () => {
    userData.facebook = '';
    const { container } = render(<LinkFacebook />);
    expect(container.innerHTML).toBeFalsy();
  });
});
