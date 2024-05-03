// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['element-plus/dist/index.css',
  '~/assets/styles/variables.scss',
  '~/assets/styles/main.scss',
  '~/assets/styles/global.scss'
  ],
  plugins: ['~/plugins/element-plus.js'],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'proyecto-final',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }
      ],
    }
  }
})
