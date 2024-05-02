import cx from 'classnames';

export const ServiceItem = ({
  name,
  icon,
  desc,
}: {
  name: string;
  icon: string;
  desc: string;
}) => {
  return (
    <li
      className={cx(
        'relative bg-borderGradientOnyx p-5 rounded-[14px] shadow-2 z-1',
        'md:flex md:justify-start md:items-start md:gap-[18px] md:p-[30px]',
      )}
    >
      <div className="absolute inset-px bg-eerieBlack1 bg-bgGradientJet rounded-inherit -z-1" />
      <div className="mb-2.5 md:mb-0 md:mt-[5px]">
        <div
          className="aspect-square bg-contain bg-center bg-no-repeat w-[40px] h-[40px]"
          style={{
            backgroundImage: `url("${icon}")`,
          }}
          title={name}
        />
      </div>

      <div className="text-center md:text-left">
        <h4 className="mb-[7px] text-white2 capitalize text-2">{name}</h4>

        <p className="text-lightGray text-6 font-300 leading-[1.6]">{desc}</p>
      </div>
    </li>
  );
};
