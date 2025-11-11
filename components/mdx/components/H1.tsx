import type { JSX } from 'react';
import { cx } from '../../../src/utils/cx';

export const H1 = (props: JSX.IntrinsicElements['h2']) => {
  return (
    <h1 {...props} className={cx('text-6 md:text-8 my-2', props.className)} />
  );
};
