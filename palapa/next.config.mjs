/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    // output: "export",
    images: {
        unoptimized: true, // Agar gambar bisa di-load di Netlify tanpa optimasi Next.js
      },
};

export default nextConfig;
