module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | JavaScript.mk',
    htmlAttrs: { lang: 'mk', class: 'w-screen h-screen' },
    bodyAttrs: { class: 'w-screen h-screen font-sans text-base m-0 bg-gray-200' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Javascript.mk - Tutorials for Web Development on Macedonian.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Load global CSS
   */
  css: ['@/assets/css/main.scss'],
  /*
   ** Load nuxt modules
   */
  modules: [],

  /*
   ** This option is given directly to the vue-router Router constructor
   */
  router: {
    base: '',
    linkActiveClass: 'is-active'
  },
  generate: {
    routes: [
      '/courses/es6',
      '/courses/javascript-basics',
      '/courses/nuxt-js',
      '/courses/vue-js-basics',
      '/courses/vue-js-advanced',
      '/courses/laravel-basics',
      '/courses/laravel-advanced',
      '/courses/laravel-vue-forum',
      '/courses/tailwind-css'
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
+    ** Extract CSS
+    */
    extractCSS: true,
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
