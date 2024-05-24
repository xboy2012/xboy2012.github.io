import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { useJsonLD } from './useJsonLD';

describe('useJsonLD test in browser', () => {
  test('should do nothing', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- for testing purpose
    const json: any = { _: Math.random().toString(36).substring(2) };
    const fn = jest.fn(() => json);

    const App = () => {
      useJsonLD(fn);
      return null;
    };
    render(<App />);

    expect(fn).not.toHaveBeenCalled();
  });
});
