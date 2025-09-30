import { render } from '@testing-library/react';
import { LinkTwitter } from './LinkTwitter';

let twitter: string;
jest.mock('../../src/data', () => ({
  userData: {
    get twitter() {
      return twitter;
    },
  },
}));

describe('render test', () => {
  test('should render correctly', () => {
    twitter = 'abcd';
    const { container } = render(<LinkTwitter />);
    expect(container.innerHTML).toBeTruthy();
  });

  test('should render empty', () => {
    twitter = '';
    const { container } = render(<LinkTwitter />);
    expect(container.innerHTML).toBeFalsy();
  });
});
