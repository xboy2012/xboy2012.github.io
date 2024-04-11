import cx from 'classnames';

export const Separator = () => {
  return (
    <div
      className={cx(
        'w-full h-px bg-jet my-4 mx-0 md:my-8',
        '2xl:last-of-type:my-[15px] 2xl:last-of-type:opacity-0',
      )}
    />
  );
};
