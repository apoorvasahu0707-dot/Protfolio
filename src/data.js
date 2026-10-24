import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaPython, FaGitAlt,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// ===== Edit your details here. Both Home page and separate pages read from this file. =====

export const person = {
  firstName: "Apoorva",
  lastName: "Sahu",
  role: "Full Stack Developer",
  intro:
    "I build responsive, user-friendly web applications using React.js and the MERN stack.",
  email: "apoorvasahu0707@gmail.com",
  phone: "+91 8423247777",
  phoneHref: "tel:+918423247777",
  github: "https://github.com/apoorvasahu0707-dot",
  linkedin: "https://www.linkedin.com/in/apoorvasahu0707",
  resume: "/Apoorva-Sahu-Resume.pdf",
};

export const aboutText = [
  "I\u2019m Apoorva Sahu, a Full Stack Developer from Renukoot, India. I recently completed my B.Tech in Computer Science and I enjoy building responsive web apps with React.js, Tailwind CSS and RESTful APIs, with a focus on clean code and performance.",
  "I recently completed a Full Stack Developer internship at Vats Mobility, where I built end-to-end features for Vats Insight and Vats Connect using the MERN stack.",
];

export const aboutCards = [
  {
    title: "Frontend Development",
    text: "Building responsive interfaces using React.js, JavaScript, Tailwind CSS and reusable components.",
  },
  {
    title: "Backend Development",
    text: "Creating RESTful APIs with Node.js and Express.js, backed by MongoDB.",
  },
  {
    title: "Full Stack Development",
    text: "Developing complete MERN applications with authentication, payments and admin dashboards.",
  },
];

export const skills = [
  { icon: FaHtml5, name: "HTML5", short: "Structure of web pages", tag: "Web Structure" },
  { icon: FaCss3Alt, name: "CSS3", short: "Design and responsive layouts", tag: "Web Styling" },
  { icon: FaJs, name: "JavaScript", short: "Interactive web applications", tag: "Web Interaction" },
  { icon: FaReact, name: "React.js", short: "Building reusable components", tag: "UI Development" },
  { icon: SiTailwindcss, name: "Tailwind CSS", short: "Utility-first styling", tag: "UI Styling" },
  { icon: FaNodeJs, name: "Node.js", short: "Backend development", tag: "Backend Development" },
  { icon: SiExpress, name: "Express.js", short: "Creating REST APIs", tag: "REST API" },
  { icon: SiMongodb, name: "MongoDB", short: "Database management", tag: "Database" },
  { icon: FaPython, name: "Python", short: "Scripting and problem solving", tag: "Programming" },
  { icon: FaGitAlt, name: "Git", short: "Version control", tag: "Version Control" },
  { icon: FaGithub, name: "GitHub", short: "Code hosting and collaboration", tag: "Collaboration" },
  { icon: VscVscode, name: "VS Code", short: "Daily development editor", tag: "Editor" },
];

export const services = [
  {
    title: "Frontend Development",
    text: "I create responsive and interactive interfaces using HTML, CSS, JavaScript, React and Tailwind CSS.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
  },
  {
    title: "Backend Development",
    text: "I build backend applications and RESTful APIs using Node.js, Express and MongoDB.",
    tags: ["Node.js", "Express", "REST API", "MongoDB"],
  },
  {
    title: "Full Stack Development",
    text: "I build complete web applications end to end using the MERN stack.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Auth & Payments",
    text: "I add secure login and payment flows to apps: JWT, OTP verification, role-based access, Razorpay and UPI.",
    tags: ["JWT", "OTP", "Razorpay", "UPI"],
  },
];

// GitHub links are filled in. Add a live demo URL in `live` when you deploy a project
// (empty string = that icon is hidden). To change a screenshot, replace the file in /public/projects.
export const projects = [
  {
    title: "Sports Club Management Platform",
    short:
      "A full-stack platform for athlete and coach registration, competition management, payments, documents and admin operations.",
    long:
      "Includes OTP verification, role-based authentication, protected routes and an admin dashboard to manage users, events, payments and documents. Razorpay handles payments and Gmail SMTP sends automated emails and reminders.",
    tags: ["React", "Node.js", "MongoDB", "Razorpay"],
    image: "/projects/sports.jpg",
    live: "",
    github: "https://github.com/apoorvasahu0707-dot/sports-club-management",
  },
  {
    title: "Food Delivery Application",
    short:
      "A MERN food delivery app with RESTful APIs for menu and order management, JWT authentication, UPI payments and a responsive UI.",
    long:
      "A MERN food delivery app with RESTful APIs for menu and order management, JWT authentication, UPI payments and a responsive UI.",
    tags: ["MERN", "JWT", "UPI", "REST API"],
    image: "/projects/food.jpg",
    live: "",
    github: "https://github.com/apoorvasahu0707-dot/Food-app",
  },
  {
    title: "Car Rental System",
    short:
      "A full-stack MERN application with frontend, backend and MongoDB integration for vehicle booking and management.",
    long:
      "A full-stack MERN application (KARZONE) with frontend, backend and MongoDB integration for vehicle booking and management.",
    tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    image: "/projects/car.jpg",
    live: "",
    github: "https://github.com/apoorvasahu0707-dot/Car-Rental-System",
  },
  {
    title: "Weather Forecast Web App",
    short:
      "Fetches real-time weather updates from third-party APIs and shows them through a responsive interface.",
    long:
      "Search any city and see real-time temperature, humidity and wind speed, fetched from the OpenWeatherMap API and shown through a responsive interface.",
    tags: ["HTML", "CSS", "JavaScript", "Weather API"],
    image: "/projects/weather.jpg",
    live: "",
    github: "https://github.com/apoorvasahu0707-dot/Weather-App",
  },
  {
    title: "Netflix Landing Page Clone",
    short:
      "A responsive Netflix-style landing page built with HTML, CSS and Bootstrap.",
    long:
      "A responsive Netflix-style landing page with a hero banner, content sections and footer, built with HTML, CSS and Bootstrap.",
    tags: ["HTML", "CSS", "Bootstrap"],
    image: "/projects/netflix.svg",
    live: "",
    github: "https://github.com/apoorvasahu0707-dot/Netflix",
  },
];

export const experience = [
  {
    period: "Jul 2026 - Oct 2026",
    role: "Full Stack Developer Intern",
    org: "Vats Mobility \u00b7 Remote",
    text: "Built end-to-end features for Vats Insight and Vats Connect using the MERN stack, working directly with the founder and engineering team.",
  },
  {
    period: "Oct 2025",
    role: "IT Intern",
    org: "Birla Carbon India Pvt. Limited \u00b7 Renukoot",
    text: "Assisted in analysing corporate IT infrastructure and industrial data management, and supported documentation and reporting for plant IT systems.",
  },
  {
    period: "Jun 2025 - Jul 2025",
    role: "IT Intern",
    org: "Aditya Birla Grasim Industries Limited \u00b7 Renukoot",
    text: "Gained hands-on exposure to industrial IT systems, enterprise workflows and production-level software environments.",
  },
];

export const education = [
  {
    period: "2022 - 2026",
    role: "B.Tech in Computer Science and Engineering",
    org: "Indus Institute of Technology and Management",
    text: "CGPA: 7.8 / 10",
  },
  {
    period: "Certifications",
    role: "Courses and programs",
    org: "",
    text: "HTML, CSS & Bootstrap \u00b7 JavaScript \u00b7 Node.js, Express.js & MongoDB \u00b7 Full Stack Web Development Internship Program \u00b7 Python with AI",
  },
];
