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
    
      { text: 'Bloc 1', 
        collapsed: true,
        items : [
          { text: 'Révision', link: '/revision' },
          { text: 'Types', 
            collapsed: true,
            items : [
              { text: 'Type nullable', link: '/type_nullable' },
              { text: 'String', link: '/string' },
              /*{ text: 'DateTime', link: '/datetime' },
              { text: 'TimeSpan', link: '/timespan' },
              { text: 'DateOnly', link: '/dateonly' },
              { text: 'TimeOnly', link: '/timeonly' },
              { text: 'Type Enum', link: '/enum' },*/
             

            ]
          },
          /*{text: 'Résolution de problèmes', link: '/resolution_problemes' },
          {text: 'Classe', link: '/poo_intro' },
          {text: 'Encapsulation', link: '/encapsulation' },
          {text: 'Relation entre les classes', link: '/relations' },
          {text: 'Vecteur d\'objets', link: '/vecteur_objets' },
          {text: 'Composition d\'objets', link: '/composition_objets' },
          {text: 'Espace de nom', link: '/namespace' },
          {text: 'Méthode ToString()', link: '/methode_tostring' },
          {text: 'TryParse', link: '/tryparse' },*/
          {text: 'Exercices', link: '/exercices_bloc1' },
        ]
      },
     /* { text: 'Bloc 2', 
        collapsed: true,
        items : [
          {text: 'Listes génériques (List)', link: '/listes_generiques' },
          {text: 'Type Guid', link: '/guid' },
          {text: 'La gestion des exceptions', link: '/gestion_exceptions' },
          {text: 'Surcharge d\'opérateur', link: '/surcharge_operateurs' },
          {text: 'Classes et membres statiques', link: '/classe_statique' },
          {text: 'Classes UtilEnum', link: '/classe_utilenum' },
          {text: 'Algorithmes de tri', link: '/algo_tri' },
          {text: 'Tests unitaires', link: '/tests_unitaires' },
          {text: 'Exercices', link: '/exercices_bloc2' },

        ]
      },
      {
        text : 'Bloc 3',
        items : [
          { text: 'Utilisation d\'une base de données', link: '/base_donnees' },
          { text: 'Indexeur', link: '/indexeur' },
          { text: 'Recherche dichotomique', link: '/recherche_dichotomique' },
          { text: 'Documentation du code', link: '/commentaires' },
          { text: 'Scénarios de test', link: '/tests_fonctionnels' },
          { text: 'Exercices', link: '/exercices_bloc3' },

        ]
      },*/
       /*{
        text: 'En vrac',
        items: [
          { text: 'Convention de nommage', link: '/convention' },
          { text: 'Norme de codage', link: '/normes' },
          
         { text: 'UtilEnum.cs', link: 'https://gitlab.com/420-14b-fx/contenu/-/raw/main/en_vrac/UtilEnum.cs?ref_type=heads&inline=false'},
          { text: 'Bloc-note.xml', link: 'https://gitlab.com/420-14b-fx/contenu/-/raw/main/en_vrac/Bloc-notes.xml?ref_type=heads&inline=false' },
          { text: 'Configuration GitLab avec VS 2022', link: '/git' },
        ]
      },
      
     
      { text: 'Programmation Orientée Objet', 
        items:[
          {text: 'Classe', link: '/poo_intro' },
          
          

        ],
      },
      

    
      
   
      
  
      ,*/
      /*{
        text: 'WPF',
        items: [
          { text: 'Validation d\'un formulaire', link: '/validationFormulaire' },
          { text: 'Contrôle DatePicker', link: '/date_picker' },
          { text: 'Rétroaction utilsateur', link: '/retroaction' },
          { text: 'Application muli-fenêtre', link: '/formulaire_secondaire' },
          { text: 'Affichage du temps en WPF', link: '/timespan_up_down_control' },
          { text: 'Fichier de configuration appsettings.json', link: '/appsettings' },
          { text: 'Liaison de données', link: '/binding' },
          { text: 'Gestion de fichiers', link: '/file_dialog' },
          { text: 'Contrôles dynamiques', link: '/controles_dynamiques' },
        ]
      },
      {
        text: 'En vrac',
        items: [
          { text: 'Convention de nommage', link: '/convention' },
          { text: 'Norme de codage', link: '/normes' },
          { text: 'UtilEnum.cs', link: 'https://gitlab.com/420-14b-fx/contenu/-/raw/main/en_vrac/UtilEnum.cs?ref_type=heads&inline=false'},
          { text: 'Bloc-note.xml', link: 'https://gitlab.com/420-14b-fx/contenu/-/raw/main/en_vrac/Bloc-notes.xml?ref_type=heads&inline=false' },
          { text: 'Configuration GitHub avec VS 2022', link: '/git_github' },
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
