import { render } from '@testing-library/react';
import { Resume } from '.';

describe('should render as expected', () => {
  it('should render the component', () => {
    const result = render(<Resume />);
    expect(result.container.innerHTML).toBeTruthy();
  });
});
