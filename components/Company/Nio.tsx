import cx from 'classnames';
import styles from './index.module.css';

export const Nio = () => {
  return (
    <div className="w-full h-full bg-white rounded">
      <div
        className={cx('bg-center bg-no-repeat bg-contain h-full', styles.nio)}
      />
    </div>
  );
};
