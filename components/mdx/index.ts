import type { MDXComponents } from 'mdx/types';
import { H1 } from './components/H1';
import { P } from './components/P';

export const getMdxComponents = (): MDXComponents => {
  return {
    h1: H1,
    p: P,
  };
};
