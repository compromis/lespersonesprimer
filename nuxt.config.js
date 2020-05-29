export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Les persones primer - Compromís',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Si penses que s\'ha de blindar la sanitat pública i dotar-la dels recursos que necessita... les persones primer'
      },
      { property: 'og:image', content: '/thumbnail.png' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://compromis.net/sub/fonts/compromis.css'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://compromis.net/sub/icons/favicon.ico'
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '32x32',
        href: 'https://compromis.net/sub/icons/favicon32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: 'https://compromis.net/sub/icons/favicon192.png'
      }
    ],
    htmlAttrs: {
      class: ['bg-dark text-white']
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  }
}
