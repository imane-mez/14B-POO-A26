# Type nullable

## Qu’est-ce qu’un type nullable ?

En C#, la plupart des types de base comme int, double ou bool sont des **types valeurs**.

Cela veut dire qu’ils doivent **toujours contenir une valeur**.

Exemple :

```c#

int x = 0;    // correct
int y = null; // ERREUR, impossible !

```

Mais parfois, on veut représenter une information **qui peut être absente** (par exemple un champ optionnel dans une base de données, ou une valeur qu’on n’a pas encore calculée).
C’est là qu’entrent en jeu les **types nullables**.

## Syntaxe

On utilise `?` après le type pour indiquer qu’il peut aussi contenir `null` :

```c#
int? age = null; // ok
age = 25;        // ok aussi

```

Ici, **age** peut être soit un entier (`int`), soit la valeur `null`.


**À ne pas confondre avec string** : une string peut déjà être null naturellement, car c’est un **type référence** (nous verrons ce qu'est un type références un peu plus tard). Les nullables concernent surtout les **types valeurs** (int, double, bool, DateTime, etc.).

## Utilisé des types nullables
1) **Représenter une donnée optionnelle**

Exemple : une personne peut avoir ou non une date de décès.

```c#
DateTime? dateDeDeces = null;

```

2) **Travailler avec les bases de données**
Dans une table SQL, une colonne peut être NULL. En C#, il faut pouvoir le représenter :

```c#
int? noteExam = null; // l’étudiant n’a pas encore passé l’examen
```

3) **Différencier “zéro” et “inconnu”**

    - 0 = la valeur existe et vaut zéro.
    - null = la valeur est absente.
    
    Exemple concret : un salaire de 0 n’a pas le même sens qu’un salaire non renseigné.

## Vérifier et utiliser un nullable

Quand on lit un nullable, il faut vérifier s’il contient une valeur :

```c#
int? age = null;

if (age.HasValue) {
    Console.WriteLine("L'âge est age" + age);
} else {
    Console.WriteLine("Âge inconnu");
}

```

Autre façon plus courte avec l’opérateur **null-coalescing** (??) :

```c#
int? age = null;
int ageAffiche = age ?? -1; // si age est null, alors on affecte -1
Console.WriteLine(ageAffiche);
```