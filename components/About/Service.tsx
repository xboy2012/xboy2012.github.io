import cx from 'classnames';

const services: {
  name: string;
  icon: string;
  desc: string;
}[] = [
  {
    name: 'Web design',
    icon: '/assets/icon-design.svg',
    desc: 'The most modern and high-quality design made at a professional level.',
  },
  {
    name: 'Web development',
    icon: '/assets/icon-dev.svg',
    desc: 'High-quality development of sites at the professional level.',
  },
  {
    name: 'Mobile apps',
    icon: '/assets/icon-app.svg',
    desc: 'Professional development of applications for iOS and Android.',
  },
  {
    name: 'Photography',
    icon: '/assets/icon-photo.svg',
    desc: 'I make high-quality photos of any category at a professional level.',
  },
];

export const Service = () => {
  return (
    <section className="mb-[35px]">
      <h3 className="mb-[20px] text-white2 capitalize text-2">
        What i am doing
      </h3>

      <ul className="grid grid-cols-1fr gap-[20px] xl:grid-cols-1fr1fr xl:gap-y-[20px] xl:gap-x-[25px]">
        {services.map(({ name, icon, desc }, index) => {
          return (
            <li
              key={index}
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
                <h4 className="mb-[7px] text-white2 capitalize text-2">
                  {name}
                </h4>

                <p className="text-lightGray text-6 font-300 leading-[1.6]">
                  {desc}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
