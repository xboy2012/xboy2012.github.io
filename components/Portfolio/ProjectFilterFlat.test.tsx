import { fireEvent, render, screen } from '@testing-library/react';
import { ProjectFilterFlat } from './ProjectFilterFlat';
import { categories } from './categories';

describe('ProjectFilterFlat', () => {
  test('renders properly', () => {
    const handleChange = jest.fn();

    render(<ProjectFilterFlat category="All" onChange={handleChange} />);

    for (const category of categories) {
      const categoryButton = screen.getByText(category);
      expect(categoryButton).toBeInTheDocument();
      fireEvent.click(categoryButton);
      expect(handleChange).toHaveBeenCalledWith(category);
    }
  });
});
