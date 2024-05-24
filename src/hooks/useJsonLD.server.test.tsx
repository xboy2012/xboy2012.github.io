import '@testing-library/jest-dom';
import { createElement, type ReactElement } from 'react';
import { render } from '@testing-library/react';
import { useServerInsertedHTML } from 'next/navigation';

jest.mock('next/navigation', () => {
  return {
    useServerInsertedHTML: jest.fn(),
  };
});

describe('useJsonLD test in node.js server', () => {
  let useJsonLD: typeof import('./useJsonLD').useJsonLD;

  beforeAll(async () => {
    // temporarily make window undefined to run server-only logic
    const windowSpy = jest.spyOn(global, 'window', 'get');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- for testing purpose
    windowSpy.mockImplementation(() => undefined as any);
    useJsonLD = (await import('./useJsonLD')).useJsonLD;
    windowSpy.mockRestore();
  });

  test('should do nothing for empty json', () => {
    const fn = jest.fn(() => null);

    let injectedScriptJSX: ReactElement;
    jest.mocked(useServerInsertedHTML).mockImplementation((callback) => {
      injectedScriptJSX = callback() as ReactElement;
    });

    const App = () => {
      useJsonLD(fn);
      return null;
    };
    render(<App />);

    expect(fn).toHaveBeenCalledTimes(1);

    const resultHTML = render(createElement(() => injectedScriptJSX)).container
      .innerHTML;

    expect(resultHTML).toBe('');
  });

  test('should work as expected for normal json', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- for testing purpose
    const json: any = { _: Math.random().toString(36).substring(2) };

    const fn = jest.fn(() => json);

    let injectedScriptJSX: ReactElement;
    jest.mocked(useServerInsertedHTML).mockImplementation((callback) => {
      injectedScriptJSX = callback() as ReactElement;
    });

    const App = () => {
      useJsonLD(fn);
      return null;
    };
    render(<App />);

    expect(fn).toHaveBeenCalledTimes(1);

    const jsonWithContext = { '@context': 'https://schema.org', ...json };
    const expectHTML = `<script type="application/ld+json">${JSON.stringify(jsonWithContext)}</script>`;
    const resultHTML = render(createElement(() => injectedScriptJSX)).container
      .innerHTML;
    expect(resultHTML).toBe(expectHTML);
  });
});
