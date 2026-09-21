
# Git avec Visual Studio et GitHub <br><small> Pour un travail individuel </small>

## Installation

Installez ou mettez à jour Git : http://git-scm.com/downloads
- Ne pas changer les options par défaut lors de l'installation.

## Configuration préalable de Git
### Renommer la branche principale en « main »
Il s'agit de modifier les configurations globales de Git sur votre Visual Studio afin de nommer la branche principale par défaut **main** de tous vos projets suivis: 

- À partir du menu `Outils > Options`.

- Dans la colonne de gauche, allez jusqu'à `Contrôle de code source > Paramètres Git > Configuration Globale Git`.

- Renseignez le champ : `Nom de branche par défaut` avec la valeur **main**

    ![Renommer la branche en main](/images/git_config_main.png) 

**Note :** Il n'est pas nécessaire de répéter cette étape à chaque fois que vous suivrez un nouveau projet avec Git.


## Configuration initiale 

- Si ce n'est pas déjà fait, créez-vous un compte sur le cloud GitHub.com (https://github.com/).

- Effectuez les opérations suivantes dans l'ordre :

    1) Ouvrir le projet Visual Studio existant et sélectionner le menu `Git > créer un dépôt Git`
    
    ![Nouveau projet github](/images/git_github_1.png)

    2) Séctionner le modèle .gitignore par défaut de Visual Studio
    3) Se connecter à son compte GitHub (à partir de Visual Studio), indiquer le nom du dépôt et cocher la case "**Dépôt privé**"

    ![Nouveau projet github](/images/git_github_2.png)

    4) Cliquer sur le bouton `Créer et envoyer (push)`

    ![Nouveau projet github](/images/git_push.png)

## Ignorer des fichier (.gitignore)

Ce fichier permet d'ignorer certains fichiers de votre solution afin qu'ils ne soient pas publiés sur le dépôt distant. Ceci évite de partager des fichiers qui risquent de créer des conflits dans le cas d'un travail collaboratif mais aussi des fichiers « inutiles » qui encombrent vos dépôts distants et ralentissent les transferts. 

Le fichier doit être nommé « **.gitignore** » . Si vous ne l'avez pas fait lors de la création du dépôt, voici comment faire.

Vous devez :

1) Cliquer sur l'option « **…** » à partir du menu « **Gérer les dépôt distants …** ».

![Nouveau projet git la](/images/git_10.png)

2) Vous devez par la suite sélectionner dans le menu, l'option **Paramètres du dépôt Git -> Général**. Dans la section, « **Git files** », cliquez sur le bouton « **Ajouter**   » vis-à-vis Ingorer le fichier:

![Nouveau projet git la](/images/git_11.png)


## Comment faire pour conserver des versions de fichier localement?

- À partir de l'onglet "Modification Git":
    - Ajoutez (aux changements indexés) les fichiers que vous voulez suivre à partir de la section contenant les modifications.
    - Indiquez le texte du "**Commit**" (Celui-ci doit être significatif, voir [les bonnes pratiques Git](#quand-faire-un-commit)).
    - Sélectionnez les fichiers à ajouter au commit.
    - Cliquez sur « **Valider Tout** ».

    ![Nouveau projet git la](/images/git_12.png)

    - Pour mettre à jour le dépôt distant, cliquez sur le lien « **Envoyer** ».

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
- **style** : pour des changements de formatage ou de **style de code** (qui ne modifient pas le comportement du code. ex. supprimer les sauts de ligne inutiles, corriger l'indentation, etc.).
- **refactor** : pour une refonte du code qui n'ajoute pas de nouvelles fonctionnalités ni ne corrige de bugs.
- **test** : pour ajouter ou modifier des tests.
- **perf** : pour améliorer les performances.

Voici un exemple : 

```bash
feat(auth): Ajout de la fonctionnalité de connexion utilisateur

Ce commit ajoute la fonctionnalité d'authentification de base, permettant aux utilisateurs de se connecter. Il inclut le formulaire de connexion, l'intégration de l'API et la gestion des erreurs.

```

### Bonne pratiques générales

- **Utiliser l'impératif présent** : Les messages de commit doivent être rédigés à l’impératif, comme si vous donniez un ordre au système. Exemple : "Ajout de la fonctionnalité de connexion"

- **Clarté et concision** : Soyez clair sur ce que vous avez fait et pourquoi. Un bon titre de commit doit être compréhensible sans avoir besoin de consulter le code lui-même.

- **Des messages courts pour le titre** : Limitez le titre à 50 caractères pour qu'il reste lisible. Utilisez la description pour des détails supplémentaires si nécessaire.

- **Séparer les commits logiquement** : Un commit doit correspondre à un seul changement logique. Ne mélangez pas plusieurs modifications sans lien dans un seul commit.

## Quand faire un push

- **Travail terminé ou stable** : Faites un push lorsque vous avez atteint une étape significative, comme une fonctionnalité terminée, ou lorsque le code est stable et ne casse rien.

- **Partager votre travail** : Si vous travaillez en équipe, il est important de faire un push régulièrement pour partager vos changements avec vos coéquipiers et éviter les conflits lors des fusions.

- **Avant de commencer une nouvelle tâche** : Avant de vous lancer dans une nouvelle fonctionnalité ou correction de bug, assurez-vous de faire un push pour sauvegarder et synchroniser votre travail en cours.

- **S'assurer que les autres peuvent accéder à votre travail** : Si vous devez quitter votre poste ou que vous travaillez depuis différents ordinateurs, faites un push pour sauvegarder votre code sur le dépôt distant.


## Liens utiles

- Documentation officielle de Git : https://git-scm.com/doc
- Cours rapide sur Git en 15 minutes : https://try.github.io/levels/1/challenges/1
- Cours sur Git (niveau 1 gratuit) : http://gitreal.codeschool.com/levels/1
- Cours sur Git et GitHub sur OpenClassRooms : https://openclassrooms.com/courses/gerer-son-code-avec-git-et-github