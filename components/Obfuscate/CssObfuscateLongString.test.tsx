import { render } from '@testing-library/react';
import { CssObfuscateLongString } from './CssObfuscateLongString';

describe('CssObfuscateLongString', () => {
  test('should render correctly', () => {
    const text = Math.random().toString(36).substring(2);
    const { container } = render(<CssObfuscateLongString text={text} />);
    expect(container.childNodes).toHaveLength(1);
    const span = container.childNodes[0] as HTMLElement;
    expect(span.innerHTML.trim()).toBe('');
    expect(span.className).toBeTruthy();
  });
});
