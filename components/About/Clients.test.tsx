import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Clients } from './Clients';

describe('<Clients /> should render as expected', () => {
  test('should render the component', () => {
    const result = render(<Clients />);
    expect(result.container.innerHTML).toBeTruthy();
  });
});
