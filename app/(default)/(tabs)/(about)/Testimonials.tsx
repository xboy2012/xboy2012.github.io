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
      <section className="mb-[30px]">
        <h3 className="text-white2 capitalize text-2 mb-5 md:mb-[25px]">
          Testimonials
        </h3>

        <ul
          className={cx(
            'flex justify-start items-start',
            'gap-[15px] md:gap-[30px]',
            'my-0 -mx-[15px] md:-mx-[30px]',
            'pt-[25px] pb-[35px] px-[15px] md:pt-[30px] md:px-[30px]',
            'overflow-x-auto scroll-smooth',
            '[overscroll-behavior-inline:contain]',
            '[scroll-snap-type:inline_mandatory]',
            'webkit-scrollbar:w-[5px] webkit-scrollbar:h-[5px]',
            'webkit-scrollbar-track:bg-onyx',
            'webkit-scrollbar-track:rounded-[5px]',
            'webkit-scrollbar-thumb:bg-orangeYellowCrayola',
            'webkit-scrollbar-thumb:rounded-[5px]',
            'webkit-scrollbar-button:w-[20px]',
            'lg:webkit-scrollbar-button:w-[100px]',
          )}
        >
          {testimonials.map((item, index) => {
            const { name, avatar, text } = item;
            return (
              <li
                className="min-w-full snap-center xl:min-w-test_xl"
                key={index}
              >
                <div
                  className={cx(
                    'relative bg-borderGradientOnyx',
                    'pt-[45px] pb-[15px] px-[15px] md:pt-[25px] md:pb-[30px] md:px-[30px]',
                    'rounded-[14px] shadow-2 cursor-pointer z-1',
                  )}
                  onClick={() => {
                    setCurTestNominal(item);
                    setDialogVisible(true);
                  }}
                >
                  <div className="absolute inset-px bg-bgGradientJet bg-eerieBlack1 rounded-inherit -z-1" />
                  <figure
                    className={cx(
                      'absolute top-0 left-0 rounded-[14px] md:rounded-[20px]',
                      'translate-x-[15px] md:translate-x-[30px]',
                      '-translate-y-[25px] md:-translate-y-[30px]',
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
