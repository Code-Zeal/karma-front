/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  "tailwindCSS.includeLanguages": {
    javascript: "javascript",
    html: "HTML",
  },
  "editor.quickSuggestions": {
    strings: true,
  },
};
