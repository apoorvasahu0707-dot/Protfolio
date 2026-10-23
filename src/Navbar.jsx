import "./nav.css";
import { Link } from "react-router-dom";
import { person } from "./data";

const Navbar = () => {
  return (
    <header className="head">
      <h1 className="logo">
        <span>{person.firstName}</span> {person.lastName}
      </h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/service">My Expertise</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <a
        href={`mailto:${person.email}`}
        className="contact-btn"
      >
        Get in touch
      </a>
    </header>
  );
};

export default Navbar;
