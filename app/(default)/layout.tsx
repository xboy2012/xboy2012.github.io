import type { ReactNode } from 'react';
import { SideBar } from '../../components/SideBar';
import cx from 'classnames';

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main
      className={cx(
        'mt-[15px] mb-[75px] mx-[12px] min-w-[259px]',
        'md:mt-[60px] md:mb-[100px] xl:mb-[60px]',
        '2xl:max-w-[1200px] 2xl:[margin-inline:auto]',
        '2xl:flex 2xl:justify-center 2xl:items-stretch 2xl:gap-[25px]',
      )}
    >
      <SideBar />
      <div
        className={cx(
          'xl:relative xl:w-max xl:m-auto',
          '2xl:min-w-[75%] 2xl:w-[75%] 2xl:m-0',
        )}
      >
        {children}
      </div>
    </main>
  );
}
