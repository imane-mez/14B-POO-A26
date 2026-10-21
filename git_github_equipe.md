
# Git avec Visual Studio et GitHub <br><small> Collaboration en équipe </small>
Dans le cadre d'un développement logiciel, le travail d'équipe nécessite une coordination rigoureuse pour éviter que les modifications des uns n'écrasent le travail des autres.
Les étapes suivantes vous montrent comment effectuer la configuration initiale de votre dépôt, appliquer les bonnes pratiques de synchronisation (Pull avant Push), et résoudre sereinement les conflits de code qui peuvent survenir en cours de route.


## Configuration initiale pour une équipe travaillant sur un même projet

1) **Coéquipier 1** : Celui ayant une version à jour du projet

    1) Ouvrir le projet Visual Studio existant et sélectionnier le menu `Git--> créer un dépôt Git`
    
      ![Nouveau projet github](/images/git_github_1.png)

    2) Séctionner le modèle .gitignore par défaut de Visual Studio
    
    3) Se connecter à son compte GitHub, indiquer le nom du dépôt et cocher la case "Dépôt privé"

    ![Nouveau projet github](/images/git_github_2.png)

    4) Cliquer sur le bouton `Créer et envoyer (push)`


    5) Sur le site de GitHub, sélectionner votre projet et cliquer sur le menu `Settings`, cliquer sur l'option `Collaborators`,  cliquer sur le bouton `Add people` et ajouter votre coéquiper.

    ![Nouveau projet github](/images/git_github_3.png)

## .gitignore : Ignorer des fichier - Pour un dépôt distant cloné qui n'en contient pas

Pour ignorer certains fichiers de votre solution afin qu'ils ne soient pas publiés sur le dépôt distant et ainsi éviter des conflits, vous devez utiliser un fichier nommé « .gitignore » . Si vous ne l'avez pas fait lors de la création du dépôt, voici comment faire.

Vous devez :

1) Cliquer sur l'option « **…** » à partir du menu « **Gérer les dépôt distants …** ».

![Nouveau projet git la](/images/git_10.png)

2) Vous devez par la suite sélectionner dans le menu, l'option **Paramètres Git -> Configuration du référentiel Git**. Cliquer sur le bouton « **Ajouter /.gitignore**   » :

![Nouveau projet git la](/images/git_gitignore.png)

## Comment faire pour accepter une version modifiée de certains fichiers et les mettre sur le dépôt distant ?

Important : Avant de pouvoir effectuer un « **Push** », vous devez avoir une copie à jour des fichiers du dépôt distant.  Ainsi, il est préférable, **voire nécessaire, de toujours faire un « Pull » avant un « Push »**.
- Exécutez les commandes suivantes dans cet ordre : 
    -  À partir de l'onglet « Modification Git», saisissez le texte du "Commit" (celui-ci doit être significatif) et cliquez sur « **Valider tout et synchroniser** ».
    -  Éventuellement, vous devrez gérer manuellement les conflits si la version locale d’un fichier est différente de celle sur le dépôt distant.
    -  S’il n’y a aucun conflit, alors cliquez sur le lien « **Pousser** ».

## Comment résoudre des conflits 

Lorsque vous tentez de pousser vos modifications sur le dépôt distant, il se peut que le message suivant s'affiche :

![Message de conflit](/images/git_13.png)

Cela indique que votre version du code n'est pas à jour par rapport à celle se trouvant sur le dépôt distant. **Vous devez donc synchroniser votre code en tirant celui qui se trouve sur le dépôt distant**.


Lors d’une synchronisation, il se peut que vous ayez des conflits à résoudre avant de pouvoir pousser votre code : 

![Message de conflit](/images/git_14.png)

Dans ce cas, cliquez sur le lien « **Ouvrir l'éditeur de fusion** ». La fenêtre suivante affichera les conflits :

![Message de conflit](/images/git_15.png)

Vous n’aurez qu’à cocher le code du côté distant ou local que vous désirez conserver et celui-ci apparaîtra dans la section du bas. Une fois terminé, cliquez sur le bouton « **Accepter la fusion** ».

![Message de conflit](/images/git_16.png)

À partir de la fenêtre « **Modifications Git** », saisissez le texte du "Commit" (celui-ci doit être significatif) et cliquez sur « **Valider les changements pousser**».
