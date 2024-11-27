---
outline: deep
---

# Exercices bloc 3


## Semaine 12
::: details Utilisation d'une base de données

### Utilisation d'une base de données
#### Objectifs
Mettre en pratique l’utilisation d’une base de données en C#.

#### Préparation
1) Téléchez le projet de départ : [S12E1-BD](https://gitlab.com/420-14b-fx/contenu/-/blob/main/bloc3/cours%2023/S12E1-BD.zip)
2) Importez dans pypMyAdmin - MySql le fichier **livres_bd.sql** se trouvant dans le projet de départ.

#### Problème

1) Créer une nouvelle classe nommée "**DAL.cs**" (Data Access Layer). Celle-ci doit contenir les méthodes permettant la gestion des livres (**CRUD**) contenus dans la base de données "**livres_bd**". 
4) Tester les différentes méthodes de votre classe "**DAL.cs**" afin de tester l’affichage de la liste des livres, l’ajout, la modification et la suppression d’un livre.

#### Solution
Téléchargez la solution : [S12E1-BD-Solution](https://gitlab.com/420-14b-fx/contenu/-/blob/main/bloc3/cours%2023/S12E1-BD%20-%20Solution.zip)

:::


::: details Utilisation d'une base de données avec des objets composés.

### Utilisation d'une base de données avec des objets composés.
#### Objectifs
Mettre en pratique l’utilisation d’une base de données et la composition d'objet. Dans cet exercices, un livres possèdes un ou plusieurs auteurs.

#### Préparation

1) Téléchez le projet de départ : [S12E2-CompositionObjets](https://gitlab.com/420-14b-fx/contenu/-/blob/main/bloc3/cours%2023/S12E2-CompositionObjets.zip?ref_type=heads)
2) Importez dans pypMyAdmin - MySql le fichier **livres_auteurs_bd.sql** se trouvant dans le projet de départ.
3) La base de données contient déjà une liste d'auteurs.

#### Problème
Vous devez modifier l'application afin de permettre à un utilisatuer d'ajouter un livre, d'afficher la liste des livres ainsi que les détails d'un livre sélectionné.

1) Compléter la classe "**DAL.cs**" (Data Access Layer). Celle-ci doit contenir les méthodes permettant d'obtenir la liste des livres sans leurs auteurs, d'ajouter un livre avec ses auteurs et d'obtenir un livre avec ses auteurs.

2) Compléter les méthodes du formulaire permettant l'ajout d'un livre. Vous n'avez pas à faire la validation du formulaire. Assurez-vous seulement qu'un livre doit avoir au moins un auteur et qu'il ne peut pas y avoir 2 fois le même auteurs dans la liste des auteurs.

3) Compléter les méthodes du formulaire permettant l'affichage de la liste des livres.

4) Compléter les méthode du formulaire permettant l'affichage des détails d'un livre sélectionné dans la liste. Lors de l'affichage des détails d'un livre, vous devez obtenir le livre à partir de la base de données.
<!--
#### Solution
Téléchargez la solution : [S12E2-CompositionObjets-Solution](https://gitlab.com/420-14b-fx/contenu/-/blob/main/bloc3/cours%2023/S12E2-CompositionObjets%20-%20Solution.zip)
-->
:::



## Semaine 13
::: details Exercices sur l'utilisation les indexeurs

### Exercices sur l'utilisation les indexeurs

#### Objectifs
Mettre en pratique la création et l'utilisation d'indexeur en c#

#### Préparation
1) Créer un projet console nommé "**S13E1-Indexeurs**"

#### Problème

1) Créer une classe Employe ayant les propriétés et méthodes suivantes :

**Propriétés publiques**:
- (string) Nom
- (string) Prénom
- (string) NAS

**Méthodes publiques**
- Constructeur paramétré permettant d'initialiser toutes les propriétés
- ToString() : Afficher l’information de l’employé 

2) Créer une classe nommée **ListeEmployes** ayant les propriétés et les méthodes suivantes :

**Attribut privé**:
- (List\<Employe\>) _employes : Contient la liste des employés

**Propriété public**
- (int) NbEmployes : Retourne le nombre d’employés dans la liste
- [int index] : Obtient ou Défini un employé à partir d’une position dans la liste d’employés. L’index ne doit pas être à l’extérieure des plages de valeurs possibles pour la liste d’employés.
- [string nas] : Obtient un employé dans la liste d’employés à partir de son NAS. Le NAS ne peut pas être vide ou nul. Si l’employé n’existe pas, alors on retourne nul.

**Constructeur**
- Sans paramètre : Initialise la liste des employés.

**Méthodes publiques :**
- Void Ajouter(Employe pEmploye) : Permet d’ajouter un employé à la liste. L’employé ne doit pas être nul.
- Bool Supprimer(Employe pEmploye) : Permet de supprimer un employé de la liste. L’employé ne doit pas être nul. Retourne vrai si la suppression a fonctionné. Faux sinon.

3) Tester l'ajout, la modification et la suppression d'employés dans une liste d'employés (LiseEmploye).

:::