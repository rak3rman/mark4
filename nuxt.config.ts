const { gitDescribe, gitDescribeSync } = require("git-describe");

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  content: {
    documentDriven: true,
  },
  runtimeConfig: {
    public: {
      meta: {
        title: "Radison Akerman",
        desc: "I am highly skilled in internet. You might find me solving niche problems with programming, over yonder with my camera, or working on something radical.",
        url: "https://rakerman.com",
        favicon:
          "https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/cbeec7ce-7b51-4cc2-81bb-e72289777900/sm",
        img: "https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/9036aeb5-ffa0-49ef-f5e3-3d40ac6d3800/md",
      },
      gitMasterTag: gitDescribeSync().hash,
    },
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("spline-viewer"),
    },
  },
});