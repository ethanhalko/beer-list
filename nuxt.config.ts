// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/beer-list/',
    buildAssetsDir: 'assets'
  },
  devtools: { enabled: true },
  css: [
    '~/assets/css/app.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-vitest', 'nuxt-icon']
});
