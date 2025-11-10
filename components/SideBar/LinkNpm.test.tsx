import { render } from '@testing-library/react';
import { LinkNpm } from './LinkNpm';

let npm: string;
jest.mock('../../src/data', () => ({
  userData: {
    get npm() {
      return npm;
    },
  },
}));

describe('render test', () => {
  it('should render correctly', () => {
    npm = 'abcd';
    const { container } = render(<LinkNpm />);
    expect(container.innerHTML).toBeTruthy();
  });

  it('should render empty', () => {
    npm = '';
    const { container } = render(<LinkNpm />);
    expect(container.innerHTML).toBeFalsy();
  });
});
