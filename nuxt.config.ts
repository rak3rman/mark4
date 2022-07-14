import { defineNuxtConfig } from 'nuxt'
const { gitDescribe, gitDescribeSync } = require('git-describe')

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    runtimeConfig: {
        public: {
            gitMasterTag: gitDescribeSync().hash
        }
    },
})
