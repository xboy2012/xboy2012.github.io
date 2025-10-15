import { render } from '@testing-library/react';
import { NavBar } from './NavBar';

jest.mock('./NavBarItem', () => {
  return {
    NavBarItem: () => null,
  };
});

describe('should render as expected', () => {
  test('should render the component', () => {
    const result = render(<NavBar />);
    expect(result.container.innerHTML).toBeTruthy();
  });
});
