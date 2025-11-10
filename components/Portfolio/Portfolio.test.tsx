import { render } from '@testing-library/react';
import { Portfolio } from '.';
import type { Thing } from 'schema-dts';
import { getProjects } from '../../src/projects/getProjects';

jest.mock('../../src/hooks/useJsonLD', () => {
  return {
    useJsonLD: <T extends Thing>(getJson: () => T) => getJson(),
  };
});

describe('should render as expected', () => {
  it('should render the component', async () => {
    const projects = await getProjects();
    const result = render(<Portfolio projects={projects} />);
    expect(result.container.innerHTML).toBeTruthy();
  });
});
