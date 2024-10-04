import type { JSX } from 'react';
import { cx } from '../../../src/utils/cx';

export const P = (props: JSX.IntrinsicElements['p']) => {
  return <p {...props} className={cx('my-2 text-xl', props.className)} />;
};
