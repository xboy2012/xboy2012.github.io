import { cx } from '../../src/utils/cx';
import type { CompanyName } from '../../src/companies';

const classNames: Record<string, string> = {
  'Microsoft': 'bg-cover bg-microsoft bg-white',
  'Tencent': 'bg-contain bg-tencent bg-white',
  'NIO': 'bg-contain bg-nio bg-white',
  'LeetCode': 'bg-contain bg-leetcode bg-white',
  'Temu': 'bg-cover bg-temu',
  'Pinduoduo': 'bg-cover bg-pdd',
  'MyShell.ai': 'bg-cover bg-myshell',
  'Wacai': 'bg-cover bg-wacai',
} satisfies Record<CompanyName, string>;

export const ClientItem = ({ name, link }: { name: string; link: string }) => {
  return (
    <li
      className={cx(
        'min-w-[calc(50%-8px)] sm:min-w-[calc(33.33%-10px)]',
        'md:min-w-[calc(33.33%-35px)] xl:min-w-[calc(25%-38px)]',
        'aspect-5/3 snap-start overflow-hidden',
        'print:aspect-auto print:min-w-0',
      )}
    >
      <a
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        title={name}
        className="relative block h-full w-full"
      >
        <div
          className={cx(
            'h-full rounded bg-center bg-no-repeat',
            classNames[name],
            'print:hidden',
          )}
        />
        <p
          className={cx(
            'absolute -top-250 -left-250',
            'print:relative print:top-auto print:left-auto print:font-300',
          )}
        >
          {name}
        </p>
      </a>
    </li>
  );
};
