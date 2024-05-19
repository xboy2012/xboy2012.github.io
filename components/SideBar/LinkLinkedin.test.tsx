import { render } from '@testing-library/react';
import { userData } from '../../src/data';
import { LinkLinkedin } from './LinkLinkedin';

describe('render test', () => {
  const _userData = { ...userData };
  afterEach(async () => {
    Object.assign(userData, _userData);
  });

  test('should render correctly', () => {
    const { container } = render(<LinkLinkedin />);
    expect(container.innerHTML).toBeTruthy();
  });

  test('should render empty', () => {
    userData.linkedin = '';
    const { container } = render(<LinkLinkedin />);
    expect(container.innerHTML).toBeFalsy();
  });
});
