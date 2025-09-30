import { memo } from 'react';
import { cx } from '../src/utils/cx';
import type { TimelineItem } from '../src/types';

export const TimelineList = memo(({ data }: { data: TimelineItem[] }) => {
  const lastIndex = data.length - 1;
  return (
    <ul className={cx('text-6 ml-[45px] md:ml-[65px]', 'print:!ml-0')}>
      {data.map((o, index) => {
        const isFirst = index === 0;
        const isLast = index === lastIndex;
        const { from, to, title, desc: rawDesc } = o;
        const desc = typeof rawDesc === 'string' ? [rawDesc] : rawDesc;

        return (
          <li
            key={index}
            className={cx('relative break-inside-avoid', !isLast && 'mb-5')}
          >
            {isFirst && (
              <div
                className={cx(
                  'absolute -top-[50px] h-[60px] -left-[30px] md:-left-[40px]',
                  'w-px bg-jet',
                  'print:hidden',
                )}
                aria-hidden
              />
            )}
            {!isLast && (
              <div
                className={cx(
                  'absolute top-[8px] -bottom-[30px] -left-[30px] md:-left-[40px]',
                  'w-px bg-jet',
                  'print:hidden',
                )}
                aria-hidden
              />
            )}

            <div className="print:flex">
              <h4 className="text-white2 text-6 leading-[1.3] mb-[7px] print:text-inherit print:flex-grow">
                {title}
              </h4>

              {!!(from && to) && (
                <span className="block text-vegasGold font-400 leading-[1.6] print:text-inherit">
                  {`${from} — ${to}`}
                </span>
              )}
            </div>

            {desc.map((text, i) => {
              return (
                <p
                  className="text-lightGray font-300 leading-[1.6] 2xl:max-w-[700px] print:text-inherit"
                  key={i}
                >
                  {text}
                </p>
              );
            })}

            <div
              className={cx(
                'absolute top-[5px] h-1.5 w-1.5 -left-[33px]',
                'md:h-2 md:w-2 md:-left-[43px]',
                'bg-textGradientYellow rounded-full shadow-timeline',
                'print:hidden',
              )}
              aria-hidden
            />
          </li>
        );
      })}
    </ul>
  );
});
