import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Robótica Educativa",
  description: "Repositorio de documentación",
  logo: '/logo.png',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Robótica', link: '/introduccion' }
    ],

    sidebar: [
      {
        items: [
          { text: '¿Que és esto', link: '/que-es' },
          { text: 'El autor', link: '/autor' },
        ]

      },
      {
        text: 'Introducción',
        collapsed: false,
        items: [
          { text: 'Robótica Educativa', link: '/introduccion/robotica' },
          { text: 'Beneficios de la robótica en la educación', link: 'introduccion/beneficios' },
          { text: 'Habilidades que desarrolla la robótica educativa', link: 'introduccion/habilidades' }
        ]
      },
      {
        text: 'mBot',
        collapsed: false,
        items: [
          { text: 'Introducción', link: '/mbot/introduccion' },
          { text: 'Características', link: '/mbot/caracteristicas' },
          { text: 'Componentes', link: '/mbot/componentes' },
        ],
      
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LuisSubiabre' },
      { icon: 'youtube', link: 'https://www.youtube.com/luissubiabre' },
    ]
  }
})
