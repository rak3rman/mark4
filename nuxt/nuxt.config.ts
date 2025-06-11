import * as path from "path";

const { gitDescribe, gitDescribeSync } = require("git-describe");

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
      meta: {
        title: "Radison Akerman",
        desc: "I am highly skilled in internet. You might find me solving niche problems with programming, over yonder with my camera, or working on something radical.",
        url: "https://radison.io",
        favicon:
          "https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/cbeec7ce-7b51-4cc2-81bb-e72289777900/sm",
        img: "https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/9036aeb5-ffa0-49ef-f5e3-3d40ac6d3800/md",
      },
      gitMasterTag: gitDescribeSync().hash,
    },
  },

  nitro: {
    prerender: {
      routes: ["/sitemap.xml", "/", "/licensing", "/publications", "/privacy"],
    },
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("spline-viewer"),
    },
  },

  compatibilityDate: "2025-06-10",
});
