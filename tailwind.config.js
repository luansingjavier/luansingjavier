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
        bg: "var(--bg)",
        ink: "var(--ink)",
        "ink-80": "var(--ink-80)",
        "ink-60": "var(--ink-60)",
        "ink-10": "var(--ink-10)",
        "ink-5": "var(--ink-5)",
        accent: "var(--accent)",
        success: "var(--success)",
        error: "var(--error)",
      },
      fontFamily: {
        serif: ["var(--font-habibi)", "Georgia", "Times New Roman", "serif"],
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
