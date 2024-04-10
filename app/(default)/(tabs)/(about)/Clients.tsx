import cx from 'classnames';
import { companies } from '../../../../src/companies';
import styles from './Clients.module.css';
import scrollBar from './scrollBar.module.css';

export const Clients = () => {
  return (
    <section className="mb-[15px]">
      <h3 className="text-white2 capitalize text-2">Clients</h3>

      <ul className={cx(styles.clientsList, scrollBar.hasScrollbar)}>
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
