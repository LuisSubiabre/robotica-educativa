import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Computación Creativa",
  description: "Repositorio de documentación",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Robótica', link: '/robotica' }
    ],

    sidebar: [
      {
        text: 'Introducción',
        collapsed: false,
        items: [
          { text: 'Robótica Educativa', link: '/robotica' },
          { text: 'Beneficios de la robótica en la educación', link: '/beneficios' },
          { text: 'Habilidades que desarrolla la robótica educativa', link: '/habilidades' }
        ],
      
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'youtube', link: 'https://www.youtube.com/luissubiabre' },
    ]
  }
})
