import { cx } from '../../src/utils/cx';

export const Separator = () => {
  return (
    <div
      className={cx(
        'mx-0 my-4 h-px w-full bg-jet md:my-10',
        '2xl:last-of-type:my-4 2xl:last-of-type:opacity-0',
        'print:hidden',
      )}
    />
  );
};
