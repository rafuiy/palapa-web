/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Jika menggunakan App Router (Next.js 13+)
  },
    // output: "export",
    images: {
        unoptimized: true, // Agar gambar bisa di-load di Netlify tanpa optimasi Next.js
      },
};

export default nextConfig;
