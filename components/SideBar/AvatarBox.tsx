import { cx } from '../../src/utils/cx';

export const AvatarBox = ({ alt }: { alt: string }) => {
  return (
    <figure className="bg-bgGradientOnyx rounded-[20px] md:rounded-[30px] overflow-hidden">
      <div
        className={cx(
          'aspect-square bg-center bg-contain bg-no-repeat bg-avatar',
          'w-[80px] md:w-[120px] 2xl:w-[150px]',
        )}
        title={alt}
      />
    </figure>
  );
};
