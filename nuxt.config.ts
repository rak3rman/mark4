import { defineNuxtConfig } from 'nuxt'
const { gitDescribe, gitDescribeSync } = require('git-describe')

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content'
    ],
    content: {
        // https://content.nuxtjs.org/api/configuration
    },
    runtimeConfig: {
        public: {
            gitMasterTag: gitDescribeSync().hash
        }
    },
    build: {
        transpile: [
            '@headlessui/vue',
            '@heroicons/vue'
        ]
    },
    nitro: {
        prerender: {
            routes: ['/sitemap.xml']
        }
    }
})
