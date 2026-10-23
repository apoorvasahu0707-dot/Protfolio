import "./skill.css";
import { skills } from "./data";

const Skill = () => {
  return (
    <section className="skill-page">
      <div className="skill-left">
        <span className="about-title">MY SKILLS</span>

        <h2>
          Technologies <b>I Work With</b>
        </h2>

        <p>
          I work with modern web technologies to create responsive, interactive
          and user-friendly websites and applications.
        </p>

        <p>
          My focus is the MERN stack: building full stack web applications from
          the interface down to the database.
        </p>
      </div>

      <div className="skill-right">
        {skills.map((s) => {
          const Icon = s.icon;
          return (
            <div className="skill-box" key={s.name}>
              <Icon />
              <div>
                <h3>{s.name}</h3>
                <p>{s.tag}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skill;
