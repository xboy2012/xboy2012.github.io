import { useMemo, type FC } from 'react';
import { cx } from '../../src/utils/cx';
import { getCompanyById, type CompanyId } from '../../src/companies';

const classNames: Record<string, string> = {
  microsoft: 'bg-cover bg-microsoft bg-white',
  tencent: 'bg-contain bg-tencent bg-white',
  nio: 'bg-contain bg-nio bg-white',
  leetcode: 'bg-contain bg-leetcode bg-white',
  temu: 'bg-cover bg-temu',
  pdd: 'bg-cover bg-pdd',
  myshell: 'bg-cover bg-myshell',
  wacai: 'bg-cover bg-wacai',
} satisfies Record<CompanyId, string>;

interface ClientItemProps {
  id: CompanyId;
}

export const ClientItem: FC<ClientItemProps> = ({ id }) => {
  const { name, link } = useMemo(() => getCompanyById(id), [id]);
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
            classNames[id],
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
