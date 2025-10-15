import { render } from '@testing-library/react';
import { Resume } from '.';

describe('should render as expected', () => {
  test('should render the component', () => {
    const result = render(<Resume />);
    expect(result.container.innerHTML).toBeTruthy();
  });
});
