import cx from 'classnames';
import type { TestimonialData } from '../../../../src/types';
import { CloseOutline } from '../../../../components/Icons/CloseOutline';
import { formatDateTime } from '../../../../src/utils/formatDateTime';

export const TestimonialDialog = ({
  data,
  visible,
  onClose,
}: {
  data: TestimonialData;
  visible: boolean;
  onClose: () => void;
}) => {
  const { name, avatar, datetime, text } = data;
  return (
    <div
      className={cx(
        'fixed top-0 left-0 w-full h-full md:p-[20px]',
        'flex justify-center items-center overflow-y-auto overscroll-contain z-20',
        'webkit-scrollbar:hidden',
        visible ? 'visible' : 'invisible',
      )}
    >
      <div
        className={cx(
          'fixed top-0 left-0 w-full h-full bg-overlay z-1 transition-all duration-250 ease-default',
          visible ? 'opacity-80 visible' : 'opacity-0 invisible',
        )}
      />

      <section
        className={cx(
          'bg-eerieBlack2 relative p-[15px] my-[15px] mx-[12px]',
          'border border-solid border-jet rounded-[14px]',
          'shadow-5 transition-all duration-250 ease-default z-2',
          'md:flex md:justify-start md:items-stretch md:gap-[25px] md:p-[30px] md:rounded-[20px]',
          'lg:gap-[35px] lg:max-w-[680px]',
          visible ? 'scale-100 opacity-1' : 'scale-[1.2] opacity-0',
        )}
      >
        <button
          className={cx(
            'absolute top-[15px] right-[15px] bg-onyx rounded-lg w-8 h-8',
            'flex justify-center items-center text-white2 text-lg opacity-70',
            'hover:opacity-100 focus:opacity-100',
          )}
          onClick={onClose}
        >
          <CloseOutline />
        </button>

        <div className="modal-img-wrapper">
          <figure
            className={cx(
              'bg-bgGradientOnyx w-max rounded-[14px] mb-[15px] shadow-2',
              'md:rounded-[18px] md:mb-0',
            )}
          >
            <img
              src={avatar}
              alt={name}
              width="80"
              className="md:w-[65px] lg:w-[80px]"
            />
          </figure>

          <img
            src="/assets/icon-quote.svg"
            alt="quote icon"
            className="hidden md:block grow w-[35px]"
          />
        </div>

        <div>
          <h4 className="text-white2 capitalize text-2 mb-1">{name}</h4>

          <time
            dateTime={datetime}
            className="text-6 text-lightGray70 font-300 mb-2.5"
          >
            {formatDateTime(datetime)}
          </time>

          <div>
            <p className="text-lightGray text-6 font-300 leading-[1.6]">
              {text}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
