import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Blog } from '.';
import { getBlogs } from '../../src/blogs/getBlogs';
import type { Thing } from 'schema-dts';

jest.mock('../../src/hooks/useJsonLD', () => {
  return {
    useJsonLD: <T extends Thing>(getJson: () => T) => getJson(),
  };
});

describe('should render as expected', () => {
  test('should render the component', async () => {
    const blogs = await getBlogs();
    const result = render(<Blog blogs={blogs} />);
    expect(result.container.innerHTML).toBeTruthy();
  });
});
