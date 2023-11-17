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
          {text: 'Classes et membres statiques', link: '/classe_statique' },
          {text: 'Surcharge d\'opérateur', link: '/surcharge_operateurs' },
          {text: 'La gestion des exceptions', link: '/gestion_exceptions' },
          //{text: 'Indexeur', link: '/indexeur' },
          

        ],
      },
      { text: 'Type DateTime et TimeSpan', link: '/date_time' },
     // { text: 'Type TimeOnly', link: '/time_only' },
      { text: 'Type Guid', link: '/guid' },
      { text: 'Type Enum', link: '/enum' },
      { text: 'Espace de nom', link: '/namespace' },
      { text: 'TryParse', link: '/tryparse' },
      { text: 'Listes génériques (List)', link: '/listes_generiques' },
      { text: 'Algorithmes de tri', link: '/algo_tri' },
      { text: 'Documentation du code', link: '/commentaires' },
      { text: 'Tests unitaires', link: '/tests_unitaires' },
      { text: 'Scénarios de test', link: '/tests_fonctionnels' },
      { text: 'Utilisation d\'une base de données', link: '/base_donnees' },
     // { text: 'Recherche dichotomique', link: '/recherche_dichotomique' },
      {
        text: 'WPF',
        items: [
          { text: 'Validation d\'un formulaire', link: '/validationFormulaire' },
          { text: 'Rétroaction utilsateur', link: '/retroaction' },
          { text: 'Application muli-fenêtre', link: '/formulaire_secondaire' },
          { text: 'Affichage du temps en WPF', link: '/timespan_up_down_control' },
          { text: 'Fichier de configuration App.config', link: '/app_config' },
          //{ text: 'Liaison de données', link: '/binding' },
         // { text: 'Gestion de fichiers', link: '/file_dialog' },
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
