const { gitDescribeSync } = require("git-describe");

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "nuxt-og-image",
    "@nuxt/content",
  ],

  site: {
    url: "https://radison.io",
    name: "Radison Akerman",
  },

  ogImage: {
    fonts: [
      {
        name: "SF Pro Display",
        weight: 400,
        path: "/fonts/SF-Pro-Display/SF-Pro-Display-Regular.woff",
      },
      {
        name: "SF Pro Display",
        weight: 700,
        path: "/fonts/SF-Pro-Display/SF-Pro-Display-Bold.woff",
      },
      {
        name: "SF Mono",
        weight: 400,
        path: "/fonts/SF-Mono/SF-Mono-Regular.woff",
      },
      {
        name: "Tiempos Headline",
        weight: 600,
        path: "/fonts/Tiempos-Headline/Tiempos-Headline-Semibold.woff",
      },
    ],
  },

  runtimeConfig: {
    public: {
      gitMasterTag: gitDescribeSync().hash,
    },
  },

  nitro: {
    preset: "cloudflare",
    experimental: {
      wasm: true,
    },
    prerender: {
      autoSubfolderIndex: false,
    },
    routeRules: {
      // Ensure all routes are rendered on the server
      "/**": { ssr: true },
    },
  },

  // Ensure SSR is enabled (not SPA mode)
  ssr: true,

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("spline-viewer"),
    },
  },

  compatibilityDate: "2025-06-10",
});
