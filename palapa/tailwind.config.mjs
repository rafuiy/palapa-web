/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontFamily: {
        inter: ['Plus Jakarta Sans'],
        custom: ['Zen Tokyo Zoo'],
        },

        keyframes: {
          marquee: {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" }, // Hanya -50% karena ada duplikasi
          },
        },
        animation: {
          marquee: "marquee 10s linear infinite", // Ubah durasi sesuai kebutuhan
        },


    },
  },
  plugins: [],
};
