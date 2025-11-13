import { cx } from '../../src/utils/cx';

export const SkillItem = ({
  skill,
  percent,
  isLast,
}: {
  skill: string;
  percent: number;
  isLast: boolean;
}) => {
  return (
    <li className={cx('md:mb-6 print:!mb-0', isLast ? 'mb-0' : 'mb-4')}>
      <div className="mb-2 flex items-center gap-1.25">
        <h5 className="text-3.5 font-500 text-white2 capitalize md:text-4 print:text-inherit">
          {skill}
        </h5>
        <p>
          <data
            value={percent}
            className="text-3.5 font-300 text-lightGray md:text-4 print:text-inherit"
          >
            {`${percent}%`}
          </data>
        </p>
      </div>
      <div className="h-2 w-full rounded-2.5 bg-jet print:hidden">
        <div
          className="h-full rounded-inherit bg-textGradientYellow"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </li>
  );
};
