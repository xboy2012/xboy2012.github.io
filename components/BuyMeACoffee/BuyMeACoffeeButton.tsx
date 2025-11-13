'use client';

import { useMemo, type AnchorHTMLAttributes } from 'react';
import { cx } from '../../src/utils/cx';
import { isUserAgentMobile } from '../../src/utils/isUserAgentMobile';
import { getBuyMeACoffeeUrl } from './getBuyMeACoffeeUrl';
import { useBuyMeACoffeeContext } from './BuyMeACoffeeContext';

// This component always renders in browser
export const BuyMeACoffeeButton = () => {
  const showAsLink = useMemo(() => isUserAgentMobile(navigator.userAgent), []);
  const { setDialogVisible } = useBuyMeACoffeeContext();

  const handleClick: AnchorHTMLAttributes<unknown>['onClick'] = useMemo(() => {
    if (showAsLink) {
      // should do nothing to prevent click
      return;
    }
    // should prevent default behavior and open dialog instead
    return (event) => {
      event.preventDefault();
      setDialogVisible((visible) => !visible);
    };
  }, [showAsLink, setDialogVisible]);

  const linkProps: AnchorHTMLAttributes<unknown> = useMemo(() => {
    if (showAsLink) {
      return {
        href: getBuyMeACoffeeUrl('xboy2012'),
        target: '_blank',
        rel: 'noopener noreferrer',
      };
    }
    return {
      href: '#',
      role: 'button',
    };
  }, [showAsLink]);

  return (
    <a
      className={cx(
        'z-1000 flex h-12 w-12 items-center justify-center',
        'rounded-full bg-vegasGold',
        'cursor-pointer border-none outline-none',
        'transition-all duration-250 ease-default hover:scale-110',
        'fixed right-4 bottom-20 sm:bottom-4',
      )}
      title="Buy Me A Coffee"
      {...linkProps}
      onClick={handleClick}
    >
      <div className="h-10 w-10 bg-coffee bg-contain bg-center bg-no-repeat" />
    </a>
  );
};
