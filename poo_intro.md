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
/// <summary>
/// Classe représentant un rectangle
/// </summary>
public class Rectangle
{
    public float hauteur;
    public float largeur;
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
	{nom_Objet}.{attribut_a_modifier} = uneValeur


Par exemple, on peut affecter les valeurs suivantes à notre rectangle rect1 mentionné précédemment :

```c#
Rectangle rect1 = new Rectangle();

rect1.hauteur = 10;
rect1.largeur = 20;
rect1.couleur = "Rouge";

```

Pour lire les valeurs d'un objet, on utilise la même synthaxe : 

```c#
Console.WriteLine($"Couleur de rect1" : {rect1.couleur});

```

## Les méthodes avec des objets

On peut également créer des méthodes sur les objets qui permettront de décrire le comportement d'un objet face à une instruction demandée. Par exemple, on pourrait créer une méthode qui nous permettrait de calculer le périmètre d'un rectangle. Celle-ci nous permettra de travailler de façon plus générique. Nous n'aurons plus besoin de faire le calcul à chaque fois que nous avons besoin d'obtenir cette information, c'est la méthode de calcul propre à notre objet qui s'en occupera.

On définit les méthodes d'objet de la même façon que les fonctions que nous avons créées jusqu'à maintenant.


```c#
/// <summary>
/// Classe représentant un rectangle
/// </summary>
public class Rectangle
{
    public float hauteur;
    public float largeur;
    public string couleur;		

    public float CalculerPerimetre()              // [!code focus]
    {                                           // [!code focus]
        return (hauteur * 2) + (largeur * 2);   // [!code focus]
    }                                           // [!code focus]

}

```
Ensuite, pour l'utiliser, nous utiliserons la même technique que pour les attributs:

	{nom_Objet}.{méthode_a_utiliser}

```c#
Rectangle rect1 = new Rectangle();

rect1.hauteur = 10;
rect1.largeur = 20;
rect1.couleur = "Rouge";

Console.WriteLine("Le périmètre de rect1 est : " + rect1.CalculerPerimetre()); // [!code focus]
```
Nous n'avons plus besoin d'écrire la formule pour calculer le périmètre d'un rectangle puisque la **CalculerPerimetre** s'en occupe!

### Exemple de classe

```c#
/// <summary>
/// Classe représentant un rectangle
/// </summary>
class Rectangle
{   
    /// <summary>
    /// Hauteur en cm du rectangle
    /// </summary>
    public float hauteur;

    /// <summary>
    /// Largeur en cm du rectangle
    /// </summary>
    public float largeur;

    /// <summary>
    /// Couleur du rectangle
    /// </summary>
    public string couleur;

    /// <summary>
    /// Calcul le périmètre d'un rectangle à partir de sa hauteur et sa largeur.
    /// </summary>
    /// <returns>Périmètre du rectangle</returns>
    public float CalculerPerimetre()
    {
        return (hauteur * 2) + (largeur * 2);
    }
}
```

::: danger Attention!
Vous devez toujours bien commenter la classe, ses attributs ainsi que ses méthodes de la classe!

:::

## Les Constructeurs

Les constructeurs **ne sont pas des méthodes**, mais leur traitement est relativement semblable.  Ils portent le **même nom que la classe** à laquelle ils appartiennent. Ils sont automatiquement exécutés lors de la création d'un objet. 


Dans la section **"Instancier un objet"** nous avons dit que pour créer un objet, on utilisait la syntaxe suivante (pour un objet de type Rectangle):

```c#
Rectangle rect1 = new Rectangle();
```
Ce qui revient à créer un objet rect1, de type Rectangle. On utilise le mot **new** pour spécifier que l'on veut un nouvel objet.  Mais pourquoi réécrit-on le mot Rectangle() ensuite?  Il s'agit en fait ici de spécifier quel est le constructeur de l'objet, c'est-à-dire de spécifier comment l'objet sera créé ou quelle est la méthode constructrice de la classe, utilisée pour créer l’objet. 

Jusqu'à maintenant, nous avons utilisé le **constructeur par défaut**, car nous n'avons pas défini nous-mêmes le constructeur de la classe Rectangle. De cette façon, comme nous l'avons dit auparavant, l'objet est initialisé aux valeurs par défaut prévu dans le langage C#.

Pour spécifier les valeurs que doit prendre l'objet lors de sa création, on doit alors définir notre propre constructeur. Nous aurons donc à définir celui-ci un peu comme une méthode en nous rappelant bien que le constructeur doit porter le **même nom que la classe** (en n’oubliant pas que le C# tient compte des minuscules et des majuscules!).

Pour la classe Rectangle, nous pourrions alors avoir le constructeurn suivant :

```c#
/// <summary>
/// Classe représentant un rectangle
/// </summary>
class Rectangle
{   
    /// <summary>
    /// Hauteur en cm du rectangle
    /// </summary>
    public float hauteur;

    /// <summary>
    /// Largeur en cm du rectangle
    /// </summary>
    public float largeur;

    /// <summary>
    /// Couleur du rectangle
    /// </summary>
    public string couleur;

    /// <summary>
    /// Constructeur par défaut
    /// </summary>
    public Rectangle() // [!code focus]
    {   // [!code focus]
            hauteur = 1;    // [!code focus]
            largeur = 2;    // [!code focus]
            couleur = "Blanc";  // [!code focus]
    } // [!code focus]

    /// <summary>
    /// Calcul le périmètre d'un rectangle à partir de sa hauteur et sa largeur.
    /// </summary>
    /// <returns>Périmètre du rectangle</returns>
    public float CalculerPerimetre()
    {
        return (hauteur * 2) + (largeur * 2);
    }
}
```

Il sera alors possible de créer des objets de type Rectangle ayant comme valeurs d'attibuts celle spécifiées dans notre propre constructeur. Ainsi, lorsque nous désirons créer un objet, nous utilisons la même syntaxe qu'auparavant:

```c#
Rectangle rect1 = new Rectangle();
```

Ici, on se trouve donc à créer un objet pour lequel on a spécifié nos propres valeurs initiales. 

Le problème, c'est qu'ensuite on doit spécifier les valeurs propres à cet objet pour qu'il contienne l'information qui lui est propre:


```c#
rect1.hauteur = 10;
rect1.largeur = 20;
rect1.couleur = "Rouge";
```
Et on doit faire de même pour chaque objet!!! C'est un peu long! Évidemment, il y a un moyen pour effectuer les deux opérations (création et affectation des valeurs à l'objet) en même temps. Il faut tout simplement se rappeler que le constructeur est comme une méthode et qu'on peut passer des paramètres à une méthode. On peut donc faire la même chose avec le constructeur! Voici comment on pourrait le faire pour la classe Rectangle:



```c#
/// <summary>
/// Classe représentant un rectangle
/// </summary>
class Rectangle
{   
    /// <summary>
    /// Hauteur en cm du rectangle
    /// </summary>
    public float hauteur;

    /// <summary>
    /// Largeur en cm du rectangle
    /// </summary>
    public float largeur;

    /// <summary>
    /// Couleur du rectangle
    /// </summary>
    public string couleur;



    public Rectangle(float hauteur, float largeur, string couleur)// [!code focus]
    {// [!code focus]
            this.hauteur = hauteur;// [!code focus]
            this.largeur = largeur;// [!code focus]
            this.couleur = couleur;// [!code focus]
    }// [!code focus]


    /// <summary>
    /// Calcul le périmètre d'un rectangle à partir de sa hauteur et sa largeur.
    /// </summary>
    /// <returns>Périmètre du rectangle</returns>
    public float CalculerPerimetre()
    {
        return (hauteur * 2) + (largeur * 2);
    }
}
```

Vous remarquerez que le nom des paramètres du constructeur sont identiques à ceux des attributs de la classe. C'est pour cette raison que nous devons utiliser le mot clé **this.** Celui-ci fait référence à **l'instance de la classe**. Il nous permet donc d'affecter la valeur d'un paramètre du constructeur à son attribut correspondant. 

Maintenant, nous pourrons créer des objets Rectangle en leur passant en paramètre les valeurs initiales qui leur sont propres, ce qui est beaucoup plus efficace que de créer un objet par défaut et ensuite affecter ses attributs…

Pour utiliser le constructeur, on utilise la syntaxe suivante:

```c#
Rectangle rect1 = new Voiture(10,20,"Rouge");
```



### Exemple de classe avec constructeur

```c#
/// <summary>
/// Classe représentant un rectangle
/// </summary>
class Rectangle
{   
    /// <summary>
    /// Hauteur en cm du rectangle
    /// </summary>
    public float hauteur;

    /// <summary>
    /// Largeur en cm du rectangle
    /// </summary>
    public float largeur;

    /// <summary>
    /// Couleur du rectangle
    /// </summary>
    public string couleur;


    /// <summary>
    /// Constructeur paramétré d'un rectangle
    /// </summary>
    /// <param name="hauteur">Hauteur en cm du rectangle</param>
    /// <param name="largeur">Largeur en cm du rectangle</param>
    /// <param name="couleur">Couleur en cm du rectangle</param>
    public Rectangle(float hauteur, float largeur, string couleur)
    {
        this.hauteur = hauteur;
        this.largeur = largeur;
        this.couleur = couleur;
    }

    /// <summary>
    /// Calcul le périmètre d'un rectangle à partir de sa hauteur et sa largeur.
    /// </summary>
    /// <returns>Périmètre du rectangle</returns>
    public float CalculerPerimetre()
    {
        return (hauteur * 2) + (largeur * 2);
    }
}
```
::: danger Attention! 

Vous devez toujours bien commenter la **classe**,  ses **attributs**, ses **constructeurs** ainsi que ses **méthodes**!

:::

