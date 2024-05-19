import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Blog } from '.';

describe('should render as expected', () => {
  test('should render the component', () => {
    const result = render(<Blog />);
    expect(result.container.innerHTML).toBeTruthy();
  });
});
