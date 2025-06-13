/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        dvh: "100dvh",
        svh: "100svh",
        lvh: "100lvh",
      },
      width: {
        dvw: "100dvw",
      },
    },
  },
  plugins: [],
};
