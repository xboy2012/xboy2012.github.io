import { useEffect, useState } from 'react';
import { cx } from '../../src/utils/cx';
import { Obfuscate } from '../Obfuscate';
import { displayPhoneCA } from '../../src/utils/displayPhoneCA';
import { preventDefault } from '../../src/utils/preventDefault';

export const PhoneRender = ({ phoneCA }: { phoneCA: string }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <a
      onClick={mounted ? undefined : preventDefault}
      href={mounted ? `tel:${phoneCA}` : undefined}
      className={cx(
        'block cursor-pointer text-7 font-300',
        '2xl:whitespace-nowrap 2xl:overflow-hidden 2xl:text-ellipsis',
      )}
    >
      <Obfuscate text={displayPhoneCA(phoneCA)} />
    </a>
  );
};
