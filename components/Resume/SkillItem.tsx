export const SkillItem = ({
  skill,
  percent,
}: {
  skill: string;
  percent: number;
}) => {
  return (
    <li className="mb-4 md:mb-6 !last:mb-0 print:!mb-0">
      <div className="flex items-center gap-1.25 mb-2">
        <h5 className="text-white2 capitalize text-3.5 md:text-4 font-500 print:text-inherit">
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
      <div className="bg-jet w-full h-2 rounded-2.5 print:hidden">
        <div
          className="bg-textGradientYellow h-full rounded-inherit"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </li>
  );
};
