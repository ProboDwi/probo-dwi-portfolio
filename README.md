# Portofolio Probo Dwi Wahyudi

Situs portofolio pribadi Probo Dwi Wahyudi yang menampilkan profil, pendidikan, pengalaman, proyek, keahlian, serta formulir kontak. Situs ini dibuat dengan Next.js, TypeScript, dan CSS khusus, serta dilengkapi animasi yang tetap menghormati preferensi pengurangan gerakan pada perangkat pengguna.

## Menjalankan secara lokal

Persyaratan utama: Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan pada terminal. Untuk memeriksa versi produksi:

```bash
npm run lint
npm run build:vercel
```

## Memperbarui konten

Konten yang sering berubah dipisahkan agar mudah diperbarui:

- `data/profile.ts` untuk deskripsi singkat dan fokus utama.
- `data/education.ts` untuk riwayat pendidikan.
- `data/experience.ts` untuk pengalaman kerja atau magang.
- `data/projects.ts` untuk menambah atau mengubah proyek.
- `data/skills.ts` untuk daftar keahlian dan teknologi.

Foto profil dan gambar proyek tersimpan di dalam folder `public`.

## Formulir kontak

Formulir kontak memerlukan alamat layanan penerima pesan. Salin `.env.example` menjadi `.env.local`, lalu isi nilai berikut:

```env
CONTACT_FORM_ENDPOINT=
CONTACT_EMAIL=
NEXT_PUBLIC_SITE_URL=
```

Tanpa `CONTACT_FORM_ENDPOINT`, formulir tetap tampil tetapi pesan belum dapat diteruskan.

## Publikasi

Proyek ini siap dipublikasikan sebagai aplikasi Next.js di Vercel. Berkas `vercel.json` menggunakan perintah `npm run build:vercel` untuk proses pembangunan produksi.
