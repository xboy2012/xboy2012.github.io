import cx from 'classnames';
import { userData } from '../../../../src/data';
import { ArticleTitle } from '../../../../components/ArticleTitle';
import { IconBox } from '../../../../components/IconBox';
import { TimelineList } from '../../../../components/TimelineList';

export default function Resume() {
  return (
    <article className="animate-fade">
      <ArticleTitle title="Resume" />

      <section className="mb-[30px]">
        <div className="flex items-center gap-[15px] mb-[25px]">
          <IconBox />
          <h3 className="text-white2 capitalize text-2">Education</h3>
        </div>
        <TimelineList data={userData.educations} />
      </section>

      <section className="mb-[30px]">
        <div className="flex items-center gap-[15px] mb-[25px]">
          <IconBox />
          <h3 className="text-white2 capitalize text-2">Experience</h3>
        </div>
        <TimelineList data={userData.workExperiences} />
      </section>

      <section className="skill">
        <h3 className="text-white2 capitalize text-2 mb-5">My skills</h3>

        <ul
          className={cx(
            'relative bg-borderGradientOnyx',
            'pt-[45px] pb-[15px] px-[15px] md:pt-[25px] md:pb-[30px] md:px-[30px]',
            'rounded-[14px] shadow-2 cursor-pointer z-1',
          )}
        >
          <div className="absolute inset-px bg-bgGradientJet bg-eerieBlack1 rounded-inherit -z-1" />
          {userData.skills.map(({ skill, percent }) => {
            return (
              <li key={skill} className="mb-[15px] md:mb-[25px] !last:mb-0">
                <div className="flex items-center gap-[5px] mb-2">
                  <h5 className="text-white2 capitalize text-7 font-500">
                    {skill}
                  </h5>
                  <data
                    value={percent}
                    className="text-lightGray text-7 font-300"
                  >
                    {percent}%
                  </data>
                </div>

                <div className="bg-jet w-full h-2 rounded-[10px]">
                  <div
                    className="bg-textGradientYellow h-full rounded-inherit"
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
}
