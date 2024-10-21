---
outline: deep
---

# Les listes génériques (List)

- Les listes sont des collections très utiles pour toute application de gestion où l'on doit effectuer les opérations CRUD (Create, Read, Update, Delete) sur les données : Créer, lire, mettre à jour et supprimer les données.  Elles permettent d'effectuer ces opérations à l'aide de méthodes simples d'utilisation et sans se soucier des détails d’implémentation.

- En C#, on utilise la liste générique implémentée à l’aide de la classe « **List** ».

- On peut placer n'importe quel type de contenu à l'intérieur d'une liste générique (types primitifs, énumérations et objets).  Toutefois, il faudra spécifier le type de contenu désiré à la création de la liste; le type étant spécifié entre chevrons « \<type\> ».

- La liste générique est implémentée à l'aide d'un vecteur qui est automatiquement redimensionné (de plusieurs cases à la fois) lorsque cela devient nécessaire (suite à un manque d'espace pour l'ajout d'un nouvel élément dans la liste).  Cette gestion automatique simplifie beaucoup le travail du programmeur qui peut se concentrer sur les éléments de plus haut niveau de son application.

## Synthaxe et méthodes

### Espace de nom

Pour utiliser les listes génériques, vous devez importer l'espace de nom suivant :

```c#
using System.Collections.Generic;
```

### Déclaration et instanciation

Voici comment déclarer et initaliser une liste générique. 

    List<Type> maListe = new List<Type>();

**Type** doit être remplacé par le type d'objets utilisés dans la liste (int, string, Personne, etc.).

Voici un exemple de création d'une liste contenat des objets Personne :

```c#
List<Personne> listePersonnes = new List<Personne>(); 
```

### Accéder à un élément de la liste

Pour accéder à un élément de la liste il est possible d'utilisation la notation **[]** comme pour un vecteur.

```c#
Personne p = listePersonnes[0]; //Accède au 1er élément de la liste.
```

### Méthodes

- **void Add(Type elem)** : Ajoute l'élément "**elem**" à la fin de la liste.  

```c#
List<Personne> listePersonnes = new List<Personne>();

listePersonnes.Add(new Personne("Martin"));

```

- **void AddRange(Type[] elems)** : Permet l’ajout de tous les éléments contenus dans le vecteur "**elems**" à la liste.


```c#
List<Personne> listePersonnes = new List<Personne>();

Personne[] vectPersonnes = new Personne[]{new Personne("Martin"), new Personne("Jean-Philippe")};

listePersonnes.AddRange(vectPersonnes);

```

- **void Insert(int index, Type elem)** : Insère l'élément "**elem**" à la position "**index**" dans la liste.  Les éléments existants sont déplacés pour libérer l'espace pour le nouvel élément.


```c#
List<Personne> listePersonnes = new List<Personne>();

Personne[] vectPersonnes = new Personne[]{new Personne("Martin"), new Personne("Jean-Philippe")};

listePersonnes.AddRange(vectPersonnes);

listePersonnes.Insert(1,new Personne("Laurent"));

```

- **bool Remove(Type elem)** : Supprime la première occurrence de l'élément "**elem**" de la liste.  Retourne un booléen indiquant si l’élément a été effectivement retiré.  Les éléments existants sont déplacés pour réutiliser l'espace libéré par l’élément retiré.



```c#
List<Personne> listePersonnes = new List<Personne>();

Personne p = new Personne("Martin") ;

listePersonnes.Add(p);

bool succes = listePersonnes.Remove(p);

if(succes)
    Console.WriteLine("Élément supprimé de la liste".);

```

- **void RemoveAt(int index)** : Supprime l'élément à l'indice "index" de la liste.

```c#
List<Personne> listePersonnes = new List<Personne>();

Personne[] vectPersonnes = new Personne[]{new Personne("Martin"), new Personne("Jean-Philippe")};

listePersonnes.AddRange(vectPersonnes);

listePersonnes.RemoveAt(1); //Supprime l'élément à la position 1

```

- **bool Contains(Type elem)** : Détermine si un élément est contenu dans de la liste.

```c#
List<Personne> listePersonnes = new List<Personne>();

Personne p = new Personne("Martin") ;

listePersonnes.Add(p);

bool succes = listePersonnes.Contains(p);

if(succes)
    Console.WriteLine("L'élément existe dans la liste".);

```

- **int IndexOf(Type elem)** : Retourne l’indice de l’élément dans la liste; -1 si l’élément n’est pas présent.


```c#
List<Personne> listePersonnes = new List<Personne>();

Personne p1 = new Personne("Martin") ;
Personne p2 = new Personne("Martin") ;

listePersonnes.Add(p1);
listePersonnes.Add(p2);

int position = listePersonnes.IndexOf(p);

if(position != -1)
    Console.WriteLine($"L'élément se trouve à la position {position} dans la liste".);
else
    Console.WriteLine("L'élément n'existe pas dans la liste".);
```

- **void Clear()** : Supprime tous les éléments de la liste.


```c#
List<Personne> listePersonnes = new List<Personne>();

Personne[] vectPersonnes = new Personne[]{new Personne("Martin"), new Personne("Jean-Philippe")};

listePersonnes.AddRange(vectPersonnes);

listePersonnes.Clear(); //vide la liste

```

- **void Reverse()** : Inverse l’ordre des éléments dans de la liste.


```c#
List<Personne> listePersonnes = new List<Personne>();

Personne[] vectPersonnes = new Personne[]{new Personne("Martin"), new Personne("Jean-Philippe")};

listePersonnes.AddRange(vectPersonnes);

listePersonnes.Reverse();

Console.WriteLine($"Premier élément de liste : {listePersonnes[0].Nom}");

```
Console
```cmd

Premier élément de liste : Jean-Philippe

```

### Propriétés 


- **Count** : Indique le nombre d'éléments réellement contenus dans la liste.

### Parcourir une liste

- **for** : Il est possible de parcourir la liste avec un for (normal) en gérant l’indice de l’élément de la manière usuelle.

```c#
List<Personne> listePersonnes = new List<Personne>();

Personne[] vectPersonnes = new Personne[]{new Personne("Martin"), new Personne("Jean-Philippe")};

listePersonnes.AddRange(vectPersonnes);

for(int i = 0; i < listePersonne.Count; i ++>){
    Console.WriteLine(listePersonne[i].Nom);
}

```
Console
```cmd
Martin
Jean-Philippe

```

- **foreach** : Il est possible de parcourir la liste avec un foreach si on n’a pas besoin de l’indice de l’élément (**à privilégier**).  

```c#
List<Personne> listePersonnes = new List<Personne>();

Personne[] vectPersonnes = new Personne[]{new Personne("Martin"), new Personne("Jean-Philippe")};


listePersonnes.AddRange(vectPersonnes);

foreach(Peronne p in listePersonnes){
    Console.WriteLine(p.Nom);
}

```

## for vs. foreach

Lorsqu'il s'agit de parcourir une générique en C#, le choix entre foreach et for dépend de plusieurs facteurs, notamment de vos besoins spécifiques et du contexte de votre application. Voici quelques points à considérer :

**Simplicité et Lisibilité**

foreach est généralement plus simple à lire et à écrire, surtout si vous avez simplement besoin d'accéder à chaque élément de la liste sans vous soucier de son index.


**Performance**

Pour les listes très grandes, for peut être légèrement plus rapide, car il n'y a pas de surcoût lié à l'obtention de l'itérateur (comme c'est le cas avec foreach).

**Modification pendant l'itération**

Si vous devez modifier la liste (ajouter, supprimer des éléments) pendant que vous la parcourez, for est souvent un meilleur choix. Avec foreach, modifier la collection pendant son itération peut provoquer une `InvalidOperationException`.
for vous permet de gérer l'index actuel et d'ajuster la boucle en conséquence.

**Accès aux Indices**

Si vous avez besoin de l'index de l'élément pendant l'itération, for est la voie à suivre.
foreach ne fournit pas directement l'index de l'élément en cours.






