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
      <h1 className="mb-2 text-6 text-orangeYellowCrayola md:text-8 print:text-inherit">
        {title}
      </h1>
      <span
        className={cx(
          'mr-1 rounded bg-orangeYellowCrayola p-1 text-eerieBlack3',
          'print:bg-black print:text-white',
        )}
      >
        {category}
      </span>
      <time>{formatDateTime(datetime)}</time>
    </div>
  );
};
