module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  plugins: [
    require("daisyui"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
  theme: {
    fontFamily: {
      serif: ["Tiempos Headline"],
      mono: ["SF Mono"],
      sans: ["SF Pro Display"],
    },
  },
  daisyui: {
    themes: [
      {
        default: {
          primary: "#28292A", // Primary theme color (logo, buttons)
          secondary: "#586CB2", // Secondary theme color (alt icons)
          accent: "#CCCCCC",
          neutral: "#F1F3F9",
          success: "#059669",
          "base-100": "#28292A",
        },
        summarize: {
          primary: "#212121", // Primary theme color (logo, buttons)
          secondary: "#586CB2", // Secondary theme color (alt icons)
          accent: "#5E5E5E",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
};