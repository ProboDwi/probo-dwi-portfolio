import Image from "next/image";
import { ContactForm, Navbar } from "../components/site-shell";
import { education } from "../data/education";
import { experiences } from "../data/experience";
import { projects } from "../data/projects";
import { skillGroups } from "../data/skills";

const github = "https://github.com/ProboDwi";
const linkedin = "https://www.linkedin.com/in/probo-dwi-wahyudi-bb6b622a0/";

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="section-label"><span>{number}</span><p>{children}</p></div>;
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="hero container">
          <div className="hero-kicker reveal reveal-1"><span className="status-dot" />Hello, I&apos;m <span>01 / PORTFOLIO</span></div>
          <div className="hero-title-wrap reveal reveal-2">
            <h1>PROBO DWI<br /><span>WAHYUDI</span></h1>
          </div>
          <div className="hero-bottom reveal reveal-3">
            <div className="hero-role">
              <p>Full Stack Developer</p>
              <span>Based in Indonesia</span>
            </div>
            <div className="hero-intro">
              <p>I build reliable, intuitive, and scalable web applications—from thoughtful interfaces to the systems behind them.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">View my work <span>↓</span></a>
                <span className="button button-muted" title="CV file has not been added yet">CV available soon</span>
              </div>
            </div>
          </div>
          <div className="hero-footer reveal reveal-4">
            <a href={github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <span className="scroll-note">Scroll to explore <i>↓</i></span>
          </div>
        </section>

        <section id="about" className="section container about-section">
          <SectionLabel number="02">About me</SectionLabel>
          <div className="about-copy">
            <p className="editable-note">Personal statement to be added by Probo.</p>
            <h2>I care about building web products that feel clear, dependable, and genuinely useful.</h2>
            <div className="about-details">
              <div><span>Location</span><p>Indonesia</p></div>
              <div><span>Role</span><p>Full Stack Developer</p></div>
              <div><span>Focus</span><p>Web Application Development</p></div>
            </div>
          </div>
        </section>

        <section id="education" className="section section-tinted">
          <div className="container">
            <SectionLabel number="03">Education</SectionLabel>
            <div className="timeline">
              {education.map((item) => (
                <article className="timeline-item" key={item.institution}>
                  <div className="timeline-marker" aria-hidden="true" />
                  <p className="timeline-period">{item.period}</p>
                  <div>
                    <h3>{item.institution}</h3>
                    <p className="timeline-role">{item.degree}</p>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section container">
          <SectionLabel number="04">Experience</SectionLabel>
          <div className="experience-list">
            {experiences.map((item) => (
              <article className="experience-item" key={item.company}>
                <div className="experience-period">{item.period}<span>{item.type}</span></div>
                <div className="experience-main">
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p className="editable-note">{item.description}</p>
                </div>
                <p className="technology-line">{item.technologies.join(" / ")}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <SectionLabel number="05">Selected projects</SectionLabel>
            <div className="project-list">
              {projects.map((project, index) => (
                <article className={`project ${index % 2 ? "project-reverse" : ""}`} key={project.id}>
                  <a className="project-image" href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live project`}>
                    <Image src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 850px) 100vw, 57vw" />
                  </a>
                  <div className="project-info">
                    <p className="project-number">0{index + 1} <span>{project.eyebrow}</span></p>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <p className="technology-line">{project.technologies.join(" / ")}</p>
                    <div className="project-links">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">Live project ↗</a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section container skills-section">
          <SectionLabel number="06">Skills & technologies</SectionLabel>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-group" key={group.title}>
                <div className="skill-heading"><span>0{index + 1}</span><h3>{group.title}</h3></div>
                <ul>{group.items.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <SectionLabel number="07">Contact</SectionLabel>
            <div className="contact-grid">
              <div className="contact-intro">
                <h2>LET&apos;S BUILD<br />SOMETHING<br /><span>TOGETHER.</span></h2>
                <p>Have a project, an opportunity, or just want to talk about software development? Feel free to reach out.</p>
                <div className="contact-socials">
                  <a href={github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                  <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-top">
          <div><a className="logo footer-logo" href="#home">PROBO<span>.</span></a><p>Full Stack Developer<br />Indonesia</p></div>
          <div className="footer-links"><a href={github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div>
          <a className="back-top" href="#home">Back to top ↑</a>
        </div>
        <div className="container footer-bottom"><span>© 2026 Probo Dwi Wahyudi</span><span>Designed & built with intention.</span></div>
      </footer>
    </>
  );
}

