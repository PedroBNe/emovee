import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
    },
    keyframes: {
        typewriter: {
          '0%': { width: '0' },
          '70%': { width: '100%' },
          '100%': { width: '100%' },
        },
        blinkTextCursor: {
          '0%, 100%': { visibility: 'visible' },
          '50%': { visibility: 'hidden' },
       },
       slideIn: {
         '0%': { transform: 'translateY(10%)', opacity: '0' },
         '100%': { transform: 'translateY(0)', opacity: '1' },
       },
      },
      animation: {
        typewriter: 'typewriter 6s steps(44) 1s normal both',
        blinkTextCursor: 'blinkTextCursor 1s steps(5, start) infinite',
        slideIn: 'slideIn 0.5s ease-out',
      },    
    },
  plugins: [],
};

export default config;
