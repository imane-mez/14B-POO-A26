---
outline: deep
---
# Exercices bloc 1


## Semaine 1
::: details S1E1 - Révision

### Palindrome

Écrivez un programme principal (application console) qui demande une phrase (sans accent, n'y caractères spéciaux) à l’utilisateur et qui vérifie si cette phrase est un palindrome (sans tenir compte des majuscules et des espaces).  Assurez-vous que votre programme fonctionne aussi bien avec une longueur de phrase paire qu’impaire et qu'il soit le plus efficace possible. 

Voici quelques exemples pour tester votre solution : https://fr.wikipedia.org/wiki/Palindrome#Quelques_exemples

### Tâches à faire

Premièrement, télécharger :  **[solution de départ](https://gitlab.com/420-14b-fx/contenu/-/blob/main/bloc1/cours%2001/S1E1-Revision-D%C3%A9part.zip?ref_type=heads)**.

Vous devez compléter le projet C# (application console) qui va permettre de gérer une liste de tâches à faire (To do list).
Cette application doit permettre à l'utilisateur de : 
- Consulter une liste de tâche non complétée contenues dans un fichier nommé "**taches.csv**" et situé à dans le dossier "**C:\data-420-14B-FX\taches.csv**". **Vous devez copier le fichier fourni avec la solution de départ à cet endroit.**
- Ajouter une nouvelle tâche
- Indiquer qu’une tâche a été complétée (**OPTIONNEL!**)
- Enregistrer les modifications dans le même fichier.
- Quitter l'application.

Ne soyez pas surpris s'il y a des erreurs; c'est normal :smiley:. Celles-ci diparaîtront une fois que vous aurez créé la Struct nommée Tache.

Deuxièmement, vous devez créer une structure (Struct) nommée Tache ayant les propriétés suivantes :
- Titre
- Description
- Completee (indique si la tache est complétée ou non (vrai ou faux)).

Une fois la structure Tache complétée, vous ne devriez plus avoir d'erreur dans le code.

Finalement, vous devez compléter le code manquant pour faire fonctionner l'application. Prenez soins de lire les commentaires des fonctions et du code contenu dans les fichiers **FonctionUtiles.cs** et **Program.cs**. 

Ceux-ci vous donneront des spécifications sur le code à écrire. Vous pouvez également naviguer à travers le code à réaliser en parcourant la liste des commentaires de type "**//TODO :**" de Visual Studio. Pour ce faire, vous n'avez qu'à cliquer dans le menu Affichage et sélectionner **Tâche suivante** ou **Tâche précédente**. Cela devrait afficher la liste des tâches que vous devez réaliser pour faire fonctionner le programme. **Attention**, celles-ci ne sont pas inscrite en ordre de réalisation dans cette liste. C'est à vous de décider l'ordre dans lequel vous allez compléter le code manquant. 


 **Solutions de l'exercice** : [S1E1 - Révision - Solution](https://gitlab.com/420-14b-fx/contenu/-/blob/main/bloc1/cours%2001/S1E1-Revision-Solution.zip?ref_type=heads)

:::



::: details S1E2 - Résolution de problème

### Restaurant

Un restaurateur vous demande de créer une application console qui calculera automatiquement la facture d'un client.  L'application demandera le prix d'un apéritif, d'une entrée, d'un plat principal, d'un dessert et d'une bouteille de vin.  Si un des items n'a pas été pris, sa valeur sera à 0. À partir de ces valeurs, l'application doit calculer le sous-total, une taxe de consommation de 10%, un pourboire obligatoire de 15% et afficher les détails de la facture au client. Finalement, l'application doit également servir à calculer la monnaie à rendre au client.  Il demande le montant donné par le client et affiche la monnaie à lui rendre. Les factures créées devoient être conservée en mémoire (Vous n'avez pas à les enregistrer dans un fichier).

1) Décomposer le problème global en plusieurs problèmes plus petits et plus faciles à résoudre.
2) Identifier les entités ainsi que leur caractéristiques et comportements
2) Identifier les variables en entrée et en sortie et les constantes qui seront nécesssaires
3) Idenifier les fonctions ainsi que leurs entrée et sortie.
4) Programmer la solution.

### Jeu du pendu

Vous devez créer une application qui permettra à l'utilisateur de jouer au pendu contre l'ordinateur ( [https://fr.wikipedia.org/wiki/Le_Pendu_(jeu)](https://fr.wikipedia.org/wiki/Le_Pendu_(jeu))).


En bref, l'ordinateur choisit le mot et le joueur essaie de deviner les lettres dans le mot. Vous n'avez pas à dessiner le pendu vous n'avez qu'à indiquer le nombre de tentatives restantes. 

De plus, un utilisateur ne peut pas saisir deux fois la même lettre. 

1) L'ordinateur doit sélectionner un mot au hasard dans la liste des mots disponibles qui a se trouve dans le fichier suivant :   [mots.txt](https://gitlab.com/420-14b-fx/contenu/-/raw/main/bloc1/cours%2002/mots.txt?ref_type=heads&inline=false) 

Notez que mots.txt contient des mots **anglais** dont toutes les lettres sont en minuscules.

2) L'ordinateur indique au joueur le nombre de lettres constituant le mot (_).

3) L'ordinateur affiche les lettres trouvées dans le mot ainsi que les lettres utilisées et le nombre d'essais restant.


Vous pouvez réutiliser les fonctions de lectures et d'écritures du fichier **FonctionUtiles.cs** fournies dans l'exercice **Semaine 1 - Exercice 1 - Tâches à faire**.

Vous aurez besoin d'obtenir un nombre aléatoire afin de choir un mot au hasard. Voici un exemple pour obtenir un nombre aléatoire entre 0 et 10 :

```c#
Random aleatoire = new Random();

//Génère un entier aléatoire positif. La borne supérieure est exclue du résultat.
int entier = aleatoire.Next(0,11); 
```


1) Décomposer le problème global en plusieurs problèmes plus petits et plus faciles à résoudre.
2) Identifier les entités ainsi que leur caractéristiques et comportements
2) Identifier les variables en entrée et en sortie et les constantes qui seront nécesssaires
3) Idenifier les fonctions ainsi que leurs entrée et sortie.
4) Programmer la solution.


Voici un exemple du résultat attendu : 

```

Le mot à découvrir est : _ _ _ _ _ _ _

Lettres utilisées:
Nombre d'essais restant : 6

Veuillez saisir une lettre : i

-------------------------------------------------
Le mot à découvrir est : _ _ _ _ _ _ _

Lettres utilisées: i
Nombre d'essais restant : 5

Veuillez saisir une lettre : a

------------------------------------------------
Le mot à découvrir est : _ _ _ _ a _ _

Lettres utilisées: ia
Nombre d'essais restant : 5

Veuillez saisir une lettre :
```

### Solution de l'exercice 

 [S1E2-ResolutionProblemes-Solution.zip](https://gitlab.com/420-14b-fx/contenu/-/blob/main/bloc1/cours%2002/S1E2-ResolutionProblemes-Solution.zip?ref_type=heads)


:::



## Semaine 2

::: details S2E1 - Création de classe

### Objectifs 

- Utiliser la méthode de résolution de problèmes pour résoudre des problèmes.
- Compléter une classe Objet.
- Créer une application utilisant des objets.

### Problème 1 - Voiture

Une voiture possède les caractéristiques suivantes :
- Marque
- Modèle
- Couleur
- Année
- Kilométrage
- Vitesse

Peu importe le type de voiture, une voiture ne peut pas dépasser la vitesse de 200 km/h. Une voiture peut accélérer ou ralentir. Lors d'une accélération, la vitesse augmente de 5 km/h et diminue de cette même valeur lors d'un ralentissement. 

1) Vous devez écrire le code de la classe Voiture.  Celle-ci doit posséder les attributs spécifiés ci-dessus ainsi qu'un constructeur paramétré permettant de créer un objet en spécifiant les valeurs des attributs à l'exception de la vitesse qui est à 0 lors de la 
création. De plus, vous devez écrire le code des fonctions accélérer et ralentir.

2) Finalement, vous devez écrire un programme permettant de tester votre classe (création, modification des attributs, utilisation des fonctions):
    - Créer une voiture
    - Afficher la voiture    
    - La faire accélérer et l'afficher.
    - La faire relentir et l'afficher.
    - La faire accélérer jusqu'à la vitesse maximale et l'afficher.
    - La faire accélérer à nouveau et l'afficher.

###  Problème 2 - Restaurant

Un restaurateur vous demande de créer calculera automatiquement la facture d'un client.  L'application demandera le prix d'un apéritif, d'une entrée, d'un plat principal, d'un dessert et d'une bouteille de vin.  Si un des items n'a pas été pris, sa valeur sera à 0. À partir de ces valeurs, l'application doit calculer le sous-total de la facture du client.  À ce sous-total, elle ajoute un pourboire obligatoire de 15% et une taxe de consommation de 10% et affiche ce total.  Finalement, l'application doit également servir à calculer la monnaie à rendre au client.  Il demande le montant donné par le client et affiche la monnaie à lui rendre.

1)	Vous devez écrire le code de la classe Facture.  Celle-ci doit posséder les attributs spécifiés ci-dessus ainsi qu'un constructeur paramétré permettant de créer un objet en spécifiant les valeurs des attributs. De plus, vous devez écrire le code des fonctions suivantes :
    - CalculerSousTotal
    - CalculerPourboire
    - CalculerTaxe
    - CalculerTotal

Le taux du pourboire ainsi que le taux de la taxe doivent faire partie de la classe.

2)	Finalement, vous devez écrire un programme permettant de tester votre classe en créant une facture d'un client et en affichant la facture avec le prix de chaque item, le sous-total, montant des taxes et du pourboire ainsi que le total.


### Problème 3 - Jeu de dé
Vous devez concevoir une application qui va permettre de simuler une partie de dés entre deux joueurs.

1) Concevez la classe « Joueur » qui permet de représenter un joueur pour un jeu de dés à 6 faces (valeurs de 1 à 6, inclusivement).  Cette classe possède les attributs suivants :
    - Le nom du joueur.
    - Un tableau de 5 entiers représentant la valeur de 5 dés une fois qu’ils ont été lancés.
    - Nombre de manches gagnées.
    - Générateur de nombres aléatoire.

    Ajoutez un constructeur qui n’accepte que le nom du joueur ; cependant, ce constructeur doit créer le tableau d’entiers pour les dés et instancier le générateur de nombre aléatoire.  

    Ajoutez une fonction qui permet de faire lancer tous les dés que le joueur possède ; pour ce faire, il suffit de générer une valeur aléatoire entre 1 et 6 pour chaque dé. 

    Ajoutez une autre fonction qui permet d’obtenir pour chaque valeur possible de 1 à 6, le nombre de fois que cette valeur a été obtenue pour l’ensemble des dés ; cette méthode retourne un tableau d’entiers.  

2) Deuxièmement, écrivez un programme principal qui permettra de simuler une partie de dés entre deux joueurs dont les noms doivent être saisis dans la console.  Un joueur gagne la partie dès qu’il gagne 5 manches.  À chaque manche, on demande aux deux joueurs de lancer tous leurs dés et par la suite on détermine qui est le gagnant avec l’algorithme suivant :

    - Le joueur qui a obtenu le plus de fois la valeur 6 pour l’ensemble de ses dés gagne la manche.  Si les deux joueurs ont obtenu le même nombre de 6, on recommence avec la valeur 5 et ainsi de suite jusqu’à la valeur 1 si nécessaire.  En cas d’égalité pour toutes les valeurs, la manche est nulle.

Après chaque manche, on doit afficher le nom des joueurs et les valeurs de leurs dés ainsi que le nombre de manches gagnées par chaque joueur. 



### Solution de l'exercice 

 [S2E1-CreationClasse-Solution.zip](https://gitlab.com/420-14b-fx/contenu/-/tree/main/bloc1/cours%2003?ref_type=heads)

:::


::: details S2E2 - Encapsulation

### objectif

L'objectif de cet exercice est de mettre en pratique les nouvelles notions que vous venez d'apprendre ou d'approfondir en ce début de session (constructeurs, propriétés, méthodes paramétrées, types et conversions).  Pour ce faire, vous devez développer une **classe** appelée "**Creature**" ainsi qu'un nouveau type **Enum** (Assurez-vous d'avoir lu la section : [Type-Enum](https://420-14b-fx.gitlab.io/docs/enum.html)) appelé "**CreatureType**". 

Pour **tester** cette classe, vous devez concevoir un **programme principal** qui permettra de tester l'attaque, le vol et également si une créature est morte ou vivante. Pour ce faire, vous devez demander à l'utilisateur de choisir deux créatures et de simuler un combat. Les adversaires s'attaquent chacun leur tour tant qu'une des deux créatures n'est pas morte. La valeur d'une attaque est déterminée par un nombre aléatoire entre 1 et 15. Finalement, La créature qui gagne peut voler l'autre.

Vous devez indiquer pour chaque attaque qui est l'attaquant ainsi que les statistiques de chaque créature. Finalement vous devez afficher le gagnant ainsi que la nombre de pièces d'or qu'il a gagné.

Il est important de respecter les spécifications données ci-dessous et les [normes habituelles de programmation en C#](https://420-14b-fx.gitlab.io/docs/normes.html)  (entre autres, les majuscules et les minuscules).  De plus, vous devez respecter la  [convention de nommage](https://420-14b-fx.gitlab.io/docs/convention.html).

### Création du projet

- Créez un nouveau projet de type "Application Console".  Vous pouvez appeler votre projet "S2E2-CreaturesMythiques".

### Création de l'énumération (enum) appelée "CreatureType"

- Pour créer l'énumération, vous devez ajouter une nouvelle classe et par la suite remplacer le mot "class" par "enum".  Retirez aussi toutes les instructions "using".
- Le nom du fichier doit être "**CreatureType.cs**".
- Les valeurs de l'énumération sont :
    - Elfe
    - Gobelin
    - Zombie

###  Création de la classe "Creature"
- Créez une nouvelle classe appelée "Creature".


    **Attributs de la classe "Creature"**

    | Attribut          |      Type      |  
    | -------------     | :-----------: | 
    | **_type** (type de la créature)                                                                                       | CreatureType  |
    | **_vie** (nombre de points de vie)                                                                                    | sbyte         | 
    | **_armure** (nombre de points d'armure de la créature. Ne peut pas être négatif)                                      | byte          |
    | **_bourse** (nombre de pièces d'or que possède la créature, ne peut pas négatif, mais peut être plus grand que 255)   | ushort        |


    **Constructeurs de la classe "Creature"**
    - Premier constructeur : Avec **un seul paramètre** qui est le **type de la créature** à créer (CreatureType).
    - Deuxième constructeur : Avec **aucun paramètre** → par défaut, on **crée un Elfe** en appelant le constructeur précédent.
    - À noter qu'il n'y a pas de constructeur acceptant en paramètre tous les attributs car lors de la création d'une créature, on ne peut pas choisir soi-même la valeur des attributs vie, armure et bourse; on ne peut que choisir le type de créature (ou prendre le type par défaut).  Les valeurs des attributs vie, armure et bourse sont fixées en fonction du type de créature.
    - Toutes les créatures ont 10 pièces d'or lors de leur création (bourse = 10).
    - Une fois le type de créature connu, la vie et l'armure sont déterminés par le tableau suivant :

    | type de créature  |      Vie      | Armure        |
    | -------------     | :-----------: | :-----------: |
    | Elfe              | 12            | 8             |
    | Gobelin           | 15            | 5             |        
    | Zombie            | 8             | 7             |

    **Méthodes de la classe "Creature"**

    **bool EstVivante()**
        - Retourne un booléen indiquant si la créature est vivante (true = vivante, false = morte).
        - Une créature est morte si sa vie est plus petite ou égale à zéro sauf pour les zombies pour lesquels la vie doit être plus petite ou égale à -5.

    **bool EstMorte()**
    - Retourne un booléen indiquant si la créature est morte (true = morte, false = vivante).
    - Pensez à utiliser la méthode EstVivante() au lieu de recoder au complet (pas de redondance de code).

    **void SeFaireAttaquer(byte forceAttaque)**
    - Permet d'infliger (forceAttaque-armure) dommages (pas négatif) à la créature.  Les dommages infligés peuvent bien sûr être nuls.
    - Les gobelins sont plus résistants que les autres créatures; ainsi, les dommages infligés à un gobelin sont réduits de moitié arrondi vers le haut.  Par exemple : 5 dommages est réduit à 3 dommages car 5/2 = 2,5 qui donne 3 lorsqu'on arrondi vers le haut.
    - La vie doit être diminuée des dommages infligés.  Attention de ne pas soustraire des dommages négatifs et d'ainsi augmenter la vie.
    - Pour tous les types de créature sauf les zombies, la vie ne doit pas être négative.  La plus petite valeur permise est zéro; ce qui signifie que la créature est morte.  Pour les zombies, la vie peut descendre dans les négatifs autant qu'on le désire (même plus bas que -5).

    **ushort SeFaireVoler()**
    - Permet de tenter de voler des pièces d'or à une créature.  Le nombre de pièces volées est retourné.
    - Il est impossible de voler un Gobelin même s'il est mort.
    - Un elfe dont la vie est plus petite que 5 perd la moitié de sa bourse arrondie vers le bas.
    - Un elfe dont la vie est plus grande ou égale à 5 perd 3 pièces d'or (au maximum).
    - Un zombie dont la vie est négative ou à zéro (<=0) perd la totalité de sa bourse.
    - Un zombie dont la vie est plus grande que zéro, perd une pièce d'or seulement.

    **Méthodes de la classe "Programme"**
        
    **void AfficherCreature(Creature creature)**
    - Affiche le type de créature, sa vie, son armure et sa bourse.  Il faut aussi indiquer si la créature est vivante ou bien morte.

### Notes particulières

- Pensez à utiliser l'opérateur conditionnel ternaire pour les petites structures conditionnelles : 

    (condition ? valeur_si_vrai : valeur_si_faux)

- Pensez à utiliser l'instruction "**switch**" (même sur un type enum) au lieu de toujours utiliser des "if" imbriquées.
- Utilisez des **constantes publiques** pour représenter les différentes valeurs constantes soient celles pour la création des créatures (6), celle pour le nombre de pièce d'or (lors de la création d'une créature) et celle pour le type de créature par défaut (donc, 8 constantes au total).
- Créez des propriétés en **lecture publiques** et des propriétés en** écriture privés**.
- Assurez-vous de bien **respecter les types primitifs** qu'on vous demande d'utiliser pour les attributs et les méthodes.


### Solution de l'exercice 

 [S2E2-ExerciceEncapsulation.zip](https://gitlab.com/420-14b-fx/contenu/-/blob/main/bloc1/cours%2004/S2E2%20-%20ExercicesEncapsulation.zip?ref_type=heads)

:::

## Semaine 3 

::: details S3E1 - Relation entre classes

### Problème 1

Un professeur aimerait être en mesure d'utiliser une application lui permettant de saisir les étudiants faisant partie d'un cours qu'il donne et être en mesure de saisir pour chaque étudiant le résultat de leurs évaluations. Par la suite, il devrait être en mesure d'obtenir la moyenne du groupe pour une évaluation, la moyenne finale du groupe et finalement la moyenne et la note finale d'un étudiant.

Un cours est caractérisé par :

 - Un code (5 lettres en majuscule).
 - Un titre.
 - Un nombre de crédits (maximum 5).
 - Le nom et prénom du professeur qui donnne le cour.
 - Liste des étudiants inscrits. Il n'y a que 5 places disponibles dans un cours. Cependant, ce nombre pourrait varier.

Un étudiant est caractérisé par :
 - Un numéro de DA (7 chiffres), 
 - Un nom
 - Un prénom
 - une moyenne
 - Une note finale. 
 
 Durant la session, les étudiants auront 4 évaluations par défaut. Cependant, ce nombre pourrait varier. Chaque évaluation est sur un total de 100 points et chaque évaluation vaut pour 25 points de la note finale.

 1) Créer le diagramme de classes permettant de répondre au besoin du professeur.

Vous devez utiliser l'application draw.io pour créer votre diagramme :  [https://app.diagrams.net/](https://app.diagrams.net/)  et utiliser le [modèle](https://gitlab.com/420-14b-fx/contenu/-/raw/main/en_vrac/Bloc-notes.xml?ref_type=heads&inline=false)  de classe fourni par le professeur.

Une fois terminé, vous devez exporter le diagramme en format PDF.

2) Vous devez maintenant coder les différentes classes de l'application et écrire le code du programme vous permettant de tester :

- La création d'un cours.
- L'ajout d'étudiants inscrits à un cours.
- La saisie des évaluations pour chaque étudiant inscrit à un cours.
- Obtenir la moyenne du groupe pour une évaluation.
- Obtenir la moyenne finale du groupe.
- Obtenir la note finale d'un étudiant.
- Obtenir la moyenne d'un étudiant.

### Problème 2
Le professeur désire maintenant être en mesure d’utiliser votre application pour gérer plusieurs cours. Celui-ci désire donc être en mesure de créer plusieurs cours avec des étudiants et de conserver les informations de tous les cours. Il désire également être en mesure de rechercher un cours à partir de son code.

- Modifier le diagramme de classe créé précédemment afin de répondre au besoin.
- Modifier votre application afin de répondre au besoin.


### Solution
Télécharger la solution : [S3E1-ExerciceRelation.zip](https://gitlab.com/420-14b-fx/contenu/-/tree/main/bloc1/cours%2005?ref_type=heads)





:::


## Semaine 4
::: details S4E1 - Validation de formulaire

#### Objectifs
Mettre en pratique l'utilisation de la méthode ToStrin() et la validation des données saisies par l’utilisateur ainsi que les messages de rétroaction.

#### Problème

À partir de la solution de départ [ S4E1-ExerciceValidation-Départ](https://gitlab.com/420-14b-fx/contenu/-/tree/main/bloc1/cours%2007?ref_type=heads) vous devez :

1) Compléter les méthodes des classes Films.cs et GestionFilms.cs (voir commentaire todo: ).
2) Écrire le code de l'interface permettant :
    - D'initialiser le formulaire en effaçant le contenu des champs et en affichant la liste des films dans le ListBox. Un film dans la liste doit s'afficher de la manière suivante : Nom (année).
    - De réinitialiser le formulaire lorsque l’utilisateur clique sur le bouton « Nouveau ».
    - D’ajouter un film à la liste lorsque l’utilisateur clique sur le bouton « Ajouter »
    - De modifier un film sélectionné dans la liste lorsque l’utilisateur clique sur le bouton « modifier ». Si aucun film n’est sélectionné dans la liste, vous devez avertir l’utilisateur.
    - Quitter l’application 
3) Ajouter la validation pour la l'ajout et la modification d’un nouveau film sachant que : 
    - Tous les champs sont obligatoires.
    - Le titre du film doit contenir au moins 3 caractères.
    - L’année doit être comprise entre l'année 1500 et l’année courante (utiliser **DateTime.Now.Year** pour obtenir l'année courante). Assurez-vous que votre validation fonctionne si l'on change d’année sans devoir modifier votre code.

:::
