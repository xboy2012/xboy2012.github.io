import { userData } from '../../../../src/data';
import { ArticleTitle } from '../../../../components/ArticleTitle';
import { IconBox } from '../../../../components/IconBox';
import styles from './index.module.css';

export default function Resume() {
  return (
    <article className="animate-fade">
      <ArticleTitle title="Resume" />

      <section className="mb-[30px]">
        <div className="flex items-center gap-[15px] mb-[25px]">
          <IconBox />
          <h3 className="text-white2 capitalize text-2">Education</h3>
        </div>

        <ol className={styles.timelineList}>
          {userData.educations.map(({ from, to, school, desc }, index) => {
            return (
              <li key={index} className={styles.timelineItem}>
                <h4 className="text-white2 text-6 leading-[1.3] mb-[7px]">
                  {school}
                </h4>

                {!!(from && to) && (
                  <span>
                    {from} — {to}
                  </span>
                )}

                <p className="text-lightGray font-300 leading-[1.6] 2xl:max-w-[700px]">
                  {desc}
                </p>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mb-[30px]">
        <div className="flex items-center gap-[15px] mb-[25px]">
          <IconBox />
          <h3 className="text-white2 capitalize text-2">Experience</h3>
        </div>

        <ol className={styles.timelineList}>
          {userData.workExperiences.map((o, index) => {
            const { from, to, position, desc: rawDesc } = o;
            const desc = typeof rawDesc === 'string' ? [rawDesc] : rawDesc;

            return (
              <li key={index} className={styles.timelineItem}>
                <h4 className="text-white2 text-6 leading-[1.3] mb-[7px]">
                  {position}
                </h4>

                {!!(from && to) && (
                  <span>
                    {from} — {to}
                  </span>
                )}
                {desc.map((text, i) => {
                  return (
                    <p
                      className="text-lightGray font-300 leading-[1.6] 2xl:max-w-[700px]"
                      key={i}
                    >
                      {text}
                    </p>
                  );
                })}
              </li>
            );
          })}
        </ol>
      </section>

      <section className="skill">
        <h3 className="text-white2 capitalize text-2 mb-5">My skills</h3>

        <ul className="p-5 content-card">
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
