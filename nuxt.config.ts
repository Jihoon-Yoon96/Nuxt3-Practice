// nuxt.config.ts
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        "@pinia/nuxt"
    ],
    css: ['vuetify/lib/styles/main.sass'],
    build: {
        transpile: ['vuetify']
    },
    srcDir: 'src/',
    target: "static",
    ssr: false
})
