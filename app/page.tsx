import Image from "next/image";
import { ContactForm, MotionLayer, Navbar, TypingRole } from "../components/site-shell";
import { education } from "../data/education";
import { experiences } from "../data/experience";
import { projects } from "../data/projects";
import { profile } from "../data/profile";
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
      <MotionLayer />
      <main>
        <section id="home" className="hero hero-cinematic">
          <div className="container hero-inner">
            <div className="hero-kicker reveal reveal-1">
              <span><i className="status-dot" />Available for opportunities</span>
              <span>01 / PORTFOLIO / 2026</span>
            </div>

            <div className="hero-stage">
              <div className="hero-copy">
                <p className="hero-overline reveal reveal-1">Hello, I&apos;m Probo</p>
                <h1 className="reveal reveal-2">
                  <span>FULL STACK</span>
                  <span className="outlined">DEVELOPER.</span>
                </h1>
                <div className="role-window reveal reveal-3"><TypingRole /></div>
                <p className="hero-description reveal reveal-3">I turn ideas into reliable, intuitive, and scalable web products—from expressive interfaces to the systems behind them.</p>
                <div className="hero-actions reveal reveal-4">
                  <a className="button button-primary magnetic-button" href="#projects">Explore projects <span>↘</span></a>
                  <a className="button button-secondary magnetic-button" href="#contact">Let&apos;s talk <span>↗</span></a>
                </div>
                <div className="hero-socials reveal reveal-4">
                  <a href={github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                  <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                </div>
              </div>

              <div className="hero-visual reveal reveal-3">
                <div className="portrait-orbit" aria-hidden="true"><span /><span /><span /></div>
                <div className="portrait-frame">
                  <Image src="/images/probo-dwi-wahyudi.webp" alt="Probo Dwi Wahyudi wearing a formal black suit" fill sizes="(max-width: 700px) 82vw, 42vw" priority />
                </div>
                <div className="portrait-label portrait-label-top"><span>Based in</span><strong>Indonesia</strong></div>
                <div className="portrait-label portrait-label-bottom"><span>Focused on</span><strong>Modern web apps</strong></div>
                <div className="floating-code" aria-hidden="true">
                  <span>PROBO.DEV</span>
                  <code>{`{ create → iterate → ship }`}</code>
                </div>
              </div>
            </div>

            <div className="hero-signature reveal reveal-4">
              <p>PROBO DWI WAHYUDI</p>
              <span>Designing with clarity. Engineering with purpose.</span>
              <a href="#about" aria-label="Scroll to about section">Scroll <i>↓</i></a>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div className="marquee-copy" key={copy}>
                <span>FULL STACK DEVELOPMENT</span><i>✦</i><span>CREATIVE ENGINEERING</span><i>✦</i><span>WEB EXPERIENCES</span><i>✦</i>
              </div>
            ))}
          </div>
        </div>

        <section id="about" className="section container about-section" data-reveal>
          <SectionLabel number="02">About me</SectionLabel>
          <div className="about-copy">
            <p className="editable-note">{profile.aboutStatus}</p>
            <h2>{profile.aboutLead}</h2>
            <p className="about-body">I enjoy working across the full product surface: shaping the interface, designing the application flow, and connecting it to a backend that stays dependable as the product grows.</p>
            <div className="about-details">
              <div><span>Location</span><p>{profile.location}</p></div>
              <div><span>Role</span><p>{profile.role}</p></div>
              <div><span>Focus</span><p>{profile.focus}</p></div>
            </div>
          </div>
        </section>

        <section id="education" className="section section-tinted">
          <div className="container">
            <div data-reveal><SectionLabel number="03">Education</SectionLabel></div>
            <div className="timeline">
              {education.map((item) => (
                <article className="timeline-item" key={item.institution} data-reveal>
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
          <div data-reveal><SectionLabel number="04">Experience</SectionLabel></div>
          <div className="experience-list">
            {experiences.map((item) => (
              <article className="experience-item" key={item.company} data-reveal>
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
            <div data-reveal><SectionLabel number="05">Selected projects</SectionLabel></div>
            <div className="project-list">
              {projects.map((project, index) => (
                <article className={`project ${index % 2 ? "project-reverse" : ""}`} key={project.id} data-reveal>
                  <a className="project-image" href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live project`}>
                    <Image src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 850px) 100vw, 57vw" />
                    <span className="project-index">0{index + 1}</span>
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

        <section id="skills" className="section container skills-section" data-reveal>
          <SectionLabel number="06">Skills & technologies</SectionLabel>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-group" key={group.title} data-reveal>
                <div className="skill-heading"><span>0{index + 1}</span><h3>{group.title}</h3></div>
                <ul>{group.items.map((skill) => <li key={skill}>{skill}<span>↗</span></li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <div data-reveal><SectionLabel number="07">Contact</SectionLabel></div>
            <div className="contact-grid" data-reveal>
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
