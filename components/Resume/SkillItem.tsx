export const SkillItem = ({
  skill,
  percent,
}: {
  skill: string;
  percent: number;
}) => {
  return (
    <li className="mb-[15px] md:mb-[25px] !last:mb-0 print:!mb-0">
      <div className="flex items-center gap-[5px] mb-2">
        <h5 className="text-white2 capitalize text-7 font-500 print:text-inherit">
          {skill}
        </h5>
        <p>
          <data
            value={percent}
            className="text-lightGray text-7 font-300 print:text-inherit"
          >
            {`${percent}%`}
          </data>
        </p>
      </div>
      <div className="bg-jet w-full h-2 rounded-[10px] print:hidden">
        <div
          className="bg-textGradientYellow h-full rounded-inherit"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </li>
  );
};
