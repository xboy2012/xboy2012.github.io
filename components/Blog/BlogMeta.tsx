import { formatDateTime } from '../../src/utils/formatDateTime';

export const BlogMeta = ({
  title,
  desc,
  category,
  datetime,
}: {
  title: string;
  desc: string;
  category: string;
  datetime: `${string}-${string}-${string}`;
}) => {
  return (
    <div className="mb-8">
      <h1 className="mb-2 text-1 text-orangeYellowCrayola">{title}</h1>
      <span className="mr-1 p-1 rounded bg-orangeYellowCrayola text-eerieBlack3">
        {category}
      </span>
      <time>{formatDateTime(datetime)}</time>
    </div>
  );
};
