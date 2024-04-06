export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ["@/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/abstracts/_variables.scss";',
        },
      },
    },
  },
  app: {
    head: {
      title: 'Frankee.',
      meta: [
        { name: 'description', content: 'Pierwsza agencja social media w Karkonoszach.' },
        { name: 'author', content: 'Bartek Pierr' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    },
  },
})
