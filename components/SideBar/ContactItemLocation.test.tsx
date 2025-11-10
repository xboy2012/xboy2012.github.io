import { render, screen } from '@testing-library/react';
import { ContactItemLocation } from './ContactItemLocation';

jest.mock('./LocationRender', () => ({
  LocationRender: ({ location }: { location: string }) => <div>{location}</div>,
}));

let location: string;
jest.mock('../../src/data', () => ({
  userData: {
    get location() {
      return location;
    },
  },
}));

describe('render test', () => {
  it('should render correctly', () => {
    location = 'TestLocation';
    render(<ContactItemLocation />);
    expect(screen.getByText(location)).toBeInTheDocument();
  });

  it('should render empty', () => {
    location = '';
    const { container } = render(<ContactItemLocation />);
    expect(container.innerHTML).toBeFalsy();
  });
});
