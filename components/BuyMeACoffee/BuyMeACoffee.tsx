'use client';

import { createPortal } from 'react-dom';
import { useMounted } from '../../src/hooks/useMounted';
import { BuyMeACoffeeButton } from './BuyMeACoffeeButton';
import { BuyMeACoffeeDialog } from './BuyMeACoffeeDialog';
import { BuyMeACoffeeProvider } from './BuyMeACoffeeContext';

export const BuyMeACoffee = () => {
  const mounted = useMounted();
  if (!mounted) {
    return null;
  }
  return createPortal(
    <BuyMeACoffeeProvider>
      <BuyMeACoffeeButton />
      <BuyMeACoffeeDialog />
    </BuyMeACoffeeProvider>,
    document.body,
  );
};
