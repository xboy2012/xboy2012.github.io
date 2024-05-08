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
    <div className="mb-2">
      <h1 className="text-xl text-orangeYellowCrayola">{title}</h1>
      <p>{desc}</p>
      <span className="mr-1 p-1 rounded bg-orangeYellowCrayola text-eerieBlack3">
        {category}
      </span>
      <time>{formatDateTime(datetime)}</time>
    </div>
  );
};
