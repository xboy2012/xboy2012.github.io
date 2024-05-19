import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { FixPageUrl } from './FixPageUrl';

describe('should render as expected', () => {
  test('should render empty', () => {
    const result = render(<FixPageUrl />);
    expect(result.container.innerHTML).toBeFalsy();
  });
});
