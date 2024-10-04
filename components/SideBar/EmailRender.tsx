import { useEffect, useState } from 'react';
import { cx } from '../../src/utils/cx';
import { Obfuscate } from '../Obfuscate';
import { preventDefault } from '../../src/utils/preventDefault';

export const EmailRender = ({ email }: { email: string }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <a
      onClick={mounted ? undefined : preventDefault}
      href={mounted ? `mailto:${email}` : undefined}
      className={cx(
        'block cursor-pointer text-white2 text-[13px] md:text-[15px] 2xl:text-[14px]',
        '2xl:whitespace-nowrap 2xl:overflow-hidden 2xl:text-ellipsis 2xl:font-300',
      )}
    >
      <Obfuscate text={email} />
    </a>
  );
};
