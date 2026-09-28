import Image from "next/image";
import { ContactForm, MotionLayer, Navbar, TypingRole } from "../components/site-shell";
import { education } from "../data/education";
import { experiences } from "../data/experience";
import { projects } from "../data/projects";
import { profile } from "../data/profile";
import { skillGroups } from "../data/skills";

const github = "https://github.com/ProboDwi";
const linkedin = "https://www.linkedin.com/in/probodwiwahyudi";

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
              <span><i className="status-dot" />Siap untuk kesempatan baru</span>
              {/* <span>01 / PORTOFOLIO / 2026</span> */}
            </div>

            <div className="hero-stage">
              <div className="hero-copy">
                <p className="hero-overline reveal reveal-1">Halo, saya Probo</p>
                <h1 className="reveal reveal-2">
                  <span>WEB</span>
                  <span className="outlined">DEVELOPER.</span>
                </h1>
                <div className="role-window reveal reveal-3"><TypingRole /></div>
                <p className="hero-description reveal reveal-3">Saya mengubah ide menjadi produk web yang andal, intuitif, dan mudah dikembangkan—mulai dari antarmuka yang menarik hingga sistem di baliknya.</p>
                <div className="hero-actions reveal reveal-4">
                  <a className="button button-primary magnetic-button" href="#projects">Lihat proyek <span>↘</span></a>
                  <a className="button button-secondary magnetic-button" href="#contact">Mari bicara <span>↗</span></a>
                </div>
                <div className="hero-socials reveal reveal-4">
                  <a href={github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                  <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                </div>
              </div>

              <div className="hero-visual reveal reveal-3">
                <div className="portrait-orbit" aria-hidden="true"><span /><span /><span /></div>
                <div className="portrait-frame">
                  <Image src="/images/probo-dwi-wahyudi.webp" alt="Probo Dwi Wahyudi mengenakan setelan formal berwarna hitam" fill sizes="(max-width: 700px) 82vw, 42vw" priority />
                </div>
                {/* <div className="portrait-label portrait-label-top"><span>Berdomisili di</span><strong>Indonesia</strong></div> */}
                {/* <div className="portrait-label portrait-label-bottom"><span>Berfokus pada</span><strong>Aplikasi web modern</strong></div> */}
                {/* <div className="floating-code" aria-hidden="true">
                  <span>PROBO.DEV</span>
                  <code>{`{ rancang → ulangi → rilis }`}</code>
                </div> */}
              </div>
            </div>

            <div className="hero-signature reveal reveal-4">
              <p>PROBO DWI WAHYUDI</p>
              <span>Merancang dengan jernih. Membangun dengan tujuan.</span>
              <a href="#about" aria-label="Gulir ke bagian tentang saya">Jelajahi <i>↓</i></a>
            </div>
          </div>
        </section>

        <section id="about" className="section container about-section" data-reveal>
          <SectionLabel number="02">Tentang saya</SectionLabel>
          <div className="about-copy">
            <h2>{profile.aboutLead}</h2>
            {/* <p className="about-body">Saya akan menambahkan deskripsi lengkap tentang diri saya di bagian ini.</p> */}
            <div className="about-details">
              <div><span>Lokasi</span><p>{profile.location}</p></div>
              <div><span>Peran</span><p>{profile.role}</p></div>
              <div><span>Fokus</span><p>{profile.focus}</p></div>
            </div>
          </div>
        </section>

        <section id="education" className="section section-tinted">
          <div className="container">
            <div data-reveal><SectionLabel number="03">Pendidikan</SectionLabel></div>
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
          <div data-reveal><SectionLabel number="04">Pengalaman</SectionLabel></div>
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
            <div data-reveal><SectionLabel number="05">Proyek pilihan</SectionLabel></div>
            <div className="project-list">
              {projects.map((project, index) => (
                <article className={`project ${index % 2 ? "project-reverse" : ""}`} key={project.id} data-reveal>
                  <a className="project-image" href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Buka situs proyek ${project.title}`}>
                    <Image src={project.image} alt={`Pratinjau proyek ${project.title}`} fill sizes="(max-width: 850px) 100vw, 57vw" />
                    <span className="project-index">0{index + 1}</span>
                  </a>
                  <div className="project-info">
                    <p className="project-number">0{index + 1} <span>{project.eyebrow}</span></p>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <p className="technology-line">{project.technologies.join(" / ")}</p>
                    <div className="project-links">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">Lihat situs ↗</a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section container skills-section" data-reveal>
          <SectionLabel number="06">Keahlian & teknologi</SectionLabel>
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
            <div data-reveal><SectionLabel number="07">Hubungi saya</SectionLabel></div>
            <div className="contact-grid" data-reveal>
              <div className="contact-intro">
                <h2>MARI BUAT<br />SESUATU<br /><span>BERSAMA.</span></h2>
                <p>Informasi lebih lanjut Silakan hubungi saya.</p>
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
          <div><a className="logo footer-logo" href="#home">PROBO<span>.</span></a><p>Web Developer<br />Indonesia</p></div>
          <div className="footer-links"><a href={github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div>
          <a className="back-top" href="#home">Kembali ke atas ↑</a>
        </div>
        <div className="container footer-bottom"><span>© 2026 Probo Dwi Wahyudi</span><span>Dirancang & dibangun dengan sepenuh hati.</span></div>
      </footer>
    </>
  );
}
