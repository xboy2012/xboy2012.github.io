import type { MDXComponents } from 'mdx/types';
import { getMdxComponents } from '../components/mdx';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...getMdxComponents(),
  };
}
