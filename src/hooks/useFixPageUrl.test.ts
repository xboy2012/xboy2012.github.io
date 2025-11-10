import { renderHook } from '@testing-library/react';
import { useFixPageUrl } from './useFixPageUrl';
import { replaceBrowserUrl } from '../utils/replaceBrowserUrl';

jest.mock('../utils/replaceBrowserUrl', () => {
  const { replaceBrowserUrl } = jest.requireActual(
    '../utils/replaceBrowserUrl',
  );
  return {
    replaceBrowserUrl: jest.fn(replaceBrowserUrl),
  };
});

let mockFixedPageUrl: URL | undefined;

jest.mock('../utils/getFixedPageUrl', () => {
  return {
    getFixedPageUrl: jest.fn(() => mockFixedPageUrl),
  };
});

describe('useFixPageUrl should work as expected', () => {
  it('should not redirect', () => {
    mockFixedPageUrl = undefined;
    renderHook(() => {
      useFixPageUrl();
    });
    expect(replaceBrowserUrl).not.toHaveBeenCalled();
  });

  it('should redirect', () => {
    mockFixedPageUrl = new URL('https://www.example.com/a');
    renderHook(() => {
      useFixPageUrl();
    });
    expect(replaceBrowserUrl).toHaveBeenCalled();
  });
});
