import { render } from '@testing-library/react';
import { About } from '.';

describe('should render as expected', () => {
  test('should render the component', () => {
    const result = render(<About />);
    expect(result.container.innerHTML).toBeTruthy();
  });
});
