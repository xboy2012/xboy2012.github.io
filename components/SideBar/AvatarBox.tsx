import { cx } from '../../src/utils/cx';

export const AvatarBox = ({ alt }: { alt: string }) => {
  return (
    <figure className="bg-bgGradientOnyx rounded-5 md:rounded-7.5 overflow-hidden print:hidden">
      <div
        className={cx(
          'bg-avatar aspect-square bg-contain bg-center bg-no-repeat',
          'w-20 md:w-30 2xl:w-37.5',
        )}
        title={alt}
      />
    </figure>
  );
};
