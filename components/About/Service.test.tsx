import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Service } from './Service';

describe('<Service /> should render as expected', () => {
  test('should render the component', () => {
    const result = render(<Service />);
    expect(result.container.innerHTML).toBeTruthy();
  });
});
