import { render } from '@testing-library/react';
import { userData } from '../../src/data';
import { LinkGithub } from './LinkGithub';

describe('render test', () => {
  const _userData = { ...userData };
  afterEach(async () => {
    Object.assign(userData, _userData);
  });

  test('should render correctly', () => {
    const { container } = render(<LinkGithub />);
    expect(container.innerHTML).toBeTruthy();
  });

  test('should render empty', () => {
    userData.github = '';
    const { container } = render(<LinkGithub />);
    expect(container.innerHTML).toBeFalsy();
  });
});
