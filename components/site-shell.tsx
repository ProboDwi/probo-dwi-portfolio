"use client";

import { FormEvent, useEffect, useState } from "react";

const links = [
  { label: "Tentang", id: "about" },
  { label: "Pendidikan", id: "education" },
  { label: "Pengalaman", id: "experience" },
  { label: "Proyek", id: "projects" },
  { label: "Keahlian", id: "skills" },
  { label: "Kontak", id: "contact" },
];

const socials = {
  github: "https://github.com/ProboDwi",
  linkedin: "https://www.linkedin.com/in/probodwiwahyudi",
};

const rotatingRoles = ["Full Stack Developer", "Web Developer", "Troubleshooting"];

export function MotionLayer() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (reducedMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );

    revealItems.forEach((item) => observer.observe(item));

    let frame = 0;
    let pointerFrame = 0;
    const updateScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const maximum = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maximum > 0 ? window.scrollY / maximum : 0;
        root.style.setProperty("--scroll-progress", progress.toString());
        root.style.setProperty("--hero-shift", `${Math.min(window.scrollY * 0.11, 90)}px`);
      });
    };

    const updatePointer = (event: PointerEvent) => {
      cancelAnimationFrame(pointerFrame);
      const { clientX, clientY } = event;
      pointerFrame = requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", `${clientX}px`);
        root.style.setProperty("--pointer-y", `${clientY}px`);
      });
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      cancelAnimationFrame(pointerFrame);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="ambient-scene" aria-hidden="true">
        <span className="ambient-orb ambient-orb-one" />
        <span className="ambient-orb ambient-orb-two" />
        <span className="ambient-grid" />
      </div>
    </>
  );
}

export function TypingRole() {
  const [wordIndex, setWordIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = rotatingRoles[wordIndex];
    const atEnd = length === word.length;
    const atStart = length === 0;
    let delay = deleting ? 42 : 76;

    if (atEnd && !deleting) delay = 1500;
    if (atStart && deleting) delay = 320;

    const timeout = window.setTimeout(() => {
      if (atEnd && !deleting) {
        setDeleting(true);
        return;
      }
      if (atStart && deleting) {
        setDeleting(false);
        setWordIndex((current) => (current + 1) % rotatingRoles.length);
        return;
      }
      setLength((current) => current + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [deleting, length, wordIndex]);

  return (
    <span className="typing-role" aria-label={rotatingRoles[wordIndex]}>
      {rotatingRoles[wordIndex].slice(0, length)}<i aria-hidden="true" />
    </span>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -60%", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav-shell ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="nav container" aria-label="Navigasi utama">
        <a className="logo" href="#home" aria-label="Probo, kembali ke beranda">
          PROBO<span>.</span>
        </a>
        <div className="desktop-nav">
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} aria-current={active === link.id ? "location" : undefined}>{link.label}</a>
          ))}
        </div>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Tutup" : "Menu"}
        </button>
        <span className="cv-unavailable" title="Berkas CV belum ditambahkan">CV segera</span>
      </nav>

      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="container mobile-menu-inner">
          <div className="mobile-links">
            {links.map((link, index) => (
              <a key={link.id} href={`#${link.id}`} onClick={close}>
                <span>0{index + 2}</span>{link.label}
              </a>
            ))}
          </div>
          <div className="mobile-socials">
            <a href={socials.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <span>CV akan tersedia setelah berkasnya ditambahkan.</span>
          </div>
        </div>
      </div>
    </header>
  );
}

type Fields = { name: string; email: string; subject: string; message: string };
const emptyFields: Fields = { name: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [fields, setFields] = useState(emptyFields);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => {
    const next: Partial<Fields> = {};
    if (!fields.name.trim()) next.name = "Silakan masukkan nama Anda.";
    if (!/^\S+@\S+\.\S+$/.test(fields.email)) next.email = "Silakan masukkan alamat email yang valid.";
    if (!fields.subject.trim()) next.subject = "Silakan masukkan subjek.";
    if (fields.message.trim().length < 10) next.message = "Pesan harus berisi setidaknya 10 karakter.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, website: "" }),
      });
      if (!response.ok) throw new Error("Permintaan gagal");
      setFields(emptyFields);
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const update = (key: keyof Fields, value: string) => {
    setFields({ ...fields, [key]: value });
    if (errors[key]) setErrors({ ...errors, [key]: undefined });
    if (status !== "idle") setStatus("idle");
  };

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-row">
        <Field label="Nama" name="name" value={fields.name} error={errors.name} onChange={(v) => update("name", v)} />
        <Field label="Email" name="email" type="email" value={fields.email} error={errors.email} onChange={(v) => update("email", v)} />
      </div>
      <Field label="Subjek" name="subject" value={fields.subject} error={errors.subject} onChange={(v) => update("subject", v)} />
      <label className="field">
        <span>Pesan</span>
        <textarea name="message" rows={4} value={fields.message} onChange={(e) => update("message", e.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />
        {errors.message ? <small id="message-error">{errors.message}</small> : null}
      </label>
      <div className="form-action">
        <button type="submit" disabled={status === "loading"}>{status === "loading" ? "Mengirim…" : "Kirim pesan"}<span>↗</span></button>
        <div className="form-status" aria-live="polite">
          {status === "success" ? "Pesan terkirim. Saya akan segera menghubungi Anda." : null}
          {status === "error" ? "Terjadi kesalahan. Silakan coba lagi atau hubungi saya melalui LinkedIn." : null}
        </div>
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", value, error, onChange }: { label: string; name: string; type?: string; value: string; error?: string; onChange: (value: string) => void }) {
  const errorId = `${name}-error`;
  return (
    <label className="field">
      <span>{label}</span>
      <input type={type} name={name} value={value} onChange={(e) => onChange(e.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} />
      {error ? <small id={errorId}>{error}</small> : null}
    </label>
  );
}
