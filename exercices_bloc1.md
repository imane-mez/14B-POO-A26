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

<!--
### Solution de l'exercice 

 [S1E2-ResolutionProblemes-Solution.zip](https://gitlab.com/420-14b-fx/contenu/-/blob/main/bloc1/cours%2002/S1E2-ResolutionProblemes-Solution.zip?ref_type=heads)

 -->
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
    - La faire relentir et l'afficher.
    - La faire accélérer et l'afficher.
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


<!--
### Solution de l'exercice 

 [S2E1-CreationClasse-Solution.zip](https://gitlab.com/420-14b-fx/contenu/-/tree/main/bloc1/cours%2003?ref_type=heads)
-->
:::
