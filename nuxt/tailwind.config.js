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
          primary: "#F8FAFC", // Primary theme color (logo, buttons)
          secondary: "#586CB2", // Secondary theme color (alt icons)
          accent: "#D1D5DB",
          neutral: "#86868B",
          success: "#059669",
          warning: "#FF5A00",
          "base-100": "#000000",
          "base-200": "#121212",
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
