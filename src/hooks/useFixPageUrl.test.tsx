import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { useFixPageUrl } from './useFixPageUrl';
import { replaceBrowserUrl } from '../utils/replaceBrowserUrl';

jest.mock('../utils/replaceBrowserUrl', () => {
  return {
    replaceBrowserUrl: jest.fn(),
  };
});

let mockFixedPageUrl: URL | undefined;

jest.mock('../utils/getFixedPageUrl', () => {
  return {
    getFixedPageUrl: jest.fn(() => mockFixedPageUrl),
  };
});

const App = () => {
  useFixPageUrl();
  return null;
};

describe('useFixPageUrl should work as expected', () => {
  test('should not redirect', () => {
    mockFixedPageUrl = undefined;
    render(<App />);
    expect(replaceBrowserUrl).not.toHaveBeenCalled();
  });

  test('should redirect', () => {
    mockFixedPageUrl = new URL('https://www.example.com/a');
    render(<App />);
    expect(replaceBrowserUrl).toHaveBeenCalled();
  });
});
