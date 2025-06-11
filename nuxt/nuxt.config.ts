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
    [
      "@vite-pwa/nuxt",
      {
        registerType: "autoUpdate",
        workbox: {
          globPatterns: ["**/*.{js,css,html,png,svg,ico,woff2}"],
          maximumFileSizeToCacheInBytes: 5000000, // 5MB to include large fonts
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/imagedelivery\.net\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "images",
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
                },
              },
            },
            // Runtime cache for .woff fonts (OG image generation)
            {
              urlPattern: /\.woff$/,
              handler: "CacheFirst",
              options: {
                cacheName: "og-fonts",
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
                },
              },
            },
          ],
        },
        manifest: {
          name: "Radison Akerman",
          short_name: "Radison Akerman",
          description: "I lead and build exceptional software experiences.",
          theme_color: "#000000",
          background_color: "#000000",
          display: "standalone",
          orientation: "portrait",
          scope: "/",
          start_url: "/",
          lang: "en",
          categories: ["business", "technology", "portfolio"],
          screenshots: [
            {
              src: "https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/cbeec7ce-7b51-4cc2-81bb-e72289777900/w=1080",
              sizes: "1080x1920",
              type: "image/png",
              form_factor: "narrow",
            },
            {
              src: "https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/cbeec7ce-7b51-4cc2-81bb-e72289777900/w=1920",
              sizes: "1920x1080",
              type: "image/png",
              form_factor: "wide",
            },
          ],
          icons: [
            {
              src: "https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/cbeec7ce-7b51-4cc2-81bb-e72289777900/w=64",
              sizes: "64x64",
              type: "image/png",
              purpose: "any maskable",
            },
            {
              src: "https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/cbeec7ce-7b51-4cc2-81bb-e72289777900/w=192",
              sizes: "192x192",
              type: "image/png",
              purpose: "any maskable",
            },
            {
              src: "https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/cbeec7ce-7b51-4cc2-81bb-e72289777900/w=512",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable",
            },
          ],
        },
      },
    ],
  ],

  nitro: {
    preset: "cloudflare",
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
    routeRules: {
      "/**": {
        prerender: true,
        headers: { "cache-control": "s-maxage=31536000" },
      },
      "/fonts/**": {
        headers: { "cache-control": "s-maxage=31536000, immutable" },
      },
      "/_nuxt/**": {
        headers: { "cache-control": "s-maxage=31536000, immutable" },
      },
      "/sw.js": { headers: { "cache-control": "no-cache" } },
      "/*.pdf": {
        headers: { "cache-control": "s-maxage=31536000, immutable" },
      },
    },
    compressPublicAssets: true,
    minify: true,
  },

  css: ["~/assets/css/tailwind.css"],

  // Build optimizations
  vite: {
    build: {
      cssCodeSplit: true,
      chunkSizeWarningLimit: 1000,
    },
    ssr: {
      noExternal: ["@heroicons/vue"],
    },
  },

  site: {
    url: "https://radison.io",
    name: "Radison Akerman",
  },

  // Image optimization - Flexible variants and responsive optimization
  // This configuration provides multiple presets for different image types
  // with automatic format selection (AVIF, WebP, JPEG fallback) and responsive sizing
  image: {
    quality: 80,
    format: ["webp", "avif", "jpg", "png"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    densities: [1, 2],
    // Enable responsive images by default
    presets: {
      // Avatar/Logo images - small, high quality
      avatar: {
        modifiers: {
          format: "webp",
          width: 150,
          height: 150,
          quality: 90,
        },
      },
      // Logo images with flexible sizes
      logo: {
        modifiers: {
          format: "webp",
          quality: 90,
          fit: "contain",
        },
      },
      // Hero/Featured images - responsive with multiple sizes
      hero: {
        modifiers: {
          format: "webp",
          quality: 85,
          fit: "cover",
        },
      },
      // Project screenshots - optimized for display
      project: {
        modifiers: {
          format: "webp",
          quality: 80,
          fit: "cover",
        },
      },
      // Thumbnail images
      thumbnail: {
        modifiers: {
          format: "webp",
          width: 400,
          height: 300,
          quality: 75,
          fit: "cover",
        },
      },
      // Experience logos - small but crisp
      experienceLogo: {
        modifiers: {
          format: "webp",
          quality: 90,
          fit: "contain",
          background: "transparent",
        },
      },
    },
    // Global responsive settings
    sizes: "xs:100vw sm:50vw md:400px lg:500px xl:600px",
    // Image provider settings for external CDN
    providers: {
      imagedelivery: {
        name: "imagedelivery",
        provider: "ipx",
        options: {
          baseURL: "https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/",
        },
      },
    },
    // Default provider
    provider: "ipx",
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

  // Ensure SSR is enabled for better SEO and initial load
  ssr: true,

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("spline-viewer"),
    },
  },

  compatibilityDate: "2025-06-10",
});
