import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Portfolio } from '.';

describe('should render as expected', () => {
  test('should render the component', () => {
    const result = render(<Portfolio />);
    expect(result.container.innerHTML).toBeTruthy();
  });
});
