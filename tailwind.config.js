/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#10B981", // Vert
        secondary: "#FFD700", // Jaune/Doré
        darkBg: "#121212", // Fond sombre
        lightBg: "#F8F9FA", // Fond clair
        accent: "#4F46E5", // Violet/Bleu
      },
      backgroundColor: {
        primary: "#10B981",
      },
      textColor: {
        primary: "#10B981",
      },
      borderColor: {
        primary: "#10B981",
      },
    },
  },
  plugins: [],
};
