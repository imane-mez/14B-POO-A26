---
outline: deep
---


# Le type DateOnly

Le type `DateOnly` en C# est une structure introduite dans .NET 6 qui permet de représenter uniquement une date (année, mois, jour) sans l'heure. Cela peut être utile lorsque vous souhaitez manipuler ou stocker des dates sans vous soucier du temps, comme pour les dates de naissance, les anniversaires, ou les dates d'événements.

Voici quelques exemples pour illustrer son utilisation :

## Créer une instance de DateOnly

Vous pouvez créer une date spécifique en utilisant son constructeur ou en appelant des méthodes statiques :

``` c#
// Créer une date pour le 25 décembre 2024
DateOnly date1 = new DateOnly(2024, 12, 25);

// Créer la date d'aujourd'hui
DateOnly today = DateOnly.FromDateTime(DateTime.Now);

Console.WriteLine(date1);  // Affiche "25/12/2024"
Console.WriteLine(today);  // Affiche la date actuelle sans l'heure
```

## Manipuler des dates

DateOnly offre des méthodes pour manipuler les dates, comme ajouter ou soustraire des jours, des mois, ou des années.

``` c#
DateOnly noel = new DateOnly(2024, 12, 25);

// Ajouter 7 jours à la date de Noël
DateOnly jourDeAn = noel.AddDays(7);

Console.WriteLine(jourDeAn);  // Affiche "01/01/2025"

// Soustraire 1 mois
DateOnly novembre = noel.AddMonths(-1);

Console.WriteLine(novembre);  // Affiche "25/11/2024"
``` 

## Comparer des dates

Vous pouvez comparer des instances de DateOnly en utilisant les opérateurs de comparaison classiques :

``` c#
DateOnly date1 = new DateOnly(2024, 12, 25);
DateOnly date2 = new DateOnly(2023, 12, 25);

if (date1 > date2)
{
    Console.WriteLine("date1 est après date2");  // Affichera ceci
}

if (date1 == new DateOnly(2024, 12, 25))
{
    Console.WriteLine("Les dates sont identiques");  // Affichera ceci
}
```

# Conversion en chaîne de caractères et parsing


DateOnly date = new DateOnly(2024, 12, 25);

``` c#
// Convertir en chaîne de caractères
string dateChaine = date.ToString("yyyy-MM-dd");

Console.WriteLine(dateChaine);  // Affiche "2024-12-25"

// Parser une chaîne de caractères en DateOnly
DateOnly date = DateOnly.Parse("2024-12-25");

Console.WriteLine(date);  // Affiche "25/12/2024"
```
`DateOnly` est utile pour les scénarios où le temps n'a pas d'importance. Il est simple à utiliser et permet de gérer efficacement les dates sans se préoccuper des complications liées aux heures et aux fuseaux horaires.

