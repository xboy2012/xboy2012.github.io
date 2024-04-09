import { BookOutline } from '../../../../components/Icons/BookOutline';
import { userData } from '../../../../src/data';

export default function Home() {
  return (
    <article className="resume active">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOutline />
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {userData.educations.map(({ from, to, school, desc }, index) => {
            return (
              <li key={index} className="timeline-item">
                <h4 className="text-white2 text-4 timeline-item-title">
                  {school}
                </h4>

                {!!(from && to) && (
                  <span>
                    {from} — {to}
                  </span>
                )}

                <p className="timeline-text">{desc}</p>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOutline />
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {userData.workExperiences.map((o, index) => {
            const { from, to, position, desc: rawDesc } = o;
            const desc = typeof rawDesc === 'string' ? [rawDesc] : rawDesc;

            return (
              <li key={index} className="timeline-item">
                <h4 className="text-white2 text-4 timeline-item-title">
                  {position}
                </h4>

                {!!(from && to) && (
                  <span>
                    {from} — {to}
                  </span>
                )}
                {desc.map((text, i) => {
                  return (
                    <p className="timeline-text" key={i}>
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
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          {userData.skills.map(({ skill, percent }) => {
            return (
              <li key={skill} className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">{skill}</h5>
                  <data value={percent}>{percent}%</data>
                </div>

                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
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
