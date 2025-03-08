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
            "0%": { transform: "translateX(100%)" },
            "100%": { transform: "translateX(-200%)" }, // Hanya -50% karena ada duplikasi
          },

          marqus: {
            "0%": { transform: "translateX(100%)" },
            "0%": { transform: "translateX(-200%)" }, // Hanya -50% karena ada duplikasi
          },
          
        },
        animation: {
          marquee: "marquee 35s linear infinite",
          marqus: "marqus 35s linear infinite", // Ubah durasi sesuai kebutuhan
        },


    },
  },
  plugins: [],
};
