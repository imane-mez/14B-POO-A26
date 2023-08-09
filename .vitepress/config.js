import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs/',
  title: "Techniques de l'information - Cégep Garneau",
  description: "Introduction à la programmation orientée objet en C#",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
    ],

    sidebar: [
      {
        text: 'Bloc 1',
        items: [
          { text: 'révision', link: '/revision' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
