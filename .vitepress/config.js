import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs/',
  title: "Techniques de l'informatique",
  description: "Introduction à la programmation orientée objet en C#",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Accueil', link: '/' },
    ],

    sidebar: [
      {
        text: 'Bloc 1 - Semaines 1 à 6',
        items: [
          { text: 'Révision', link: '/revision' },
          { text: 'Résolution de problèmes', link: '/resolution_problemes' },
          { text: 'Programmation Orientée Objet', 
            items:[
              {text: 'Classe', link: '/poo_intro' },
              {text: 'Encapsulation', link: '/encapsulation' },
              {text: 'Relation entre les classes', link: '/relations' },
              {text: 'Vecteur d\'objets', link: '/vecteur_objets' },
            ],
          },
          { text: 'Type Enum', link: '/enum' },
          { text: 'Espace de nom', link: '/namespace' },
         
        ]
      },
      {
        text: 'En vrac',
        items: [
          { text: 'Convention de nommage', link: '/convention' },
          { text: 'UtilEnum.cs', link: 'https://gitlab.com/420-14b-fx/contenu/-/raw/main/en_vrac/UtilEnum.cs?ref_type=heads&inline=false'},
          { text: 'Bloc-note.xml', link: 'https://gitlab.com/420-14b-fx/contenu/-/raw/main/en_vrac/Bloc-notes.xml?ref_type=heads&inline=false' },
        ]
      },
      /*{
        text: 'Programmation Orientée objet',
        items: [
          { text: 'introduction', link: '/poo_intro' },
          //{ text: 'résolution de problèmes', link: '/resolution_problemes' }
        ]
      },*/
    ],

   /* socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]*/
  }
})
