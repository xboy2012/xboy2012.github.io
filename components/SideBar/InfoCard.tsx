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
            'text-white2 text-4.5 md:text-6.5 font-500 mb-2.5',
            'md:mb-4 2xl:text-center 2xl:whitespace-nowrap',
            'print:mb-0 print:text-inherit',
          )}
          title={name}
        >
          {name}
        </h1>
        <p
          className={cx(
            'bg-onyx text-3 font-300 w-max rounded-lg px-3 py-1 text-white',
            'md:px-5 md:py-1.25 2xl:m-auto',
            'print:text-4.5 print:!mt-0 print:mb-4 print:bg-inherit print:!p-0 print:text-inherit',
          )}
        >
          {title}
        </p>
      </div>
      <MoreButton onClick={onMoreClick} />
    </div>
  );
};
