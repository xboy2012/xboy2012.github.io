import styles from './Clients.module.css';
import { companies } from '../../../../src/companies';

export const Clients = () => {
  return (
    <section className="mb-[15px]">
      <h3 className="text-white2 capitalize text-2">Clients</h3>

      <ul className={`${styles.clientsList} has-scrollbar`}>
        {companies.map(({ name, link, Logo }, index) => {
          return (
            <li
              key={name}
              className={`${styles.clientsItem} snap-start aspect-[1.63] overflow-hidden`}
            >
              <a
                href={link}
                target="_blank"
                title={name}
                className="relative block w-full h-full"
              >
                <Logo />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
