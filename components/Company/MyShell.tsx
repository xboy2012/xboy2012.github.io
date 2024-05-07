import cx from 'classnames';
import styles from './index.module.css';

export const MyShell = () => {
  return (
    <div
      className={cx(
        'bg-center bg-cover bg-no-repeat h-full rounded overflow-hidden',
        styles.myshell,
      )}
    />
  );
};
