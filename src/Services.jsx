import "./service.css";
import { FaCode, FaServer, FaLayerGroup, FaLock } from "react-icons/fa";
import { services } from "./data";

const icons = [FaCode, FaServer, FaLayerGroup, FaLock];

const Services = () => {
  return (
    <section className="services">
      <div className="service-heading">
        <span>WHAT I DO</span>
        <h2>
          My <b>Expertise</b>
        </h2>
        <p>I create modern and responsive web applications.</p>
      </div>

      <div className="service-grid">
        {services.map((s, i) => {
          const Icon = icons[i];
          return (
            <div className="service-card" key={s.title}>
              <Icon />
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <small>{s.tags.join(" \u00b7 ")}</small>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
