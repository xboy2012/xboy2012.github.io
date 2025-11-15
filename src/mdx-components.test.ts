import { renderHook } from '@testing-library/react';
import { useMDXComponents } from './mdx-components';

jest.mock('../components/mdx', () => ({
  getMdxComponents: () => ({
    h1: {},
    p: {},
  }),
}));

describe('mdx-components', () => {
  it('renders without crashing', () => {
    const { result } = renderHook(() => useMDXComponents({}));
    expect(result.current).toEqual({
      h1: {},
      p: {},
    });
  });
});
