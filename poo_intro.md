---
outline: deep
---
# La programmation orientée objet

Jusqu'à présent, vous avez appris à programmer des procédures logiques, séquentielles qui récupéraient des données en entrée, les traitaient puis produisaient des données en sortie. Vous avez également appris qu'il existait un type de donnée nommé "Struct" qui permettait pour une seule variable d'avoir plusieurs valeurs/types différents. 

Vous avez probablement remarqué que j’ai utilisé de temps en temps le mot « objet » et que le mot clé « new » est apparu comme par magie, sans trop savoir son pourquoi. Voici maintenant l'explication 😊.

La programmation orientée objet est un modèle de langage qui s'articule autour des objets. On peut voir un objet comme les objets qui nous encourent dans notre quotidien. Ceux-ci sont très divers : des personnes (définies par leurs nom, adresse, etc.), des voitures (définies par leurs puissances, la taille, la consommation, etc.), des livres, des cellulaires, des bâtiments, des recettes, etc.

Ces objets ont des caractéristiques appelées **attributs** (Ex. : nom, taille, couleur, poids, etc.) et peuvent faire des actions appelées **méthodes** (Ex. afficher, lire, accélérer, ralentir, appeler, rechercher, etc.) et peuvent également interagir entre eux (Ex. l'objet personne appelle avec l'objet téléphone).

La définition d'un objet permet d'indiquer quels sont ses attributs et ses méthodes. Une fois l'objet défini, il est alors possible de l'utiliser. Par exemple, si vous avez un système de gestion de voitures, il serait intéressant de pouvoir créer différentes voitures on parle alors de plusieurs **instances d'un objet** de type voiture.

Il y a plusieurs avantages à utiliser une approche orientée objet dont :
- **La modularité** : Les objets forment des modules compacts regroupant des données et un ensemble d'opérations.
- **L'abstraction**: Les entités objets sont proches de celles du monde réel. Les concepts utilisés sont donc proches des abstractions familières que nous exploitons.
- **La productivité**: Les objets peuvent être réutilisés à travers différents programmes.
- **Sécurité** : Il est possible de restreindre l'accès à certains attributs et méthodes des objets.


## Classe

Pour définir un type d’objet, on doit créer une classe. Une classe est comme un modèle ou un plan pour créer des objets. Elle définit les attributs et les méthodes que les objets créés à partir de cette classe auront. 

```c#
public class Rectangle
{
    public uint hauteur;
    public uint largeur;
    public string couleur;		
}

```

## Instancier un objet
Maintenant que la classe a été créée, on doit pouvoir utiliser des objets de type Rectangle, mais pour les utiliser, on doit d’abord les instancier (i.e. les créer).  Pour ce faire, on utilise le mot réservé : **new **

```c#
Rectangle rect1 = new Rectangle();
```
Ici, on crée un objet rect1 qui sera de type Rectangle.  À ce moment, on a affecté aucune valeur à notre objet ; il existe, mais avec les valeurs par défaut : 

- hauteur = 0
- largeur = 0
- couleur = Null

## Consulter et modifier la valeur d'un attribut

Pour donner des valeurs à chacun des attributs de notre objet, on doit indiquer deux choses :
- le nom de l’objet que l’on veut modifier
- l’attribut à modifier

La syntaxe à utiliser est la suivante :
	{nom_Objet}**.**{attribut_a_modifier} = uneValeur


Par exemple, on peut affecter les valeurs suivantes à notre rectangle rect1 mentionné précédemment :

```c#
rect1.hauteur = 10;
rect1.largeur = 20;
rect1.couleur = "Rouge";

```
