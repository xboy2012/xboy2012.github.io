import { cx } from '../../src/utils/cx';
import { AvatarBox } from './AvatarBox';
import { MoreButton } from './MoreButton';
import { userData } from '../../src/data';

interface Props {
  onMoreClick?: () => void;
}

export const InfoCard = ({ onMoreClick }: Props) => {
  const { name, title } = userData;
  return (
    <div className="relative flex justify-start items-center gap-[15px] md:gap-[25px] 2xl:flex-col">
      <AvatarBox alt={name} />
      <div className="print:flex print:flex-col">
        <h1
          className={cx(
            'text-white2 text-3 font-500 -tracking-[0.25px] mb-2.5',
            'md:mb-[15px] 2xl:whitespace-nowrap 2xl:text-center',
            'print:mb-0 print:text-inherit',
          )}
          title={name}
        >
          {name}
        </h1>
        <p
          className={cx(
            'text-white bg-onyx text-8 font-300 w-max py-[3px] px-3 rounded-lg',
            'md:py-[5px] md:px-[18px] 2xl:m-auto',
            'print:text-inherit print:bg-inherit print:!mt-0 print:!p-0 print:mb-4 print:text-4',
          )}
        >
          {title}
        </p>
      </div>
      <MoreButton onClick={onMoreClick} />
    </div>
  );
};
