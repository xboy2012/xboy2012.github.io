import { useMemo } from 'react';
import { getBuyMeACoffeeFrameUrl } from './getBuyMeACoffeeFrameUrl';

interface BuMeACoffeeFrameProps {
  account: string;
  className?: string;
  color: string;
}

export const BuyMeACoffeeFrame = ({
  account,
  className,
  color,
}: BuMeACoffeeFrameProps) => {
  const src = useMemo(
    () => getBuyMeACoffeeFrameUrl({ account, color }),
    [account, color],
  );
  return <iframe className={className} src={src} />;
};
