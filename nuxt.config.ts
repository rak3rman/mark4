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
    css: [
        '@/assets/css/main.css',
    ],
    runtimeConfig: {
        public: {
            gitMasterTag: gitDescribeSync().hash
        }
    },
})
