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
        'block cursor-pointer text-3.5 md:text-4 font-300',
        '2xl:whitespace-nowrap 2xl:overflow-hidden 2xl:text-ellipsis',
      )}
    >
      <Obfuscate text={email} />
    </a>
  );
};
