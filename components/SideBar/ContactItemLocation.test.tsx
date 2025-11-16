import { render, screen } from '@testing-library/react';
import { ContactItemLocation } from './ContactItemLocation';

jest.mock('./LocationRender', () => ({
  LocationRender: ({ location }: { location: string }) => <div>{location}</div>,
}));

jest.mock('../../src/data', () => ({
  userData: {
    location: {
      city: 'city',
      province: 'province',
      country: 'country',
    },
  },
}));

describe('render test', () => {
  it('should render correctly', () => {
    render(<ContactItemLocation />);
    expect(screen.getByText('city, province, country')).toBeInTheDocument();
  });
});
