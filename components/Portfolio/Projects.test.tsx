import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Projects } from './Projects';
import { categories } from './categories';

describe('Projects', () => {
  test('renders properly', () => {
    render(<Projects />);

    for (const category of categories) {
      if (category === 'All') {
        continue;
      }
      const categoryButton = screen.queryAllByText(category)[0];
      expect(categoryButton).toBeInTheDocument();
      fireEvent.click(categoryButton);
    }
  });
});
