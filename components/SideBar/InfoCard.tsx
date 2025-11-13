import { cx } from '../../src/utils/cx';
import { AvatarBox } from './AvatarBox';
import { MoreButton } from './MoreButton';
import { userData } from '../../src/data';

interface Props {
  onMoreClick: () => void;
}

export const InfoCard = ({ onMoreClick }: Props) => {
  const { name, title } = userData;
  return (
    <div className="relative flex items-center justify-start gap-4 md:gap-6 2xl:flex-col">
      <AvatarBox alt={name} />
      <div className="print:flex print:flex-col">
        <h1
          className={cx(
            'mb-2.5 text-4.5 font-500 text-white2 md:text-6.5',
            'md:mb-4 2xl:text-center 2xl:whitespace-nowrap',
            'print:mb-0 print:text-inherit',
          )}
          title={name}
        >
          {name}
        </h1>
        <p
          className={cx(
            'w-max rounded-lg bg-onyx px-3 py-1 text-3 font-300 text-white',
            'md:px-5 md:py-1.25 2xl:m-auto',
            'print:!mt-0 print:mb-4 print:bg-inherit print:!p-0 print:text-4.5 print:text-inherit',
          )}
        >
          {title}
        </p>
      </div>
      <MoreButton onClick={onMoreClick} />
    </div>
  );
};
