import "./footer.css";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";
import { person } from "./data";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logof">
        <span>{person.firstName}</span> {person.lastName}
      </div>

      <p className="footerp">
        Full Stack Developer building modern and responsive web applications.
      </p>

      <div className="footers">
        <a href={person.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>

        <a href={person.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>

        <a href={`mailto:${person.email}`} aria-label="Email">
          <FaEnvelope />
        </a>

        <a href={person.phoneHref} aria-label="Phone">
          <FaPhone />
        </a>
      </div>

      <div className="footerb">
        <p>&copy; 2026 {person.firstName} {person.lastName}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
