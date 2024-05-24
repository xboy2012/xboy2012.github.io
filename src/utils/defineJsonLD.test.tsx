import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { type ReactElement, createElement } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { defineJsonLD } from './defineJsonLD';

jest.mock('next/navigation', () => {
  return {
    useServerInsertedHTML: jest.fn(),
  };
});

describe('defineJsonLD() test', () => {
  for (let inputCount = 1; inputCount <= 6; inputCount++) {
    test(`should work with ${inputCount} inputs`, () => {
      let injectedScriptJSX: ReactElement;

      jest.mocked(useServerInsertedHTML).mockImplementation((callback) => {
        injectedScriptJSX = callback() as ReactElement;
      });

      const jsons = new Array(inputCount).fill(null).map((_, index) => {
        return {
          index,
          value: Math.random().toString(36).substring(2),
        };
      });

      const fns = jsons.map((json) => () => json);

      // @ts-expect-error for testing purpose
      const JsonLD = defineJsonLD(...fns);

      const result = render(<JsonLD />);
      // The <JsonLD> Component should return null, the script injection logic should be handled by Next.js
      expect(result.container.innerHTML).toBeFalsy();

      const expectHtml = jsons
        .map((json) => {
          return `<script type="application/ld+json">${JSON.stringify(json)}</script>`;
        })
        .join('');
      const resultHtml = render(createElement(() => injectedScriptJSX))
        .container.innerHTML;
      expect(resultHtml).toBe(expectHtml);
    });
  }
});
