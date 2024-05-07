import cx from 'classnames';
import styles from './index.module.css';

export const Wacai = () => {
  return (
    <div className="w-full h-full bg-black rounded overflow-hidden">
      <div
        className={cx(
          'bg-center bg-contain bg-no-repeat mx-3 h-full',
          styles.wacai,
        )}
      />
    </div>
  );
};
