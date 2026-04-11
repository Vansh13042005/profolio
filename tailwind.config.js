/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light Mode
        lightBg: "#F8FAFC",
        lightText: "#0F172A",
        // Dark Mode
        darkBg: "#020617",
        darkCard: "#0F172A",
        darkText: "#E2E8F0",
        // Brand
        primary: {
          light: "#2563EB",
          dark: "#3B82F6",
        },
        secondary: {
          light: "#7C3AED",
          dark: "#8B5CF6",
        },
      },
    },
  },
  plugins: [],
}