import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { BiArrowToBottom } from "react-icons/bi";

import Profile from "./Profile";
import {
  person,
  aboutText,
  aboutCards,
  skills,
  services,
  projects,
  experience,
  education,
} from "./data";

const num = (i) => String(i + 1).padStart(2, "0");

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <p className="text1">HI, I&apos;M</p>

          <h2>
            <span>{person.firstName}</span> {person.lastName}
          </h2>

          <h3>{person.role}</h3>

          <p className="para">{person.intro}</p>

          <div className="linkcv">
            <Link to="/projects" className="btn1">
              View My Work
            </Link>

            <a href={person.resume} target="_blank" rel="noreferrer">
              Download Resume <BiArrowToBottom />
            </a>
          </div>

          <div className="icons">
            <a href={person.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={person.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <Profile />
      </section>

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
                <span>{num(i)}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mainc" id="skills">
        <div className="heading">
          <span>MY SKILLS</span>

          <h2>
            Technologies <b>I Use</b>
          </h2>

          <p>Technologies I use to build modern web applications.</p>
        </div>

        <div className="skills">
          {skills.map((s) => {
            const Icon = s.icon;
            return (
              <div className="skill" key={s.name}>
                <div className="icon">
                  <Icon />
                </div>
                <h3>{s.name}</h3>
                <p>{s.short}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="services" id="expertise">
        <div className="heading">
          <span>WHAT I DO</span>

          <h2>
            My <b>Expertise</b>
          </h2>

          <p>I create modern and responsive websites and web applications.</p>
        </div>

        <div className="servicecs">
          {services.map((s, i) => (
            <div className={`servicec card-${i + 1}`} key={s.title}>
              <span className="number">{num(i)}</span>

              <h3>{s.title}</h3>

              <p>{s.text}</p>

              {s.tags.map((t) => (
                <span className="tags" key={t}>
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="htext">
          <span>MY PROJECTS</span>

          <h2>
            My Recent <b>Work</b>
          </h2>

          <p className="para1">
            Explore a collection of web applications I have developed using
            React, JavaScript, Node.js, Express and MongoDB.
          </p>

          <a href={person.github} target="_blank" rel="noreferrer" className="btn">
            View My Work
          </a>
        </div>

        <div className="right">
          <div className="move">
            {projects.map((p, i) => (
              <React.Fragment key={p.title}>
                <div className="card1">
                  <img src={p.image} alt={p.title} />
                </div>

                <div className="text">
                  <span>{num(i)}</span>
                  <h3>{p.title}</h3>
                  <p>{p.short}</p>

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
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="heading">
          <span>MY JOURNEY</span>

          <h2>
            Experience <b>&amp; Education</b>
          </h2>

          <p>My professional experience and academic background.</p>
        </div>

        <div className="experienceg">
          <div className="boxe">
            <h3>Experience</h3>
            {experience.map((e) => (
              <div className="carde" key={e.role + e.period}>
                <span>{e.period}</span>
                <h4>{e.role}</h4>
                <h5>{e.org}</h5>
                <p>{e.text}</p>
              </div>
            ))}
          </div>

          <div className="boxe">
            <h3>Education</h3>
            {education.map((e) => (
              <div className="carde" key={e.role}>
                <span>{e.period}</span>
                <h4>{e.role}</h4>
                {e.org && <h5>{e.org}</h5>}
                <p>{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
