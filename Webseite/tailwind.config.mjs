export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b82f6", // schönes helles Blau (Tailwind Indigo 500)
          light: "#93c5fd",
          dark: "#1e40af",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};