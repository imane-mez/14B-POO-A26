
# Git avec Visual Studio et GitLab

## Installation

Installez Git sans changer les options par défaut : http://git-scm.com/downloads

**Liens utiles**

- Documentation officielle de Git : https://git-scm.com/doc
- Cours rapide sur Git en 15 minutes : https://try.github.io/levels/1/challenges/1
- Cours sur Git (niveau 1 gratuit) : http://gitreal.codeschool.com/levels/1
- Cours sur Git et GitHub sur OpenClassRooms : https://openclassrooms.com/courses/gerer-son-code-avec-git-et-github

## Configuration initiale pour une équipe travaillant sur un même projet

1) **Pour les deux coéquipiers**
    - Créez-vous un compte sur le cloud GitLab.com (https://gitlab.com/).

2) **Coéquipier 1** : Celui ayant une version à jour du projet

    1) Créez-vous un nouveau projet (blank project) **privé** (obligatoire pour les travaux à Garneau) sur GitLab. 

    ![Nouveau projet git la](/images/git_1.png)

    ![Nouveau projet git la](/images/git_2.png)

    ![Nouveau projet git la](/images/git_3.png)

    2) Ajoutez votre coéquipier au projet avec le rôle « Maintainer ».

    ![Nouveau projet git la](/images/git_4.png)

    ![Nouveau projet git la](/images/git_5.png)

  

3) À parti de GitLab, copiez l'URL (https) du projet.

![Nouveau projet git la](/images/git_6.png)



4) Démarrez Visual Studio et sélectionnez "**Cloner un dépôt**" et copier l'Url du projet sous **"Emplacement du dépôt"**

 ![Nouveau projet git la](/images/git_7.png)

 ![Nouveau projet git la](/images/git_8.png)

5) Si ce n'est pas déjà fait, vous aurez à configurer votre nom d'utilisateur et mot de passe dans Visual Studio. N'oubliez pas de cocher la case "Définir dans le fichier .gitconfig global".

  ![Nouveau projet git la](/images/git_9.png)

6) Pour créer un nouveau projet, vous n'avez qu'à aller dans le menu Fichier et sélectionner nouveau projet. Assurez-vous que l'emplacement pour la création de votre nouveau projet se trouve bien dans le même répertoire où vous avez cloné votre projet GitLab. 


## Ignorer des fichier (.gitignore)

Pour ignorer certains fichiers de votre solution afin qu'ils ne soient pas publiés sur le dépôt distant et ainsi éviter des conflits, vous devez utiliser un fichier nommé « .gitignore » . Maintenant, localement sur votre ordinateur à partir de Windows, copiez le fichier

Pour ce faire, vous devez :

1) Cliquer sur l'option « **…** » à partir du menu « **Gérer les dépôt distants …** ».

![Nouveau projet git la](/images/git_10.png)

2) Vous devez par la suite sélectionner dans le menu, l'option **Paramètres du dépôt Git -> Général**. Dans la section, « **Git files** », cliquer sur le bouton « **Ajouter**   » vis-à-vis Ingorer le fichier:

![Nouveau projet git la](/images/git_11.png)


## Comment faire pour conserver des versions de fichier localement?

- À partir l'onglet "Modification Git"
    - Indiquez le texte du "**Commit**" (Celui-ci doit être significatif).
    - Sélectionner les fichiers à ajouter au commit.
    - Cliquez sur « **Valider Tout** ».

![Nouveau projet git la](/images/git_12.png)

## Comment faire pour accepter une version modifiée de certains fichiers et les mettre sur le dépôt distant ?

Important : Avant de pouvoir effectuer un « Push », vous devez avoir une copie à jour des fichiers du dépôt distant.  Ainsi, il est préférable, ***voire nécessaire, de toujours faire un « Pull » avant un « Push ».
    - Exécutez les commandes suivantes dans cet ordre : 
        -  À partir de l'onglet « Modification Git», saisissez le texte du "Commit" (celui-ci doit être significatif) et cliquez sur « **Valider tout et synchroniser** ».
        -  Éventuellement, vous devrez gérer manuellement les conflits si la version locale d’un fichier est différente de celle sur le dépôt distant.
        -  S’il n’y a aucun conflit, alors cliquez sur le lien « **Pousser** ».

