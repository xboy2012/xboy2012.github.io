import type { JSX } from 'react';
import cx from 'classnames';

export const H1 = (props: JSX.IntrinsicElements['h2']) => {
  return <h1 {...props} className={cx('my-2 text-1 ', props.className)} />;
};
