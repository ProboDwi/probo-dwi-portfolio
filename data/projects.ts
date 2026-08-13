import type { Project } from "../types";

// Tambahkan proyek baru di sini. Tampilan akan diperbarui secara otomatis.
export const projects: Project[] = [
  {
    id: "keylane",
    title: "Keylane",
    eyebrow: "Permainan mengetik multipemain",
    description:
      "Arena mengetik berbahasa Indonesia untuk latihan mandiri, tantangan harian, balapan waktu nyata, ruang privat, papan peringkat, dan statistik pemain yang tersimpan.",
    image: "/projects/keylane.webp",
    technologies: ["Next.js", "TypeScript", "Supabase", "Waktu Nyata"],
    github: "https://github.com/ProboDwi/TypeBattle",
    demo: "https://typebattle.probodwi.my.id/",
  },
  {
    id: "puzzle-booth",
    title: "Puzzle Booth",
    eyebrow: "Puzzle foto kolaboratif",
    description:
      "Pengalaman bermain bersama hingga empat teman untuk mengambil foto, mengubahnya menjadi puzzle, lalu menyelesaikannya bersama menggunakan gestur tangan.",
    image: "/projects/puzzle-booth.webp",
    technologies: ["Aplikasi Web", "Visi Komputer", "Waktu Nyata", "API Kamera"],
    github: "https://github.com/ProboDwi/puzzle-photoboth",
    demo: "https://photobooth.probodwi.my.id/",
  },
  {
    id: "droply",
    title: "Droply",
    eyebrow: "Berbagi berkas secara privat",
    description:
      "Berbagi berkas, teks, dan tautan secara langsung serta terenkripsi antarperangkat—tanpa akun dan tanpa mengunggah data ke penyimpanan awan.",
    image: "/projects/droply.webp",
    technologies: ["WebRTC", "Antarperangkat", "Enkripsi", "TypeScript"],
    github: "https://github.com/ProboDwi/Droply",
    demo: "https://droply-phi.vercel.app/",
  },
];
