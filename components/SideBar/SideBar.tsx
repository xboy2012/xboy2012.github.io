'use client';

import { useCallback, useState } from 'react';
import { cx } from '../../src/utils/cx';
import { ContactItemEmail } from './ContactItemEmail';
import { ContactItemPhone } from './ContactItemPhone';
import { ContactItemLocation } from './ContactItemLocation';
import { LinkFacebook } from './LinkFacebook';
import { LinkTwitter } from './LinkTwitter';
import { LinkGithub } from './LinkGithub';
import { LinkNpm } from './LinkNpm';
import { LinkLinkedin } from './LinkLinkedin';
import { InfoCard } from './InfoCard';
import { Separator } from './Separator';

export const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleOpen = useCallback(() => {
    /* istanbul ignore next */
    setShowSideBar((v) => !v);
  }, []);

  return (
    <aside
      className={cx(
        'order-1',
        'bg-eerieBlack2 border border-solid border-jet rounded-[20px] p-[15px]',
        'shadow-1 z-1 mb-[15px] overflow-hidden transition-all duration-500 ease-in-out',
        'md:w-[520px] md:[margin-inline:auto] md:p-[30px] md:mb-[30px]',
        'lg:w-[700px]',
        'xl:w-[950px] xl:shadow-5',
        '2xl:w-auto 2xl:sticky 2xl:top-[60px] 2xl:h-full 2xl:mb-0 2xl:pt-[60px] 2xl:z-1',
        showSideBar
          ? 'max-h-[405px] md:max-h-[584px] 2xl:max-h-[initial]'
          : 'max-h-[112px] md:max-h-[180px] 2xl:max-h-max',
        // always expand the area when javascript is disabled
        'no-js:!max-h-[405px] no-js:md:!max-h-[584px] no-js:2xl:!max-h-[initial]',
        'print:!w-full',
        'print:max-h-none print:bg-inherit print:border-none print:shadow-none print:!mx-auto print:!mb-4 print:!p-0 print:rounded-none',
      )}
    >
      <InfoCard onMoreClick={handleOpen} />
      <div
        className={cx(
          'transition-all duration-500 ease-in-out 2xl:opacity-100 2xl:visible',
          showSideBar ? 'opacity-100 visible' : 'opacity-0 invisible',
          'print:visible print:opacity-100',
          'no-js:!opacity-100 no-js:!visible',
        )}
      >
        <Separator />

        <ul
          className={cx(
            'grid grid-cols-1fr gap-[16px] md:gap-[20px] lg:gap-x-[15px]',
            'lg:grid-cols-1fr1fr lg:gap-y-[30px] 2xl:grid-cols-1fr',
            'print:flex print:flex-col print:gap-0',
          )}
        >
          <ContactItemEmail />
          <ContactItemPhone />
          <ContactItemLocation />
        </ul>

        <Separator />

        <ul className="flex justify-start 2xl:justify-center items-center gap-[15px] pb-1 pl-[7px] print:hidden">
          <LinkFacebook />
          <LinkTwitter />
          <LinkGithub />
          <LinkNpm />
          <LinkLinkedin />
        </ul>
      </div>
    </aside>
  );
};
