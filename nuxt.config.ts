const { gitDescribe, gitDescribeSync } = require('git-describe')

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content'
    ],
    content: {
        documentDriven: true
    },
    runtimeConfig: {
        public: {
            gitMasterTag: gitDescribeSync().hash
        }
    },
    nitro: {
        prerender: {
            routes: ['/sitemap.xml']
        }
    }
})
