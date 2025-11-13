import { cx } from '../../src/utils/cx';

export const AvatarBox = ({ alt }: { alt: string }) => {
  return (
    <figure className="overflow-hidden rounded-5 bg-bgGradientOnyx md:rounded-7.5 print:hidden">
      <div
        className={cx(
          'aspect-square bg-avatar bg-contain bg-center bg-no-repeat',
          'w-20 md:w-30 2xl:w-37.5',
        )}
        title={alt}
      />
    </figure>
  );
};
