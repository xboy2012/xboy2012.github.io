import { render, screen } from '@testing-library/react';
import { LocationRender } from './LocationRender';

describe('LocationRender', () => {
  it('renders correctly', () => {
    const location = 'TestLocation';
    render(<LocationRender location={location} />);
    expect(screen.getByText(location)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
