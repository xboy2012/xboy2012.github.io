import cx from 'classnames';
import type { CompanyName } from '../../src/types';

const classNames: Record<CompanyName, string> = {
  Microsoft: 'bg-cover bg-microsoft bg-white',
  Tencent: 'bg-contain bg-tencent bg-white',
  NIO: 'bg-contain bg-nio bg-white',
  LeetCode: 'bg-contain bg-leetcode bg-white',
  Temu: 'bg-cover bg-temu',
  Pinduoduo: 'bg-cover bg-pdd',
  'MyShell.ai': 'bg-cover bg-myshell',
  Wacai: 'bg-cover bg-wacai',
};

export const ClientItem = ({
  name,
  link,
}: {
  name: CompanyName;
  link: string;
}) => {
  return (
    <li
      className={cx(
        'min-w-[calc(50%-8px)] sm:min-w-[calc(33.33%-10px)]',
        'md:min-w-[calc(33.33%-35px)] xl:min-w-[calc(25%-38px)]',
        'snap-start aspect-[1.63] overflow-hidden',
      )}
    >
      <a
        href={link}
        target="_blank"
        title={name}
        className="relative block w-full h-full"
      >
        <div
          className={cx(
            'h-full rounded bg-center bg-no-repeat',
            classNames[name],
          )}
        />
        <p className="absolute -left-[1000px] -top-[1000px]">{name}</p>
      </a>
    </li>
  );
};
