import { cx } from '../../src/utils/cx';
import { formatDateTime } from '../../src/utils/formatDateTime';

export const BlogMeta = ({
  title,
  category,
  datetime,
}: {
  title: string;
  category: string;
  datetime: `${string}-${string}-${string}`;
}) => {
  return (
    <div className="mb-10">
      <h1 className="text-6 md:text-8 text-orangeYellowCrayola mb-2 print:text-inherit">
        {title}
      </h1>
      <span
        className={cx(
          'bg-orangeYellowCrayola text-eerieBlack3 mr-1 rounded p-1',
          'print:bg-black print:text-white',
        )}
      >
        {category}
      </span>
      <time>{formatDateTime(datetime)}</time>
    </div>
  );
};
