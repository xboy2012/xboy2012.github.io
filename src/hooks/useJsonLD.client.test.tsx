import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import type { Thing } from 'schema-dts';
import { useJsonLD } from './useJsonLD';

describe('useJsonLD test in browser', () => {
  test('should do nothing', () => {
    const json = { _: Math.random().toString(36).substring(2) };
    const fn = jest.fn(() => json as unknown as Thing);

    const App = () => {
      useJsonLD(fn);
      return null;
    };
    render(<App />);

    expect(fn).not.toHaveBeenCalled();
  });
});
