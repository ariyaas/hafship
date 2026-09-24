/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0e609c',   // Primary: Main Brand Blue
          gray: '#d9dada',   // Primary: Brand Light Gray
          dark: '#03182E',   // Accent: Dark Blue
          yellow: '#D4AF37', // Accent: Yellow/Gold
        }
      }
    },
  },
  plugins: [],
};