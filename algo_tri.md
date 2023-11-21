# Trie des données

Il arrive régulièrement en programmation que nous ayons besoin de trier une liste de données. Il existe plusieurs algothritmes de tri : 

- Tri par Fusion (Merge Sort)
- Tri Rapide (Quick Sort)
- **Tri par Sélection (Selection Sort)**
- **Tri à Bulles (Bubble Sort)**
- etc.

Chacun ayant ses propres avantages et inconvénients en termes de performance et de facilité d'implémentation. 

Voici deux algorithme de tri qui sont facile à implémenté : 

##  Tri par Sélection (Selection Sort)

Le tri par sélection est une méthode simple mais inefficace pour les grandes listes. Voici comment cela fonctionne:

1) On recherche l'élément le plus petit (ou le plus grand, selon l'ordre de tri souhaité) de la liste.
2) On échange cet élément avec l'élément à la première position.
3) On répète ces étapes pour le reste de la liste (tous les éléments sauf le premier).

Voir la démonstration : [https://youtu.be/EdUWyka7kpI][https://youtu.be/EdUWyka7kpI]

**Avantages et Inconvénients:**
    - **Avantages**: Simple à comprendre et à implémenter. Le tri par sélection fait le minimum d'échanges nécessaires, soit exactement n−1 échanges dans tous les cas, où n est le nombre d'éléments dans la liste. 
    - **Inconvénients**: Pas très efficace en terme de rapidité O(n^2). Le tri par sélection n'est pas adaptable. Cela signifie qu'il effectue le même nombre d'opérations, indépendamment de la disposition initiale des données.

## Tri à Bulles (Bubble Sort)

Le tri à bulles est une autre méthode simple mais généralement peu efficace. Voici comment cela fonctionne :

1) On compare chaque paire d'éléments adjacents dans la liste et on les échange si elles sont dans le mauvais ordre.
2) On répète ce processus pour chaque élément de la liste jusqu'à ce que la liste soit triée.

Voir démonstration : [https://youtu.be/NiyEqLZmngY](https://youtu.be/NiyEqLZmngY)

**Avantages et Inconvénients:**
    - **Avantages**: Simple à comprendre et implémenter. Le tri à bulles est adaptable. Si les données sont déjà en grande partie triées, le tri à bulles peut détecter cela et réduire le nombre d'opérations. Par exemple, si le tableau est déjà trié, le tri à bulles peut le trier en O(n), ce qui est particulièrement utile pour les listes déjà ou presque triées.
    - **Inconvénients**: Pas très efficace en terme de rapidité O(n^2). Le tri à bulles peut effectuer un nombre beaucoup plus élevé d'échanges, et le nombre d'échanges varie selon la disposition initiale des données.


## La comparaison d'éléments

Pour être en mesure d'effectuer un tri, il est nécessaire de pouvoir comparer les éléments de la liste entre eux. 

La méthode **CompareTo** en C# est fréquemment utilisée pour comparer deux objets. Cette méthode est particulièrement utile lors de la mise en œuvre d’opérations telles que le tri ou la recherche dans des collections.

**CompareTo** est une méthode de l'interface **IComparable** en C#. Elle est utilisée pour comparer l'objet actuel avec un autre objet du même type.

### Fonctionnement 
- Si l'objet actuel est **supérieur** à l'objet passé en paramètre, **CompareTo** retourne un **entier positif**.
- Si l'objet actuel est **inférieur** à l'objet passé en paramètre, **CompareTo** retourne un **entier négatif**.
- Si les deux objets sont **égaux**, **CompareTo** retourne **zéro**.

**Exemple** 

```c#
int nombre1 = 10;
int nombre2 = 20;
int resultat = nombre1.CompareTo(nombre2);

```
Dans cet exemple, resultat sera un nombre négatif parce que nombre1 (10) est moins que nombre2 (20).

**Utilisation avec des chaînes de caractères:**


```c#
using System;
using System.Globalization;

class Program
{
    static void Main()
    {
        string str1 = "chaîne1";
        string str2 = "CHAÎNE1";
        
        int comparisonResult = String.Compare(str1, str2, 
            CultureInfo.InvariantCulture, 
            CompareOptions.IgnoreNonSpace | CompareOptions.IgnoreCase);
        
        if (comparisonResult == 0)
        {
            Console.WriteLine("Les chaînes sont équivalentes.");
        }
        else
        {
            Console.WriteLine("Les chaînes sont différentes.");
        }
    }
}

```

Ici, resultat sera un nombre positif car "Pomme" vient après "Banane" dans l'ordre alphabétique. Remarquez que ce cas-ic,  la méthode **string.ComparTo** prend différents paramètres.

- **CultureInfo.InvariantCulture** :

    Cela assure que la comparaison n'est pas affectée par la culture actuelle de l'exécution du thread, ce qui est essentiel pour éviter des comportements inattendus dans des environnements multilingues ou multiculturels.

- **IgnoreCase** :

    Cela permet de comparer les chaînes de caractères d'une manière qui est insensible à la casse, ce qui est souvent souhaitable pour assurer que les chaînes de caractères sont considérées comme égales même si elles diffèrent en casse.

- **IgnoreNonSpace** :

    Cela permet de comparer les chaînes de caractères en ignorant les différences qui ne sont pas liées aux caractères d'espacement, ce qui peut être utile pour assurer l'égalité des chaînes de caractères qui peuvent avoir des variations non significatives dans l'espacement ou d'autres caractères non espacés.

## Utilisation dans des classes personnalisées:

Si vous avez une classe personnalisée et que vous voulez la rendre comparable, vous pouvez implémenter l'interface **IComparable**. Par exemple :

```c#

public class Etudiant : IComparable<Etudiant>
{
    private string _nom;
    
    public string Nom 
    { 
        get{ return _nom; }
        set{ _nom = value;} 
    }

    private byte _age;

    public ushort Age 
    { 
        get{ return _age; }
        set{ _age_ = value;} 
    }

    public int CompareTo(Etudiant autre)
    {
        //Si l'objet comparer est null alors celui-ci vient avant l'objet courant.
        if(autre is null)
            return 1;       
            
        //Tri basé sur le nom
        return String.Compare(Nom, autre.Nom, 
            CultureInfo.InvariantCulture, 
            CompareOptions.IgnoreNonSpace | CompareOptions.IgnoreCase);
       
    }
}
```
Avec ce code, vous pouvez comparer deux étudiants basés sur leurs noms :

```c#
Etudiant etudiant1 = new Etudiant { Nom = "Alice", Age = 20 };
Etudiant etudiant2 = new Etudiant { Nom = "Bob", Age = 22 };

int resultat = etudiant1.CompareTo(etudiant2);
```

**Utilisation pratique:**

CompareTo est très utile pour trier des collections, par exemple, en utilisant la méthode **Sort** d'une **liste** ou d'un **tableau**. L'algorithme de tri utilisé par la méthode Sort est le tri Rapide (Quick Sort) qui est beaucoup plus performant que le tri par sélection (selection sort) ou le tri à bulle (bubble sort).

## Démonstration
Télécharger le fichier suivant pour la démonstration : [S9C2-DemoCompareTo](https://gitlab.com/420-14b-fx/contenu/-/blob/main/bloc2/cours%2018/S9C2-DemoCompareTo.zip?ref_type=heads)



## Exercice 1
::: tip S9E1 - Algorithmes de tri

### Objectif 
Mettre en pratique la surcharge des opérateurs et les différentes méthodes de tri.

### Problème 1
Implémenter une méthode nommée **int[] TriSelection(int[] pVecteur)**  qui reçoit en paramètre un tableau d’entier et le tri en ordre croissant (voir : https://www.youtube.com/watch?v=EdUWyka7kpI pour l’algorithme).

###  Problème 2

À partir de l'exercice S9E1, vous devez maintenant modifier le code de la classe Employe.cs afin de permettre le tri d’une liste d’employés selon les critères suivant :

1) Les employés sont triés en ordre de salaire décroissant.
2) Si deux employés ont le même salaire, alors ceux-ci sont triés en ordre croissant de nom.

Pour ce faire, vous devez implémenter la méthode CompareTo de l’interface **IComparable**.
Testez votre méthode appelant la méthode **Sort** de la liste d’employé avant son affichage dans le **listbox**. 

