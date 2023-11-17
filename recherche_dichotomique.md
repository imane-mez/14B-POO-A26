---
outline: deep
---
# La recherche dichotomique

La recherche dichotomique est une manière efficace et rapide de rechercher un élément dans une structure de données **triée** (pour nous, ce sera un vecteur trié).

En effet, jusqu'à maintenant vous aviez peut-être l'habitude de parcourir un tableau du début jusqu'à ce que vous trouviez la valeur, et parfois jusqu'à la dernière case du vecteur. Cette méthode est une recherche séquentielle, facile à écrire et à mettre en œuvre, mais est efficace en matière de temps d'exécution que si le vecteur parcouru est très petit.

## Fonctionnement

- On dispose d’un tableau trié de valeur, et nous cherchons à déterminer si la valeur est présente dans le vecteur.

- Pour cela, nous procédons par dichotomie :
    - Nous regardons l’élément qui se trouve au milieu du vecteur et nous le comparons avec la valeur recherchée.
        - S’ils sont égaux alors nous avons trouvé la valeur. 
        - Si la valeur est inférieure, alors nous poursuivons la recherche dans la première moitié du vecteur.
        - Si la valeur est supérieure, alors nous poursuivons la recherche dans la deuxième moitié du vecteur.

- On exécute l’étape précédente tant que nous n’avons pas trouvé la valeur ou qu’il n’y a plus aucun élément dans le vecteur.

Voici un exemple :
![Valeur recherchée](/images/recherche_dicho1.png)


**Première recherche**
![Comparaison milieu](/images/recherche_dicho2.png)


**Deuxième recherche**
![Comparaison moitié de droite](/images/recherche_dicho3.png)


**Troisième recherche**
![valeur trouvée](/images/recherche_dicho4.png)


### Démonstration
Téléchargez la solution : [S14C1-ExempleOptimisationRechDicho](https://gitlab.com/420-14b-fx/contenu/-/blob/main/bloc3/cours%2027/S14C1-ExempleOptimisationRechDicho.zip)

:::