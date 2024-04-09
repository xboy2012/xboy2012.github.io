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
    <div className={cx('modal-container', visible && 'active')}>
      <div className={cx('overlay', visible && 'active')}></div>

      <section className="testimonials-modal">
        <button className="modal-close-btn" onClick={onClose}>
          <CloseOutline />
        </button>

        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <img src={avatar} alt={name} width="80" />
          </figure>

          <img src="/assets/icon-quote.svg" alt="quote icon" />
        </div>

        <div className="modal-content">
          <h4 className="text-white2 capitalize text-2 modal-title">{name}</h4>

          <time dateTime={datetime}>{formatDateTime(datetime)}</time>

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
