import type { Project } from "../types";

// Add future work here. The showcase layout updates automatically.
export const projects: Project[] = [
  {
    id: "keylane",
    title: "Keylane",
    eyebrow: "Multiplayer typing game",
    description:
      "An Indonesian typing arena for solo practice, daily challenges, real-time races, private rooms, leaderboards, and persistent player statistics.",
    image: "/projects/keylane.webp",
    technologies: ["Next.js", "TypeScript", "Supabase", "Realtime"],
    github: "https://github.com/ProboDwi/TypeBattle",
    demo: "https://typebattle.probodwi.my.id/",
  },
  {
    id: "puzzle-booth",
    title: "Puzzle Booth",
    eyebrow: "Collaborative photo puzzle",
    description:
      "A playful shared experience where up to four friends frame photos, break them into puzzles, and solve them together using hand gestures.",
    image: "/projects/puzzle-booth.webp",
    technologies: ["Web App", "Computer Vision", "Realtime", "Camera API"],
    github: "https://github.com/ProboDwi/puzzle-photoboth",
    demo: "https://photobooth.probodwi.my.id/",
  },
  {
    id: "droply",
    title: "Droply",
    eyebrow: "Private file sharing",
    description:
      "Direct, encrypted peer-to-peer sharing for files, text, and links between devices—without accounts or uploading data to the cloud.",
    image: "/projects/droply.webp",
    technologies: ["WebRTC", "Peer-to-peer", "Encryption", "TypeScript"],
    github: "https://github.com/ProboDwi/Droply",
    demo: "https://droply-phi.vercel.app/",
  },
];
