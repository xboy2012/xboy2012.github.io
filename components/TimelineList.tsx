import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { cx } from '../src/utils/cx';
import type { TimelineItem } from '../src/types';

const Wrapper: FC<{
  isLast: boolean;
  children: ReactNode;
}> = ({ isLast, children }) => {
  return (
    <li className={cx('relative break-inside-avoid', !isLast && 'mb-5')}>
      {children}
    </li>
  );
};

const Prefix: FC<{
  isFirst: boolean;
  isLast: boolean;
}> = ({ isFirst, isLast }) => {
  return (
    <div aria-hidden className="print:hidden">
      {isFirst && (
        <div
          className={cx(
            'absolute -top-12.5 -left-7.5 h-15 md:-left-10',
            'w-px bg-jet',
          )}
        />
      )}
      {!isLast && (
        <div
          className={cx(
            'absolute top-2 -bottom-7.5 -left-7.5 md:-left-10',
            'w-px bg-jet',
          )}
        />
      )}
      <div
        className={cx(
          'absolute top-1.25 -left-8 h-1.5 w-1.5',
          'md:-left-11 md:h-2 md:w-2',
          'rounded-full bg-textGradientYellow shadow-timeline',
        )}
      />
    </div>
  );
};

const Desc: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <p className="leading-x1.6 font-300 text-lightGray 2xl:max-w-175 print:text-inherit">
      {children}
    </p>
  );
};

const Title: FC<{ children: string }> = ({ children }) => {
  return (
    <h4 className="mb-2 text-3.5 leading-x1.3 text-white2 md:text-4 print:flex-grow print:text-inherit">
      {children}
    </h4>
  );
};

const Period: FC<{
  from: string;
  to: string;
}> = ({ from, to }) => {
  return (
    <span className="block leading-x1.6 font-400 text-vegasGold print:text-inherit">
      {`${from} — ${to}`}
    </span>
  );
};

export const TimelineList = memo(({ data }: { data: TimelineItem[] }) => {
  const lastIndex = data.length - 1;
  return (
    <ul className={cx('ml-11 text-3.5 md:ml-16 md:text-4', 'print:!ml-0')}>
      {data.map(({ from, to, title, desc }, index) => {
        const isFirst = index === 0;
        const isLast = index === lastIndex;
        return (
          <Wrapper key={index} isLast={isLast}>
            <Prefix isFirst={isFirst} isLast={isLast} />
            <div className="print:flex">
              <Title>{title}</Title>
              {!!(from && to) && <Period from={from} to={to} />}
            </div>
            {Array.isArray(desc) ? (
              desc.map((text, i) => {
                return (
                  <Desc key={i}>
                    <span>•</span> <span>{text}</span>
                  </Desc>
                );
              })
            ) : (
              <Desc>{desc}</Desc>
            )}
          </Wrapper>
        );
      })}
    </ul>
  );
});
