import { render } from '@testing-library/react';
import { userData } from '../../src/data';
import { LinkTwitter } from './LinkTwitter';

describe('render test', () => {
  const _userData = { ...userData };
  afterEach(async () => {
    Object.assign(userData, _userData);
  });

  test('should render correctly', () => {
    const { container } = render(<LinkTwitter />);
    expect(container.innerHTML).toBeTruthy();
  });

  test('should render empty', () => {
    userData.twitter = '';
    const { container } = render(<LinkTwitter />);
    expect(container.innerHTML).toBeFalsy();
  });
});
