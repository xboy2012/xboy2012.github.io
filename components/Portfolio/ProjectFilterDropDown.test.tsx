import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { ProjectFilterDropDown } from './ProjectFilterDropDown';
import { categories } from './categories';

describe('ProjectFilterDropDown', () => {
  test('renders properly', () => {
    const handleChange = jest.fn();

    render(<ProjectFilterDropDown category="All" onChange={handleChange} />);

    const ddlButton = screen.getByTitle('Click to select category');
    expect(ddlButton).toBeInTheDocument();
    fireEvent.click(ddlButton);

    for (const category of categories) {
      if (category === 'All') {
        continue;
      }
      const categoryButton = screen.getByText(category);
      expect(categoryButton).toBeInTheDocument();
      fireEvent.click(categoryButton);
      expect(handleChange).toHaveBeenCalledWith(category);
    }
  });
});
