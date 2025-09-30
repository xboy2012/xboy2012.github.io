import { render } from '@testing-library/react';
import { LinkLinkedin } from './LinkLinkedin';

let linkedin: string;
jest.mock('../../src/data', () => ({
  userData: {
    get linkedin() {
      return linkedin;
    },
  },
}));

describe('render test', () => {
  test('should render correctly', () => {
    linkedin = 'abcd';
    const { container } = render(<LinkLinkedin />);
    expect(container.innerHTML).toBeTruthy();
  });

  test('should render empty', () => {
    linkedin = '';
    const { container } = render(<LinkLinkedin />);
    expect(container.innerHTML).toBeFalsy();
  });
});
