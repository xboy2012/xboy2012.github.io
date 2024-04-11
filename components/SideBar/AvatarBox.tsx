export const AvatarBox = ({ avatar, alt }: { avatar: string; alt: string }) => {
  return (
    <figure className="bg-bgGradientOnyx rounded-[20px] md:rounded-[30px]">
      <img
        src={avatar}
        alt={alt}
        width="80"
        className="md:w-[120px] 2xl:w-[150px]"
      />
    </figure>
  );
};
