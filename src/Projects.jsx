import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import "./projects.css";
import { projects } from "./data";

const Projects = () => {
  return (
    <section className="projects">
      <div className="project-heading">
        <span>MY PROJECTS</span>

        <h2>
          My Recent <b>Work</b>
        </h2>

        <p>
          Explore some of my recent web development projects built using modern
          technologies and responsive designs.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={p.title}>
            <div className="project-image">
              <img src={p.image} alt={p.title} />
            </div>

            <div className="project-content">
              <span>{String(i + 1).padStart(2, "0")}</span>

              <h3>{p.title}</h3>

              <p>{p.long}</p>

              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              {(p.live || p.github) && (
                <div className="project-links">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.title} live`}>
                      <FaLink />
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} code`}>
                      <FaGithub />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
