import { render } from '@testing-library/react';
import { LinkFacebook } from './LinkFacebook';

let facebook: string;
jest.mock('../../src/data', () => ({
  userData: {
    get facebook() {
      return facebook;
    },
  },
}));

describe('render test', () => {
  test('should render correctly', () => {
    facebook = 'abcd';
    const { container } = render(<LinkFacebook />);
    expect(container.innerHTML).toBeTruthy();
  });

  test('should render empty', () => {
    facebook = '';
    const { container } = render(<LinkFacebook />);
    expect(container.innerHTML).toBeFalsy();
  });
});
