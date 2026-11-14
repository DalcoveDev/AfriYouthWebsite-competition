/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./styles/**/*.{js,jsx,ts,tsx}",
    "./*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ---------- Official brand palette (AfriYouth Brand Guidelines) ---------- */
        brand: {
          "dark-purple": "#0D0624", /* RGB 13,6,36 · HSL 254,71%,8% · CMYK 64,83,0,86 */
          "steel-pink": "#C723DF",  /* RGB 199,35,223 · HSL 292,75%,51% · CMYK 11,84,0,13 */
          "duke-blue": "#0200A7",   /* RGB 2,0,167 · HSL 241,100%,33% · CMYK 99,100,0,35 */
          blue: "#0301FF",          /* RGB 3,1,255 · HSL 240,100%,50% · CMYK 99,100,0,0 */
          white: "#FFFFFF",
        },
        /* Convenience aliases so utilities like bg-dark-purple / text-steel-pink work */
        "dark-purple": "#0D0624",
        "steel-pink": "#C723DF",
        "duke-blue": "#0200A7",
        "blue-steel": "#0301FF",

        /* ---------- Existing semantic tokens (kept for component compatibility) ---------- */
        ink: "#0d0624",
        deep: "#070212",
        duke: "#0200a7",
        blue: "#0301ff",
        pink: "#c723df",
        violet: "#7407f5",
        purple: "#3a0a86",
        paper: "#f4f3f8",
        cream: "#fbfaff",
        white: "#ffffff",
        muted: "#5b5574",
        muted_soft: "#7d7794",
        line: "rgba(13, 6, 36, 0.13)",
        line_strong: "rgba(13, 6, 36, 0.24)",
        line_light: "rgba(255, 255, 255, 0.16)",
        forest: "#150a33",
        coral: "#c723df",
        coral_deep: "#8c0bc0",
        lime: "#0301ff",
        lime_soft: "#ebe9ff",
        sky: "#c9c5ff",
        mint: "#efeaff",
        clay: "#f3dbff",
        gradient: "linear-gradient(118deg, #c723df 0%, #7a0bf2 46%, #0301ff 100%)",
        "gradient-diagonal": "linear-gradient(135deg, #e629da 0%, #7407f5 52%, #0301ff 100%)",
        "gradient-soft": "linear-gradient(135deg, rgba(199, 35, 223, 0.12), rgba(3, 1, 255, 0.09))",
        "gradient-line": "linear-gradient(90deg, transparent, rgba(199, 35, 223, 0.55), rgba(3, 1, 255, 0.55), transparent)",
        shadow: "0 24px 70px rgba(13, 6, 36, 0.12)",
        "shadow-soft": "0 18px 44px rgba(13, 6, 36, 0.07)",
        glow: "0 18px 50px rgba(104, 8, 245, 0.26)",
        ink_alpha: "rgba(13, 6, 36, 0.86)",
        paper_alpha: "rgba(251, 250, 255, 0.94)",
        deep_alpha: "rgba(2, 0, 167, 0.26)",
      },
      fontFamily: {
        /* Brand guidelines: Poppins for titles/headings */
        display: ["Poppins", "Segoe UI", "sans-serif"],
        title: ["Poppins", "Segoe UI", "sans-serif"],
        /* Brand guidelines: Gilroy for body text.
           Gilroy is a commercial font, so the site loads Plus Jakarta Sans
           as its substitute and falls back gracefully. */
        body: ["Gilroy", "Plus Jakarta Sans", "Helvetica Neue", "Arial", "sans-serif"],
        gilroy: ["Gilroy", "Plus Jakarta Sans", "Helvetica Neue", "Arial", "sans-serif"],
      },
      borderRadius: {
        lg: "2rem",
      },
      keyframes: {
        floatSpark: {
          "0%, 100%": "transform: translateY(0) rotate(0deg)",
          "50%": "transform: translateY(-12px) rotate(4deg)",
        },
        spinSlow: {
          to: "transform: rotate(360deg)",
        },
        pulseGlow: {
          "0%, 100%": "opacity: 0.5; transform: scale(1)",
          "50%": "opacity: 0.75; transform: scale(1.06)",
        },
      },
      animation: {
        floatSpark: "floatSpark 9s ease-in-out infinite",
        spinSlow: "spinSlow 60s linear infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}