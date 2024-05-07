import cx from 'classnames';
import styles from './index.module.css';

export const Pdd = () => {
  return (
    <div
      className={cx(
        'bg-center bg-no-repeat bg-cover h-full rounded overflow-hidden',
        styles.pdd,
      )}
    />
  );
};
