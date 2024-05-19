import { render } from '@testing-library/react';
import { userData } from '../../src/data';
import { LinkNpm } from './LinkNpm';

describe('render test', () => {
  const _userData = { ...userData };
  afterEach(async () => {
    Object.assign(userData, _userData);
  });

  test('should render correctly', () => {
    const { container } = render(<LinkNpm />);
    expect(container.innerHTML).toBeTruthy();
  });

  test('should render empty', () => {
    userData.npm = '';
    const { container } = render(<LinkNpm />);
    expect(container.innerHTML).toBeFalsy();
  });
});
