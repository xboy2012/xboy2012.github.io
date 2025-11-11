export const SkillItem = ({
  skill,
  percent,
}: {
  skill: string;
  percent: number;
}) => {
  return (
    <li className="!last:mb-0 mb-4 md:mb-6 print:!mb-0">
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
