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
        <h5 className="text-white2 text-3.5 md:text-4 font-500 capitalize print:text-inherit">
          {skill}
        </h5>
        <p>
          <data
            value={percent}
            className="text-lightGray text-3.5 md:text-4 font-300 print:text-inherit"
          >
            {`${percent}%`}
          </data>
        </p>
      </div>
      <div className="bg-jet rounded-2.5 h-2 w-full print:hidden">
        <div
          className="bg-textGradientYellow rounded-inherit h-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </li>
  );
};
