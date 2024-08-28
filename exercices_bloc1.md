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

<!--
 **Solutions de l'exercice** : [S1E1 - Révision - Solution](https://gitlab.com/420-14b-fx/contenu/-/blob/main/bloc1/cours%2001/S1E1-Revision-Solution.zip?ref_type=heads)
-->
:::



::: details S1E2 - Résolution de problème

### Restaurant

Un restaurateur vous demande de créer une application console qui calculera automatiquement la facture d'un client.  L'application demandera le prix d'un apéritif, d'une entrée, d'un plat principal, d'un dessert et d'une bouteille de vin.  Si un des items n'a pas été pris, sa valeur sera à 0. À partir de ces valeurs, l'application doit calculer et afficher le sous-total de la facture du client.  À ce sous-total, elle ajoute un pourboire obligatoire de 15% et une taxe de consommation de 10% et affiche ce total.  Finalement, l'application doit également servir à calculer la monnaie à rendre au client.  Il demande le montant donné par le client et affiche la monnaie à lui rendre. Les factures créées devoient être conservée en mémoire (Vous n'avez pas à les enregistrer dans un fichier).

1) Décomposer le problème global en plusieurs problèmes plus petits et plus faciles à résoudre.
2) Identifier les entités ainsi que leur caractéristiques et comportements
2) Identifier les variables en entrée et en sortie et les constantes qui seront nécesssaires
3) Idenifier les fonctions ainsi que leurs entrée et sortie.
4) Programmer la solution.

### Jeu du pendu

Vous devez créer une application qui permettra à l'utilisateur de jouer au pendu contre l'ordinateur ( [https://fr.wikipedia.org/wiki/Le_Pendu_(jeu)](https://fr.wikipedia.org/wiki/Le_Pendu_(jeu))).


En bref, l'ordinateur choisit le mot et le joueur essaie de deviner les lettres dans le mot. Vous n'avez pas à dessiner le pendu vous n'avez qu'à indiquer le nombre de tentatives restantes. 

De plus, un utilisateur ne peut pas saisir deux fois la même lettre. 

L'ordinateur doit sélectionner un mot au hasard dans la liste des mots disponibles qui a se trouve dans le fichier suivant :   [mots.txt](https://gitlab.com/420-14b-fx/contenu/-/raw/main/bloc1/cours%2002/mots.txt?ref_type=heads&inline=false) 

et indique au joueur le nombre de lettres constituant le mot (_).

Notez que mots.txt contient des mots **anglais** dont toutes les lettres sont en minuscules.

Vous pouvez réutiliser les fonctions de lectures et d'écritures du fichier **FonctionUtiles.cs** fournies dans l'exercice **Semaine 1 - Exercice 1 - Tâches à faire**.

Vous aurez besoin d'obtenir un nombre aléatoire afin de choir un mot. Voici un exemple pour obtenir un nombre aléatoire entre 0 et 10 :
```C#
Random aleatoire = new Random();

//Génère un entier aléatoire positif. La borne supérieure est exclue du résultat.
int entier = aleatoire.Next(0,11); 

1) Décomposer le problème global en plusieurs problèmes plus petits et plus faciles à résoudre.
2) Identifier les entités ainsi que leur caractéristiques et comportements
2) Identifier les variables en entrée et en sortie et les constantes qui seront nécesssaires
3) Idenifier les fonctions ainsi que leurs entrée et sortie.
4) Programmer la solution.


```


Voici un exemple du résultat attendu : 

```tex
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



