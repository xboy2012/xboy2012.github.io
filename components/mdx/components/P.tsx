import type { JSX } from 'react';
import cx from 'classnames';

export const P = (props: JSX.IntrinsicElements['p']) => {
  return <p {...props} className={cx('my-2 text-xl', props.className)} />;
};
