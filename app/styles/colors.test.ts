import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { colors } from '../../src/config/colors';

describe('colors.css', () => {
  const readCss = (): Promise<string> => {
    const cssFile = resolve(import.meta.dirname, './colors.css');
    return readFile(cssFile, 'utf8');
  };

  it('colors.css should be align with javascript', async () => {
    const cssContent = await readCss();
    const expectedCssContent = [
      '@theme {',
      ...Object.entries(colors).map(([key, value]) => {
        return `  --color-${key}: ${value};`;
      }),
      '}\n',
    ].join('\n');

    expect(cssContent).toBe(expectedCssContent);
  });
});
