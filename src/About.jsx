import "./about.css";
import { Link } from "react-router-dom";
import { aboutText, aboutCards } from "./data";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-left">
          <span className="about-title">ABOUT ME</span>

          <h2>
            Turning ideas into <b>digital experiences.</b>
          </h2>

          {aboutText.map((t) => (
            <p key={t}>{t}</p>
          ))}

          <Link to="/contact" className="about-btn">
            Let&apos;s Connect
          </Link>
        </div>

        <div className="about-right">
          {aboutCards.map((c, i) => (
            <div className="about-card" key={c.title}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
