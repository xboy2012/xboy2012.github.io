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
        'bg-eerieBlack2 border border-solid border-jet rounded-5 p-4',
        'shadow-1 xl:shadow-1xl z-1 mb-4 overflow-hidden transition-all duration-500 ease-in-out',
        'md:w-130 md:mx-auto md:p-7.5 md:mb-7.5',
        'lg:w-175',
        'xl:w-237.5 xl:shadow-5',
        '2xl:w-auto 2xl:sticky 2xl:top-15 2xl:h-full 2xl:mb-0 2xl:pt-15 2xl:z-1',
        showSideBar
          ? 'max-h-101 md:max-h-146 2xl:max-h-[initial]'
          : 'max-h-28 md:max-h-45 2xl:max-h-max',
        // always expand the area when javascript is disabled
        'no-js:!max-h-101 no-js:md:!max-h-146 no-js:2xl:!max-h-[initial]',
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
            'grid grid-cols-1fr gap-4 md:gap-5 lg:gap-x-4',
            'lg:grid-cols-1fr1fr lg:gap-y-7.5 2xl:grid-cols-1fr',
            'print:flex print:flex-col print:gap-0',
          )}
        >
          <ContactItemEmail />
          <ContactItemPhone />
          <ContactItemLocation />
        </ul>

        <Separator />

        <ul className="flex justify-start 2xl:justify-center items-center gap-4 pb-1 pl-2 print:hidden">
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
