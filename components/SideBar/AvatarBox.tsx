import cx from 'classnames';

export const AvatarBox = ({ avatar, alt }: { avatar: string; alt: string }) => {
  return (
    <figure className="bg-bgGradientOnyx rounded-[20px] md:rounded-[30px]">
      <div
        className={cx(
          'aspect-square bg-center bg-contain bg-no-repeat',
          'w-[80px] md:w-[120px] 2xl:w-[150px]',
        )}
        style={{
          backgroundImage: `url("${avatar}")`,
        }}
        title={alt}
      />
    </figure>
  );
};
