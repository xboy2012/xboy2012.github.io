import { fireEvent, render, screen } from '@testing-library/react';
import { Projects } from './Projects';
import { categories } from './categories';
import { getProjects } from '../../src/projects/getProjects';

describe('Projects', () => {
  test('renders properly', async () => {
    const projects = await getProjects();
    render(<Projects projects={projects} />);

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
