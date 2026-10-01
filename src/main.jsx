import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const github = "https://github.com/harishganesan123";
const linkedin = "https://www.linkedin.com/in/harish-ai-enthusiast";
const email = "mailto:harishganesan123@gmail.com";

const projects = [
  {
    number: "01",
    title: "AI-Powered GitHub Repository Analyzer & Viva Assistant",
    description:
      "An AI platform that analyzes GitHub repositories, explains architecture and code, extracts project insights, and generates personalized viva and interview questions.",
    stack: ["Python", "FastAPI", "React", "LLMs", "NLP", "RAG", "SQLAlchemy"],
    link: github,
  },
  {
    number: "02",
    title: "CareerPilot AI",
    description:
      "An AI-powered academic and career success platform integrating learning assistance, adaptive study planning, skill-gap analysis, career roadmaps, ATS analysis, internship recommendations, placement readiness and mock interviews.",
    stack: ["React", "FastAPI", "PostgreSQL", "Redis", "Celery", "AI/NLP"],
    link: github,
  },
  {
    number: "03",
    title: "Solar-Powered Smart Wildlife Water Management",
    description:
      "An autonomous wildlife watering system using ESP32, IoT sensors, solar energy and predictive analytics to monitor water availability and support intelligent water management.",
    stack: ["ESP32", "IoT", "Sensors", "ML", "Predictive Analytics", "Solar"],
    link: github,
  },
];

const skillGroups = [
  ["AI / ML", "Machine Learning", "Deep Learning", "Reinforcement Learning", "NLP", "Computer Vision", "LLMs", "RAG", "Agentic AI"],
  ["Frameworks", "PyTorch", "TensorFlow", "FastAPI", "React.js", "Vite", "Tailwind CSS", "Pandas", "NumPy"],
  ["Backend & Data", "Python", "MySQL", "PostgreSQL", "SQLAlchemy / SQLModel", "Redis", "Celery"],
  ["Tools", "Git", "GitHub", "Linux", "Hugging Face"],
];

const certifications = [
  "Reinforcement Learning — HCL GUVI, 2026",
  "Data Analytics & ML for IoT — HCL GUVI, 2026",
  "Data Wrangling & Analysis — HCL GUVI, 2026",
  "Mastering MySQL — HCL GUVI, 2026",
  "AWS AI Practitioner Challenge — Udacity, 2026",
  "Introduction to Data Science with Python — Simplilearn, 2025",
];

function Icon({ name }) {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.7-1.6 6.7-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.2.8S18 0 15 2a13.4 13.4 0 0 0-7 0C5 0 3.8.8 3.8.8A5 5 0 0 0 3.7 4 5.4 5.4 0 0 0 2.3 7.5c0 5.4 3.4 6.6 6.7 7A4.8 4.8 0 0 0 8 18v4"/><path d="M8 22v-2"/><path d="M8 15c-3.5 1.5-3.5-1.5-5-1.5"/></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></>,
    mail: <><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 6L2 7"/></>,
    menu: <><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>,
    close: <><path d="m6 6 12 12"/><path d="m18 6-12 12"/></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function App() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  return (
    <div className="site">
      <div className="grid-bg" />
      <header className={scrolled ? "nav scrolled" : "nav"}>
        <button className="brand" onClick={() => go("home")}>HG<span>.</span></button>
        <nav className={menu ? "navlinks open" : "navlinks"}>
          {["about","experience","projects","skills","contact"].map(x =>
            <button key={x} onClick={() => go(x)}>{x}</button>
          )}
        </nav>
        <div className="nav-actions">
          <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github"/></a>
          <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin"/></a>
          <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Menu"><Icon name={menu ? "close" : "menu"}/></button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse"/> AI & DATA SCIENCE</div>
            <h1>Building intelligent<br/><em>systems that matter.</em></h1>
            <p className="hero-text">
              I'm <strong>Harish G</strong>, an AI-focused B.Tech. undergraduate working across
              Machine Learning, Deep Learning, LLMs, RAG, Computer Vision and AI-driven automation.
            </p>
            <div className="hero-actions">
              <button className="primary" onClick={() => go("projects")}>Explore my work <Icon name="arrow"/></button>
              <a className="secondary" href="/Harish_Resume.pdf" target="_blank">View Resume</a>
            </div>
            <div className="social-row">
              <a href={github} target="_blank" rel="noreferrer"><Icon name="github"/> GitHub</a>
              <a href={linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin"/> LinkedIn</a>
              <a href={email}><Icon name="mail"/> Email</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orb"><div className="orb-core">AI</div></div>
            <div className="float-card card-a"><span>CGPA</span><b>8.61</b></div>
            <div className="float-card card-b"><span>Latest SGPA</span><b>9.20</b></div>
            <div className="code-card">
              <span className="code-dot"/>
              <span className="code-dot"/>
              <span className="code-dot"/>
              <pre>{`model = build_intelligence(
    data=data,
    context="real world",
    goal="useful AI"
)

model.deploy()`}</pre>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-label">01 / ABOUT</div>
          <div className="two-col">
            <div>
              <h2>Curious about AI.<br/><em>Serious about building.</em></h2>
            </div>
            <div className="body-copy">
              <p>I'm pursuing a B.Tech. in Artificial Intelligence at Amity University, Lucknow (2023–2027). My work sits at the intersection of applied AI, software engineering and intelligent automation.</p>
              <p>I enjoy turning complex ideas into practical products — from repository intelligence and career guidance to IoT systems for wildlife water management.</p>
              <div className="stats">
                <div><b>8.61</b><span>CGPA / 10</span></div>
                <div><b>9.20</b><span>Latest SGPA / 10</span></div>
                <div><b>2027</b><span>Graduation</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-label">02 / EXPERIENCE</div>
          <div className="experience-card">
            <div className="exp-top"><div><span className="tag">CURRENT</span><h2>AI & Data Science Intern</h2><h3>HCL GUVI</h3></div><span className="date">MAR 2026 — PRESENT</span></div>
            <div className="exp-grid">
              <div><span>01</span><p>Contributed to AI and data science initiatives involving AI-powered educational content, automation workflows and learning solutions.</p></div>
              <div><span>02</span><p>Created AI-generated educational videos and technical learning content using AI automation and multimedia tools.</p></div>
              <div><span>03</span><p>Coordinated a team of interns, supporting task planning, technical discussions, execution and delivery.</p></div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-label">03 / SELECTED WORK</div>
          <div className="section-heading"><h2>Projects that turn<br/><em>AI into products.</em></h2><span>03 FEATURED PROJECTS</span></div>
          <div className="projects">
            {projects.map(p => (
              <article className="project" key={p.number}>
                <div className="project-num">{p.number}</div>
                <div className="project-main">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="chips">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
                </div>
                <a className="project-link" href={p.link} target="_blank" rel="noreferrer"><Icon name="arrow"/></a>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-label">04 / TOOLKIT</div>
          <div className="two-col">
            <div><h2>The stack behind<br/><em>the work.</em></h2></div>
            <div className="skill-groups">
              {skillGroups.map(([title, ...skills]) => (
                <div className="skill-group" key={title}><h3>{title}</h3><div className="chips">{skills.map(s => <span key={s}>{s}</span>)}</div></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-label">05 / CREDENTIALS</div>
          <div className="two-col">
            <div><h2>Learning beyond<br/><em>the classroom.</em></h2></div>
            <div className="credentials">
              {certifications.map((c, i) => <div className="credential" key={c}><span>0{i+1}</span><p>{c}</p></div>)}
            </div>
          </div>
          <div className="achievement-row">
            <div><span>ACHIEVEMENT</span><b>Selected as Subject Matter Expert (SME) — uCertify</b><small>University campus placement process · 2026</small></div>
            <div><span>AWARD</span><b>Technovation 2024 — 3rd Prize</b><small>University Level</small></div>
            <div><span>AWARD</span><b>Symphony of Cultures — 2nd Prize</b><small>University Level</small></div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="section-label">06 / CONTACT</div>
          <h2>Let's build something<br/><em>intelligent.</em></h2>
          <p>Open to opportunities, collaborations and conversations around AI, data science and intelligent products.</p>
          <a className="primary big" href={email}>Get in touch <Icon name="arrow"/></a>
          <div className="contact-links"><a href={github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={email}>Email ↗</a></div>
        </section>
      </main>

      <footer><span>© 2026 Harish G</span><span>Designed & built with curiosity.</span></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
