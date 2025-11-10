import { render } from '@testing-library/react';
import { ServiceWorkerRegister } from './ServiceWorkerRegister';

describe('should render as expected', () => {
  it('should render empty', () => {
    const result = render(<ServiceWorkerRegister />);
    expect(result.container.innerHTML).toBeFalsy();
  });
});
