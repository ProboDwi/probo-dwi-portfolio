export interface Project {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

export interface Experience {
  company: string;
  role: string;
  type: string;
  period: string;
  description: string;
  technologies: string[];
}

