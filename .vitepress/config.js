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
    
      { text: 'Révision', link: '/revision' },
      { text: 'Résolution de problèmes', link: '/resolution_problemes' },
      { text: 'Programmation Orientée Objet', 
        items:[
          {text: 'Classe', link: '/poo_intro' },
          {text: 'Encapsulation', link: '/encapsulation' },
          {text: 'Relation entre les classes', link: '/relations' },
          {text: 'Vecteur d\'objets', link: '/vecteur_objets' },
          {text: 'Méthode ToString()', link: '/methode_tostring' },
        ],
      },
      { text: 'Type Enum', link: '/enum' },
      { text: 'Espace de nom', link: '/namespace' },
      { text: 'TryParse', link: '/tryparse' },
      { text: 'Documentation du code', link: '/commentaires' },
      {
        text: 'WPF',
        items: [
          { text: 'Validation d\'un formulaire', link: '/validationFormulaire' },
        ]
      },
      {
        text: 'En vrac',
        items: [
          { text: 'Convention de nommage', link: '/convention' },
          { text: 'Norme de codage', link: '/normes' },
          { text: 'UtilEnum.cs', link: 'https://gitlab.com/420-14b-fx/contenu/-/raw/main/en_vrac/UtilEnum.cs?ref_type=heads&inline=false'},
          { text: 'Bloc-note.xml', link: 'https://gitlab.com/420-14b-fx/contenu/-/raw/main/en_vrac/Bloc-notes.xml?ref_type=heads&inline=false' },
          { text: 'Configuration GitLab avec VS 2022', link: '/git' },
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
