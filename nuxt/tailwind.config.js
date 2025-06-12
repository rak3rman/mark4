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
  // Performance optimizations
  corePlugins: {
    // Disable unused plugins to reduce bundle size
    preflight: true,
    container: false, // Not used
    accessibility: true,
    appearance: false, // Not used
    backdropOpacity: false, // Not used
    backdropSaturate: false, // Not used
    backdropSepia: false, // Not used
    isolation: false, // Not used
    mixBlendMode: false, // Not used
    backgroundBlendMode: false, // Not used
  },
  // Optimize purging
  safelist: [
    // Keep essential animation classes
    "fade-in-hero",
    "fade-in-nav",
  ],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#f7f8f8", // Primary theme color (logo, buttons)
          secondary: "#586CB2", // Secondary theme color (alt icons)
          accent: "#D1D5DB",
          neutral: "#86868B",
          success: "#059669",
          warning: "#FF5A00",
          "base-100": "#08090a",
          "base-200": "#0f1011",
          "base-300": "#141516",
          "base-400": "#191a1b",
        },
        light: {
          primary: "#212121", // Primary theme color (logo, buttons)
          secondary: "#586CB2", // Secondary theme color (alt icons)
          accent: "#5E5E5E",
          neutral: "#86868B",
          success: "#059669",
          warning: "#FF5A00",
          "base-100": "#FFFFFF",
          "base-200": "#F5F5F5",
        },
        summarize: {
          primary: "#212121", // Primary theme color (logo, buttons)
          secondary: "#586CB2", // Secondary theme color (alt icons)
          accent: "#5E5E5E",
          "base-100": "#FFFFFF",
        },
      },
    ],
    // Optimize DaisyUI
    styled: true,
    base: true,
    utils: true,
    logs: false, // Disable console logs in production
    rtl: false, // Disable RTL if not needed
    prefix: "", // No prefix needed
    darkTheme: "dark",
  },
};
