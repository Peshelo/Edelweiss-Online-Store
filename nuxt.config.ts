// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon',
    // '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/image',
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: true,
        Montserrat: true,
        Inter: [400, 700],
         'Josefin+Sans': true,
        Lato: [100, 300],
        Raleway: {
          wght: [100, 400],
          ital: [100]
        },
      }
  }]
  ],
  css:['@/assets/css/main.css'],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:8080/',
    },
  },
})
