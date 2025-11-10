import { render } from '@testing-library/react';
import { LinkGithub } from './LinkGithub';

let github: string;
jest.mock('../../src/data', () => ({
  userData: {
    get github() {
      return github;
    },
  },
}));

describe('render test', () => {
  it('should render correctly', () => {
    github = 'abcd';
    const { container } = render(<LinkGithub />);
    expect(container.innerHTML).toBeTruthy();
  });

  it('should render empty', () => {
    github = '';
    const { container } = render(<LinkGithub />);
    expect(container.innerHTML).toBeFalsy();
  });
});
