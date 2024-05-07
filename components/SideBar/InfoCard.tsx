import cx from 'classnames';
import { AvatarBox } from './AvatarBox';
import { MoreButton } from './MoreButton';
import { userData } from '../../src/data';
import src from '../../src/utils/getImageUrl';

interface Props {
  onMoreClick?: () => void;
}

export const InfoCard = ({ onMoreClick }: Props) => {
  const { name, title } = userData;
  return (
    <div className="relative flex justify-start items-center gap-[15px] md:gap-[25px] 2xl:flex-col">
      <AvatarBox avatar={src(require('./images/my-avatar.jpg'))} alt={name} />
      <div>
        <h1
          className={cx(
            'text-white2 text-3 font-500 -tracking-[0.25px] mb-2.5',
            'md:mb-[15px] 2xl:whitespace-nowrap 2xl:text-center',
          )}
          title={name}
        >
          {name}
        </h1>
        <p
          className={cx(
            'text-white bg-onyx text-8 font-300 w-max py-[3px] px-3 rounded-lg',
            'md:py-[5px] md:px-[18px] 2xl:m-auto',
          )}
        >
          {title}
        </p>
      </div>
      <MoreButton onClick={onMoreClick} />
    </div>
  );
};
