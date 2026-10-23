import "./contact.css";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { person } from "./data";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-heading">
        <span>CONTACT ME</span>

        <h2>
          Let&apos;s <b>Connect</b>
        </h2>

        <p>Feel free to get in touch with me.</p>
      </div>

      <div className="contact-box">
        <a href={person.phoneHref}>
          <FaPhone />
          <span>{person.phone}</span>
        </a>

        <a href={`mailto:${person.email}`}>
          <FaEnvelope />
          <span>{person.email}</span>
        </a>

        <a href={person.linkedin} target="_blank" rel="noreferrer">
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

        <a href={person.github} target="_blank" rel="noreferrer">
          <FaGithub />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
