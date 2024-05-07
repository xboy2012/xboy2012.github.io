import cx from 'classnames';
import styles from './index.module.css';

export const Microsoft = () => {
  return (
    <div className="w-full h-full bg-white rounded">
      <div
        className={cx(
          'bg-center bg-no-repeat bg-cover mx-3 h-full',
          styles.microsoft,
        )}
      />
    </div>
  );
};
