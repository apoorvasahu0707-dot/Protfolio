import "./experience.css";
import { experience, education } from "./data";

const Block = ({ title, items }) => (
  <div className="experience-box">
    <h3>{title}</h3>
    {items.map((e) => (
      <div className="experience-card" key={e.role + e.period}>
        <span>{e.period}</span>
        <h4>{e.role}</h4>
        {e.org && <h5>{e.org}</h5>}
        <p>{e.text}</p>
      </div>
    ))}
  </div>
);

const Experience = () => {
  return (
    <section className="experience">
      <div className="experience-heading">
        <span>MY JOURNEY</span>

        <h2>
          Experience <b>&amp; Education</b>
        </h2>

        <p>My professional experience and academic background.</p>
      </div>

      <div className="experience-grid">
        <Block title="Experience" items={experience} />
        <Block title="Education" items={education} />
      </div>
    </section>
  );
};

export default Experience;
