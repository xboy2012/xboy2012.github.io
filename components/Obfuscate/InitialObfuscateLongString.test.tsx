import { render } from '@testing-library/react';
import { InitialObfuscateLongString } from './InitialObfuscateLongString';

describe('InitialObfuscateLongString', () => {
  test('renders correctly', () => {
    const text = Math.random().toString(36).substring(2);
    const { container } = render(<InitialObfuscateLongString text={text} />);
    expect(container.childNodes).toHaveLength(1);
    const span = container.childNodes[0];
    const content = ([...span.childNodes] as HTMLElement[])
      .filter((node) => !node.hasAttribute('hidden'))
      .map((node) => node.innerHTML.trim())
      .join('');
    expect(content).toBe(text);
  });
});
