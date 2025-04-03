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
        accent: "var(--accent)",
        "accent-light": "var(--accent-light)",
        "gray-dark": "var(--gray-dark)",
        gray: "var(--gray)",
        "gray-light": "var(--gray-light)",
      },
      animation: {
        "border-pulse": "border-pulse 3s ease-in-out infinite",
      },
      keyframes: {
        "border-pulse": {
          "0%": { boxShadow: "0 0 10px 0px rgba(148, 111, 255, 0.4)" },
          "50%": { boxShadow: "0 0 20px 5px rgba(91, 169, 254, 0.6)" },
          "100%": { boxShadow: "0 0 10px 0px rgba(148, 111, 255, 0.4)" },
        },
      },
    },
  },
  plugins: [],
};
