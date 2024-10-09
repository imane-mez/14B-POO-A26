---
outline: deep
---
# Exercices bloc 2


## Semaine 7
::: details S7E1 - Liste génériques

### S7E1 - Liste génériques

Mettre en pratique la création d'interfaces en WPF et l'utilisation de la liste générique.

#### Problème

1)	Créer un nouveau projet WPF nommé **S7E1_ExerciceListeGenerique**.
2)	Créer la classe **Film** répondant aux spécifications suivantes :
    - **Attributs et propriétés** :
        - Titre (Ne doit pas être vide)
        - Année (Doit être inférieure ou égale à l'année courante)
    - **Constructeur**
        - Avec paramètre permettant d'initialiser le titre et l'année du film.
    - **Méthodes** :
        - ToString() : Retourne le titre du film avec l'année entre parenthèses. 
3)	Créer une classe nommée GestionFilms permettant la gestion d’une liste de film.
    - **Attributs et propriétés** :
        - Liste de films (set privé).
    - **Constructeur**
        - Sans paramètre permettant d’initialiser une liste de films vide.	
    - **Méthodes**
        - **bool AjouterFilm(Film pFilm)** : Permet l’ajout du film à la liste de film. Un film ne peut pas être ajouté s’il existe déjà un film ayant le même titre et la même année dans la liste. Retourne vraie si le film a été ajouté, faux sinon.
        - **bool SupprimerFilm(Film pFilm)** : Permet la suppression du film de la liste de films. Retourne vraie si le film a été trouvé et supprimé, faux sinon.

4)	Créer l'interface suivante
 
![Interface de gestion des films](./images/exercice_liste_generique.png)

- Ajouter un attribut de type GestionFilm nommé **_gestionFilms** dans votre formulaire. Celui-ci vous permettra de gérer les films.
- Écrire le code du formulaire permettant :
    - D'initialiser le formulaire en cliquant sur le bouton Nouveau. L'initialisation doit supprimer le contenu des champs, désactiver le bouton supprimer et activer le bouton ajouter.
    - De valider le formulaire. Tous les champs sont obligatoires. L'année doit être une valeur comprise entre 1500 et la date du jour. Vous pouvez utiliser DateTime.Now.Year pour obtenir l'année courante. Vous devez afficher toutes les erreurs à l'utilisateur si le formulaire n'est pas valide. 
    - D'ajouter un nouveau film valide à la liste des films contenus dans votre attribut **_gestionFilms**. N'oubliez pas de donner une rétroaction à l'utilisateur si l'ajout a fonctionné ou non. Vous devez mettre à jour le ListBox.
    - D'afficher la listes des films contenus dans l'attribut **_gestionFilms**
    - De sélectionner un film dans le ListeBox et d'afficher les informations d'un film dans les champs texte. Lors d'une sélection, le bouton ajouter est désactivé et le bouton supprimé est activé.
    - De supprimer un film sélectionné dans la liste de la liste des films contenue dans l'attribut **_gestionFilm**. Vous devez demander à l'utilisateur de confirmer la suppression avant d'effectuer l'action. N'oubliez pas de donner une rétroaction à l'utilisateur si la suppression a fonctionné ou non. Vous devez mettre à jour le ListBox.
    - Permettre de fermer le formulaire avec le bouton quitter.

<!--#### Solution

Télécharger la solution commplète : [S7E1-ListeGeneriqe-Solution](https://gitlab.com/420-14b-fx/contenu/-/tree/main/bloc2/cours%2013?ref_type=heads)!-->

:::