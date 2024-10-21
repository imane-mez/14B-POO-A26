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


::: details S7E2 - Formulaire secondaire

### S7E2 - Formulaire secondaire

### Objectif 
Mettre en pratique la création d'interfaces en WPF avec plusieurs formulaires et l'utilisation de la liste générique.

### Problème 

1)	Créer un nouveau projet WPF nommé S7E2_Formulaire secondaire.
2)	Créer la classe Film (vous pouvez réutiliser la classe de l'exercice précédent) répondant aux spécifications suivantes :
        - **Attributs et propriétés** :
            - Titre (ne peut pas être vide)
            - Année (doit être entre 1500 et l'année courante)
            - Acteurs (liste de chaîne de caractères)
        - **Constructeur**
            - Avec paramètre permettant d'initialiser le titre et l'année du film ainsi qu'une liste d'acteur vide.
        - **Méthodes** :
            - ToString() : Retourne le titre du film avec l'année entre parenthèses. 

3) Créer une classe nommée GestionFilms permettant la gestion d’une liste de film. (Vous pouvez réutiliser celle créer dans l'exercice précédent)

    - **Attributs et propriétés** :
        - Liste de films (set privé).
    - **Constructeur**
        - Sans paramètre permettant d’initialiser une liste de films vide.
    - **Méthodes**
        - bool AjouterFilm(Film pFilm) : Permet l’ajout du film à la liste de film. Un film ne peut pas être ajouté s’il existe déjà un film ayant le même titre et la même année dans la liste. Retourne vraie si le film a été ajouté, faux sinon.
        - bool SupprimerFilm(Film pFilm) : Permet la suppression du film de la liste de films. Retourne vraie si le film a été trouvé et supprimé, faux sinon.
4)	Créer l'interface suivante dans le formulaire principal.

![Formulaire gestion films](/images/formGestionFilm.png)

- Ajouter un attribut de type GestionFilms dans votre formulaire et l’instancier dans la méthode « Window_Loaded » du formulaire. Celui-ci vous permettra de gérer les films.
- Écrire le code du formulaire permettant :
    - Lors du chargement du formulaire. Ajouter le film suivant à votre attribut de type GestionFilms ainsi qu'un film de votre choix :
        - Titre: Spider-man No way hom
        - Année: 2021
        - Acteurs: Tome Holland, Zendaya Colman  
    - Afficher la liste de film dans le ListBox.

5) Ajouter et créer l'interface d'un nouveau formulaire nommé **FormFilm** à votre projet:

![Formulaire détails d'un film](/images/formDetailFilm.png)

- Écrire le code du formulaire permettant :
    - D'afficher les détails du film sélectionné dans le formulaire parent.
    - Fermer le formulaire lors du clique du bouton Fermer.

6) Écrire le code du bouton « Afficher détails » du formulaire principal permettant d'afficher les détails d'un film sélectionné dans le formulaire FormFilm.

:::

<!--
## Semaine 8
::: details S8E1 - Application Windows multiformulaires

### Objectif 
Mettre en pratique la construction d'une application Windows multiformulaires permettant d'effectuer les opérations classiques sur des données, soient créer/ajouter (**C**reate), lire/consulter (**R**ead), mettre à jour/modifier (**U**pdate), supprimer/détruire (**D**elete).  On utilise souvent l'acronyme CRUD en anglais pour désigner cet ensemble d'opérations très courant en informatique de gestion.

### Problème

Complétez l'exemple [S8C1-DemoMultiFormulaireCRUD](https://gitlab.com/420-14b-fx/contenu/-/tree/main/bloc2/cours%2015?ref_type=heads) présenté en classe en implémentant la **modification** et la **suppression** d'un employé.  
- Pour la modification, vous devez modifier le formulaire existant afin qu'il affiche les informations d'un employé sélectionné et permette la modification.  Assurez-vous de bien modifier le titre de du formulaire ainsi que le libellé des boutons.
- Pour la suppression, vous devez modifier le formulaire pour qu'il affiche les informations de l'employé en lecture seule seulement. Vous devez également demander la confirmation par l'utilisateur avant la suppression. Assurez-vous de bien modifier le titre de du formulaire ainsi que le libellé des boutons.

À la suite d'une de ces opérations, faites-en sorte que la liste des employés soit modifiée ainsi que le ListBox présentant les employés. 

:::-->