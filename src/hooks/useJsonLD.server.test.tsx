/* @jest-environment node */
// avoid define global window to simulate behavior in Node.js Server
import { type ReactNode } from 'react';
import { renderToString } from 'react-dom/server';
import type { Thing } from 'schema-dts';
import { useServerInsertedHTML } from 'next/navigation';
import { useJsonLD } from './useJsonLD';

jest.mock('next/navigation', () => {
  return {
    useServerInsertedHTML: jest.fn(),
  };
});

describe('useJsonLD test in node.js server', () => {
  let injectedScriptJSX: ReactNode;

  beforeAll(() => {
    jest.mocked(useServerInsertedHTML).mockImplementation((callback) => {
      injectedScriptJSX = callback() as ReactNode;
    });
  });

  beforeEach(() => {
    injectedScriptJSX = null;
  });

  it('should invoke fn', () => {
    const fn = jest.fn(() => ({}) as Thing);
    const App = () => {
      useJsonLD(fn);
      return null;
    };
    renderToString(<App />);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should do nothing for empty json', () => {
    const fn = jest.fn(() => null);

    const App = () => {
      useJsonLD(fn);
      return null;
    };
    renderToString(<App />);

    const resultHTML = renderToString(injectedScriptJSX);

    expect(resultHTML).toBe('');
  });

  it('should work as expected for normal json', () => {
    const json = { _: Math.random().toString(36).substring(2) };

    const fn = jest.fn(() => json as unknown as Thing);

    const App = () => {
      useJsonLD(fn);
      return null;
    };

    renderToString(<App />);

    const jsonWithContext = { '@context': 'https://schema.org', ...json };
    const expectHTML = `<script type="application/ld+json">${JSON.stringify(jsonWithContext)}</script>`;
    const resultHTML = renderToString(injectedScriptJSX);
    expect(resultHTML).toBe(expectHTML);
  });
});
