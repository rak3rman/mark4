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
      sans: [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      serif: [
        "Test Tiempos Headline",
        "ui-serif",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
        "serif",
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
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
        resume: {
          primary: "#212121", // Primary theme color (logo, buttons)
          secondary: "#586CB2", // Secondary theme color (alt icons)
          accent: "#5E5E5E",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
};