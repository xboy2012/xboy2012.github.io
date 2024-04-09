'use client';

import cx from 'classnames';
import { useCallback, useState } from 'react';
import { TestimonialDialog } from './TestimonialDialog';
import { testimonials } from '../../../../src/testimonials';

export const Testimonials = () => {
  const [curTestNominal, setCurTestNominal] = useState(testimonials[0]);
  const [dialogVisible, setDialogVisible] = useState(false);
  const handleDialogClose = useCallback(() => {
    setDialogVisible(false);
  }, []);
  return (
    <>
      <section className="testimonials">
        <h3 className="text-white2 capitalize text-2 testimonials-title">
          Testimonials
        </h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((item, index) => {
            const { name, avatar, text } = item;
            return (
              <li
                className="min-w-full snap-center xl:min-w-test_xl"
                key={index}
              >
                <div
                  className="content-card"
                  onClick={() => {
                    setCurTestNominal(item);
                    setDialogVisible(true);
                  }}
                >
                  <figure
                    className={cx(
                      'absolute top-0 left-0 rounded-[14px] md:rounded-[20px]',
                      'translate-x-[15px] -translate-y-[25px] md:translate-x-[30px] md:-translate-y-[30px]',
                      'bg-bgGradientOnyx shadow-1',
                    )}
                  >
                    <img
                      src={avatar}
                      alt={name}
                      width="60"
                      className="md:w-[80px]"
                    />
                  </figure>

                  <h4 className="text-white2 capitalize text-4 mb-[7px] md:mb-2.5 md:ml-[95px]">
                    {name}
                  </h4>

                  <div className="text-lightGray text-6 font-300 leading-[1.6] line-clamp-4 md:line-clamp-2">
                    <p>{text}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <TestimonialDialog
        data={curTestNominal}
        visible={dialogVisible}
        onClose={handleDialogClose}
      />
    </>
  );
};
