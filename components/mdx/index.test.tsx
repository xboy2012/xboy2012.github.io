import '@testing-library/jest-dom';
import type { ComponentType, PropsWithChildren } from 'react';
import { render, screen } from '@testing-library/react';
import { getMdxComponents } from '.';

describe('mdx components should work as expected', () => {
  const mdxComponents = getMdxComponents();
  for (const tagName of Object.keys(mdxComponents)) {
    if (tagName === 'wrapper') {
      continue;
    }
    test(`[${tagName}]'s implement should work as expected`, () => {
      const Component = mdxComponents[tagName] as ComponentType<
        PropsWithChildren<{ className: string }>
      >;
      const className = `className-${Math.random().toString(36).substring(2)}`;
      const text = Math.random().toString(36).substring(2);
      const result = render(
        <Component className={className}>{text}</Component>,
      );
      const container = result.container;
      expect(screen.getByText(text)).toBeInTheDocument();
      expect(container.getElementsByClassName(className)[0]).toBeTruthy();
    });
  }
});
