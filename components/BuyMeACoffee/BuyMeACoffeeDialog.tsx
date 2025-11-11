import { useCallback } from 'react';
import { colors } from '../../src/config/colors';
import { cx } from '../../src/utils/cx';
import { BuyMeACoffeeFrame } from './BuyMeACoffeeFrame';
import { useBuyMeACoffeeContext } from './BuyMeACoffeeContext';

const CloseButton = () => {
  const { setDialogVisible } = useBuyMeACoffeeContext();
  const onClick = useCallback(() => {
    setDialogVisible(false);
  }, [setDialogVisible]);
  return (
    <button
      className={cx(
        'absolute top-2 right-2 h-8 w-8',
        'flex items-center justify-center',
        'cursor-pointer border-none outline-none',
      )}
      onClick={onClick}
      title="Close"
    >
      <svg
        className="h-4 w-4"
        width="16"
        height="16"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.45156 27.6516L0.351562 25.5516L11.9016 14.0016L0.351562 2.45156L2.45156 0.351562L14.0016 11.9016L25.5516 0.351562L27.6516 2.45156L16.1016 14.0016L27.6516 25.5516L25.5516 27.6516L14.0016 16.1016L2.45156 27.6516Z"
          fill="#666"
        />
      </svg>
    </button>
  );
};

const InnerDialog = () => {
  return (
    <div
      className={cx(
        'fixed right-4 bottom-18 z-1000',
        'rounded-2.5 h-150 w-105 bg-white',
      )}
    >
      <BuyMeACoffeeFrame
        account="xboy2012"
        color={colors.vegasGold}
        className={cx('h-full w-full', 'rounded-2.5')}
      />
      <CloseButton />
    </div>
  );
};

export const BuyMeACoffeeDialog = () => {
  const { dialogVisible } = useBuyMeACoffeeContext();
  if (!dialogVisible) {
    return null;
  }
  return <InnerDialog />;
};
