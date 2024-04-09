import cx from 'classnames';

// TODO: FAKE DATA
const testimonials: {
  name: string;
  avatar: string;
  text: string;
}[] = [
  {
    name: 'Daniel lewis',
    avatar: '/assets/avatar-1.png',
    text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
  },
  {
    name: 'Jessica miller',
    avatar: '/assets/avatar-2.png',
    text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
  },
  {
    name: 'Emily evans',
    avatar: '/assets/avatar-3.png',
    text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
  },
  {
    name: 'Henry william',
    avatar: '/assets/avatar-4.png',
    text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
  },
];

export const Testimonials = () => {
  return (
    <section className="testimonials">
      <h3 className="text-white2 capitalize text-2 testimonials-title">
        Testimonials
      </h3>

      <ul className="testimonials-list has-scrollbar">
        {testimonials.map(({ name, avatar, text }, index) => {
          return (
            <li className="min-w-full snap-center xl:min-w-test_xl" key={index}>
              <div className="content-card" data-testimonials-item>
                <figure
                  className={cx(
                    'absolute top-0 left-0 rounded-[14px] md:rounded-[20px]',
                    'translate-x-[15px] -translate-y-[25px] md:translate-x-[30px] md:-translate-y-[30px]',
                    'bg-borderGradientOnyx shadow-1',
                  )}
                >
                  <img
                    src={avatar}
                    alt={name}
                    width="60"
                    className="md:w-[80px]"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="text-white2 capitalize text-4 mb-[7px] md:mb-2.5 md:ml-[95px]"
                  data-testimonials-title
                >
                  {name}
                </h4>

                <div
                  className="text-lightGray text-6 font-300 leading-[1.6] line-clamp-4 md:line-clamp-2"
                  data-testimonials-text
                >
                  <p>{text}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
