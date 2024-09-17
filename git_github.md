
# Git avec Visual Studio et GitHub

## Installation

Installez Git sans changer les options par défaut : http://git-scm.com/downloads

**Liens utiles**

- Documentation officielle de Git : https://git-scm.com/doc
- Cours rapide sur Git en 15 minutes : https://try.github.io/levels/1/challenges/1
- Cours sur Git (niveau 1 gratuit) : http://gitreal.codeschool.com/levels/1
- Cours sur Git et GitHub sur OpenClassRooms : https://openclassrooms.com/courses/gerer-son-code-avec-git-et-github

## Configuration initiale pour une équipe travaillant sur un même projet

1) **Pour les deux coéquipiers**
    - Créez-vous un compte sur le cloud GitHub.com (https://github.com/).

2) **Coéquipier 1** : Celui ayant une version à jour du projet

    1) Ouvrir le projet Visual Studio existant et sélectionnier le menu `Git--> créer un dépôt Git`
    
      ![Nouveau projet github](/images/git_github_1.png)

    2) Séctionner le modèle .gitignore par défaut de Visual Studio
    3) Se connecter à son compte GitHub, indiquer le nom du dépôt et cocher la case "Dépôt privé"

    ![Nouveau projet github](/images/git_github_2.png)

    4) Cliquer sur le bouton `Créer et envoyer (push)`


    5) Sur le site de GitHub, sélectionner votre projet et cliquer sur le menu `Settings`, cliquer sur l'option `Collaborators`,  cliquer sur le bouton `Add people` et ajouter votre coéquiper.

    ![Nouveau projet github](/images/git_github_3.png)

## Ignorer des fichier (.gitignore)

Pour ignorer certains fichiers de votre solution afin qu'ils ne soient pas publiés sur le dépôt distant et ainsi éviter des conflits, vous devez utiliser un fichier nommé « .gitignore » . Si vous ne l'avez pas fait lors de la création du dépôt, voici comment faire.

Vous devez :

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


## Quand faire un commit

- **Petites étapes significatives** : Il est recommandé de faire un commit chaque fois que vous avez atteint un point stable dans votre travail, même si la fonctionnalité n'est pas entièrement terminée. Par exemple, après avoir ajouté une fonction ou corrigé un bug.

- **Unité logique de travail** : Le commit doit représenter une unité logique de travail. Évitez de mélanger plusieurs modifications sans lien dans un seul commit (par exemple, éviter de corriger un bug et d'ajouter une nouvelle fonctionnalité dans le même commit).

- **Tests réussis :** Faites un commit lorsque vous avez testé votre code et que tout fonctionne correctement (ou au moins fonctionne comme prévu).

- **Messages clairs** : Les messages de commit doivent être descriptifs, expliquant ce qui a été modifié et pourquoi.

Une bonne description de commit doit comprendre deux parties :

- Un message de titre clair (maximum 50 caractères recommandé)
- Une description plus détaillée (**optionnelle**) qui explique davantage le "pourquoi" du changement, et non seulement le "quoi".

**structure d'un commit**

```bash

<type>(<portée facultative>): <description courte>

<description détaillée (optionnelle)>


```

Types de commits courants :

- **feat** : pour une nouvelle fonctionnalité.
- **fix** : pour une correction de bug.
- **chore** : pour les changements de configuration ou maintenance qui n'affectent pas le code de production (par ex., mise à jour des dépendances).
- **docs** : pour des modifications concernant la documentation.
- **style** : pour des changements de formatage ou de style de code (qui ne modifient pas le comportement du code).
- **refactor** : pour une refonte du code qui n'ajoute pas de nouvelles fonctionnalités ni ne corrige de bugs.
- **test** : pour ajouter ou modifier des tests.
- **perf** : pour améliorer les performances.
- **ci** : pour des modifications liées à l'intégration continue ou les outils de déploiement.

Voici un exemple : 

```bash
feat(auth): Ajout de la fonctionnalité de connexion utilisateur

Ce commit ajoute la fonctionnalité d'authentification de base, permettant aux utilisateurs de se connecter. Il inclut le formulaire de connexion, l'intégration de l'API et la gestion des erreurs.

```

### Bonne pratiques générales

- **Utiliser l'impératif présent** : Les messages de commit doivent être rédigés à l’impératif, comme si vous donniez un ordre au système. Exemple : "Ajout de la fonctionnalité de connexion"

- **Clarté et concision** : Soyez clair sur ce que vous avez fait et pourquoi. Un bon titre de commit doit être compréhensible sans avoir besoin de consulter le code lui-même.

- **Des messages courts pour le titre **: Limitez le titre à 50 caractères pour qu'il reste lisible. Utilisez la description pour des détails supplémentaires si nécessaire.

- **Séparer les commits logiquement** : Un commit doit correspondre à un seul changement logique. Ne mélangez pas plusieurs modifications sans lien dans un seul commit.

## Quand faire un push

- **Travail terminé ou stable** : Faites un push lorsque vous avez atteint une étape significative, comme une fonctionnalité terminée, ou lorsque le code est stable et ne casse rien.

- **Partager votre travail** : Si vous travaillez en équipe, il est important de faire un push régulièrement pour partager vos changements avec vos coéquipiers et éviter les conflits lors des fusions.

- **Avant de commencer une nouvelle tâche** : Avant de vous lancer dans une nouvelle fonctionnalité ou correction de bug, assurez-vous de faire un push pour sauvegarder et synchroniser votre travail en cours.

- **S'assurer que les autres peuvent accéder à votre travail** : Si vous devez quitter votre poste ou que vous travaillez depuis différents ordinateurs, faites un push pour sauvegarder votre code sur le dépôt distant.


