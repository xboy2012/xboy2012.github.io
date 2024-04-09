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
      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">
        {testimonials.map(({ name, avatar, text }, index) => {
          return (
            <li className="testimonials-item" key={index}>
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src={avatar}
                    alt={name}
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  {name}
                </h4>

                <div className="testimonials-text" data-testimonials-text>
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
