import { render } from '@testing-library/react';
import { About } from '.';

describe('should render as expected', () => {
  it('should render the component', () => {
    const result = render(<About />);
    expect(result.container.innerHTML).toBeTruthy();
  });
});
