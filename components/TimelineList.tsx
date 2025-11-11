import { memo } from 'react';
import { cx } from '../src/utils/cx';
import type { TimelineItem } from '../src/types';

export const TimelineList = memo(({ data }: { data: TimelineItem[] }) => {
  const lastIndex = data.length - 1;
  return (
    <ul className={cx('text-3.5 md:text-4 ml-11 md:ml-16', 'print:!ml-0')}>
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
                  'absolute -top-12.5 -left-7.5 h-15 md:-left-10',
                  'bg-jet w-px',
                  'print:hidden',
                )}
                aria-hidden
              />
            )}
            {!isLast && (
              <div
                className={cx(
                  'absolute top-2 -bottom-7.5 -left-7.5 md:-left-10',
                  'bg-jet w-px',
                  'print:hidden',
                )}
                aria-hidden
              />
            )}

            <div className="print:flex">
              <h4 className="text-white2 text-3.5 md:text-4 leading-x1.3 mb-2 print:flex-grow print:text-inherit">
                {title}
              </h4>

              {!!(from && to) && (
                <span className="text-vegasGold font-400 leading-x1.6 block print:text-inherit">
                  {`${from} — ${to}`}
                </span>
              )}
            </div>

            {desc.map((text, i) => {
              return (
                <p
                  className="text-lightGray font-300 leading-x1.6 2xl:max-w-175 print:text-inherit"
                  key={i}
                >
                  {text}
                </p>
              );
            })}

            <div
              className={cx(
                'absolute top-1.25 -left-8 h-1.5 w-1.5',
                'md:-left-11 md:h-2 md:w-2',
                'bg-textGradientYellow shadow-timeline rounded-full',
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
