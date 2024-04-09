import styles from './Clients.module.css';

export const Clients = () => {
  return (
    <section className="mb-[15px]">
      <h3 className="text-white2 capitalize text-2">Clients</h3>

      <ul className={`${styles.clientsList} has-scrollbar`}>
        <li className={`${styles.clientsItem} overflow-hidden rounded`}>
          <a
            href="https://www.microsoft.com"
            target="_blank"
            className="block w-full h-full"
          >
            <div
              className="bg-center bg-no-repeat bg-cover mx-3 h-full"
              style={{ backgroundImage: 'url("/assets/logo-microsoft.svg")' }}
            />
          </a>
        </li>

        <li className={`${styles.clientsItem} overflow-hidden rounded`}>
          <a
            href="https://www.tencent.com"
            target="_blank"
            className="block w-full h-full"
          >
            <div
              className="bg-center bg-no-repeat bg-contain mx-3 h-full"
              style={{ backgroundImage: 'url("/assets/logo-tencent.svg")' }}
            />
          </a>
        </li>

        <li className={`${styles.clientsItem} overflow-hidden rounded`}>
          <a
            href="https://www.nio.com"
            target="_blank"
            className="block w-full h-full"
          >
            <div
              className="bg-center bg-no-repeat bg-contain h-full"
              style={{ backgroundImage: 'url("/assets/logo-nio.svg")' }}
            />
          </a>
        </li>

        <li className={`${styles.clientsItem} overflow-hidden rounded`}>
          <a
            href="https://leetcode.com"
            target="_blank"
            className="block w-full h-full"
          >
            <div
              className="bg-center bg-no-repeat bg-contain mx-3 h-full"
              style={{ backgroundImage: 'url("/assets/logo-leetcode.svg")' }}
            />
          </a>
        </li>

        <li className={`${styles.clientsItem} overflow-hidden rounded`}>
          <a
            href="https://www.temu.com"
            target="_blank"
            className="block w-full h-full"
          >
            <div
              className="bg-center bg-no-repeat bg-cover h-full"
              style={{ backgroundImage: 'url("/assets/logo-temu.jpeg")' }}
            />
          </a>
        </li>

        <li className={`${styles.clientsItem} overflow-hidden rounded`}>
          <a
            href="https://m.pinduoduo.com"
            target="_blank"
            className="block w-full h-full"
          >
            <div
              className="bg-center bg-no-repeat bg-cover h-full"
              style={{ backgroundImage: 'url("/assets/logo-pdd.jpeg")' }}
            />
          </a>
        </li>

        <li className={`${styles.clientsItem} overflow-hidden rounded`}>
          <a
            href="https://myshell.ai"
            target="_blank"
            className="block w-full h-full"
          >
            <div
              className="bg-center bg-cover bg-no-repeat h-full"
              style={{ backgroundImage: 'url("/assets/logo-myshell.jpeg")' }}
            />
          </a>
        </li>

        <li
          className={`${styles.clientsItem} overflow-hidden rounded`}
          style={{ background: 'black' }}
        >
          <a
            href="https://www.wacai.com"
            target="_blank"
            className="block w-full h-full"
          >
            <div
              className="bg-center bg-contain bg-no-repeat mx-3 h-full"
              style={{ backgroundImage: 'url("/assets/logo-wacai.png")' }}
            />
          </a>
        </li>
      </ul>
    </section>
  );
};
