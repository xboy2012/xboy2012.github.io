import { cx } from '../../src/utils/cx';
import { Obfuscate } from '../Obfuscate';
import { displayPhoneCA } from '../../src/utils/displayPhoneCA';
import { preventDefault } from '../../src/utils/preventDefault';
import { useMounted } from '../../src/hooks/useMounted';

export const PhoneRender = ({ phoneCA }: { phoneCA: string }) => {
  const mounted = useMounted();
  return (
    <a
      onClick={mounted ? undefined : preventDefault}
      href={mounted ? `tel:${phoneCA}` : '#'}
      className={cx(
        'text-3.5 md:text-4 font-300 block cursor-pointer',
        '2xl:truncate',
      )}
    >
      <Obfuscate text={displayPhoneCA(phoneCA)} />
    </a>
  );
};
