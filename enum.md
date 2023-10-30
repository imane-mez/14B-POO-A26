---
outline: deep
---

# Type Enum

En C #, un **Enum** (ou type énumération) est utilisé pour attribuer des noms de constante à un groupe de valeurs entières numériques. Il rend les valeurs des constantes plus lisibles, par exemple, **JourSemaine.Lundi** est plus lisible que le numéro **1** en se référant au jour dans une semaine.

Une énumération est définie à l'aide du mot-clé **Enum**, directement dans un espace de noms, une classe ou une structure. Tous les noms de constantes peuvent être déclarés entre les accolades et séparés par une virgule. 

## valeur par défaut
Voici un exemple d'une énumération de catégorie sans spécifier de valeur :

```c#
public enum Categories
{
    Livre,	    //0
    Film,		//1
    JeuxVideo,	//2
    Musique	    //3
}

```

Si aucune valeur n'est attribuée aux membres du enum, le compilateur attribuera des valeurs entières à chaque membre en commençant par zéro par défaut. Le premier membre d'un enum sera 0 et la valeur de chaque membre successif est augmentée de 1.

## valeurs spécifiées

Vous pouvez affecter différentes valeurs au membre enum. Une modification de la valeur par défaut d'un membre attribuera automatiquement des valeurs incrémentielles aux autres membres de manière séquentielle :

```c#
public enum Categories
{
    Livre,		    //0
    Film,			//1
    JeuxVideo = 5,	//5
    Musique		    //6
}
```
Il est également possible de spécifier une valeur pour chaque membre :

```c#
public enum Categories
{
    Livre = 2,		//2
    Film = 4,		//4
    JeuxVideo = 5,	//5
    Musique = 10	//10
}
```
Une énumération peut être de n'importe quel type de donnée numérique tel que **byte, sbyte, short, ushort, int, uint, long ou ulong**. Une énumération **ne peut pas être une chaîne de caractère**.

Vous pouvez spécifier le type de l'énumération :


```c#
enum Categories : byte
{
    Livre = 2,		//2
    Film = 4,		//4
    JeuxVideo = 5,	//5
    Musique = 10	//10
}
```

## Affichage d'un membre

```c#
Console.WriteLine($"Catégorie : {Categories.Film}"); 	

```

```
Catégorie : Film

```

## Affichage de la valeur d'un membre d'une énumération
```c#
byte categorie = (byte) Categories.Film
Console.WriteLine($"La valeur de Categorie.Film : {categorie}");

// ou
Console.WriteLine($"La valeur de Categorie.Film : {(byte) Categories.Film}");
```
```
La valeur de Categorie.Film : 4
```

## Affectation d'une énumération.

Comme n'importe quel autre type, un type enum peut être utiliser pour définir une variable. 
```c#
Categories categorie;
categorie = Categories.Film;
Console.WriteLine($"Catégorie : {categorie}");
```
```
Catégorie : Film
```

## Obtenir la liste des noms d'une énumération

```c#
//Obtenir la liste des noms du enum.
string[] vectCategories = Enum.GetNames(typeof(Categories));

for (int i = 0; i < vectCategories.Length; i++)
{
    Console.WriteLine($"{vectCategories[i]}");
}


```

## Vérifier si la valeur existe dans l'énumération

```c#
//Affectation d'une valeur d'énumération inexistant
Categories cat = (Categories)(20);

if (!Enum.IsDefined(typeof(Categories), cat))
    Console.WriteLine("La valeur de l'énumération n'est pas définie");

```


## Conversion d'une valeur numérique en énumération

```c#

Categories categorie;

//Conversion du valeur en enumération:
categorie = (Categorie)(0);  //catégorie sera égale à l'énumération dont la valeur est 0.


```


## Conversion d'une chaîne de caractère en numérique en énumération

```c#

Categories categorie;

//Conversion d'une châine de caractères en enumération:
categorie = (Categories)Enum.Parse(typeof(Categories),"Film")  //Film converti en énumération 


```



## Démo - Enum
Télécharger la démonstration complète : [S2C2 - DemoEnum.zip](https://gitlab.com/420-14b-fx/contenu/-/tree/main/bloc1/cours%2004?ref_type=heads)




