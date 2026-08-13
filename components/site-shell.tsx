"use client";

import { FormEvent, useEffect, useState } from "react";

const links = ["About", "Education", "Experience", "Projects", "Skills", "Contact"];

const socials = {
  github: "https://github.com/ProboDwi",
  linkedin: "https://www.linkedin.com/in/probo-dwi-wahyudi-bb6b622a0/",
};

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
      <nav className="nav container" aria-label="Main navigation">
        <a className="logo" href="#home" aria-label="Probo, back to home">
          PROBO<span>.</span>
        </a>
        <div className="desktop-nav">
          {links.map((link) => {
            const id = link.toLowerCase();
            return <a key={link} href={`#${id}`} aria-current={active === id ? "location" : undefined}>{link}</a>;
          })}
        </div>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <span className="cv-unavailable" title="CV file has not been added yet">CV soon</span>
      </nav>

      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="container mobile-menu-inner">
          <div className="mobile-links">
            {links.map((link, index) => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={close}>
                <span>0{index + 2}</span>{link}
              </a>
            ))}
          </div>
          <div className="mobile-socials">
            <a href={socials.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <span>CV will be available after the file is added.</span>
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
    if (!fields.name.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(fields.email)) next.email = "Please enter a valid email.";
    if (!fields.subject.trim()) next.subject = "Please enter a subject.";
    if (fields.message.trim().length < 10) next.message = "Please write at least 10 characters.";
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
      if (!response.ok) throw new Error("Request failed");
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
        <Field label="Name" name="name" value={fields.name} error={errors.name} onChange={(v) => update("name", v)} />
        <Field label="Email" name="email" type="email" value={fields.email} error={errors.email} onChange={(v) => update("email", v)} />
      </div>
      <Field label="Subject" name="subject" value={fields.subject} error={errors.subject} onChange={(v) => update("subject", v)} />
      <label className="field">
        <span>Message</span>
        <textarea name="message" rows={4} value={fields.message} onChange={(e) => update("message", e.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />
        {errors.message ? <small id="message-error">{errors.message}</small> : null}
      </label>
      <div className="form-action">
        <button type="submit" disabled={status === "loading"}>{status === "loading" ? "Sending…" : "Send message"}<span>↗</span></button>
        <div className="form-status" aria-live="polite">
          {status === "success" ? "Message sent. I’ll get back to you soon." : null}
          {status === "error" ? "Something went wrong. Please try again or reach out on LinkedIn." : null}
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
