import { cx } from '../../src/utils/cx';
import { Obfuscate } from '../Obfuscate';
import { preventDefault } from '../../src/utils/preventDefault';
import { useMounted } from '../../src/hooks/useMounted';

export const EmailRender = ({ email }: { email: string }) => {
  const mounted = useMounted();
  return (
    <a
      onClick={mounted ? undefined : preventDefault}
      href={mounted ? `mailto:${email}` : '#'}
      className={cx(
        'text-3.5 md:text-4 font-300 block cursor-pointer',
        '2xl:truncate',
      )}
    >
      <Obfuscate text={email} />
    </a>
  );
};
