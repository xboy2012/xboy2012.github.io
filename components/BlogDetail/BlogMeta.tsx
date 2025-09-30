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
    <div className="mb-8">
      <h1 className="mb-2 text-1 text-orangeYellowCrayola print:text-inherit">
        {title}
      </h1>
      <span
        className={cx(
          'mr-1 p-1 rounded bg-orangeYellowCrayola text-eerieBlack3',
          'print:text-white print:bg-black',
        )}
      >
        {category}
      </span>
      <time>{formatDateTime(datetime)}</time>
    </div>
  );
};
