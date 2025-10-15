import { render } from '@testing-library/react';
import { NotFound } from './NotFound';
import type { FixPageUrlStatus } from '../src/hooks/useFixPageUrl';

let mockStatus: FixPageUrlStatus;

jest.mock('../src/hooks/useFixPageUrl', () => {
  return {
    useFixPageUrl: jest.fn(() => mockStatus),
  };
});

describe('should render as expected', () => {
  test("should render correctly when status === 'ok'", () => {
    mockStatus = 'ok';
    const result = render(<NotFound />);
    expect(result.container.innerHTML).toBeTruthy();
  });

  test("should render correctly when status === 'pending'", () => {
    mockStatus = 'pending';
    const result = render(<NotFound />);
    expect(result.container.innerHTML).toBeTruthy();
  });

  test("should render correctly when status === 'redirecting'", () => {
    mockStatus = 'redirecting';
    const result = render(<NotFound />);
    expect(result.container.innerHTML).toBeTruthy();
  });
});
