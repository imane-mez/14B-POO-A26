

# Le type DateTime

Le type DateTime en C# est une structure qui représente un instant précis dans le temps, incluant à la fois la date et l'heure. Il est très couramment utilisé pour manipuler des informations temporelles, comme l'enregistrement de la date et l'heure d'un événement, la gestion des calendriers, ou la mesure des durées

## Composantes du type DateTime
Un objet DateTime contient plusieurs composantes clés :

- Année, mois, jour : Représente la date.
- Heure, minute, seconde, milliseconde : Représente l'heure spécifique.
- Ticks : Le nombre de 100 nanosecondes écoulées depuis le 1er janvier 0001 à 00:00:00. Ce champ est utile pour les calculs temporels précis.
- Kind : Un indicateur qui spécifie si le temps est exprimé en temps universel (UTC), en temps local, ou s'il n'est pas spécifié (Unspecified).

Voici quelques exemples d'utilisation du type DateTime :

```c#

// Création de la date d'aujourd'hui.
DateTime aujourdhui = DateTime.Now;

// Création d'une date malheureusement célèbre (le temps est mis à zéro).
DateTime dateCelebre = new DateTime(2001, 09, 11);

// Création d'une date à partir d'une chaîne de caractères (le temps est mis à zéro).
String dateChaine = "2022-04-01";
DateTime dateParsee = DateTime.Parse(dateChaine);

// Affichage : Format long (date seulement): 2022-10-17
Console.WriteLine("Aujourd’hui (date au format court) : " + aujourdhui.ToShortDateString());

// Affichage : Format court (date seulement) : 1 avril 2022
Console.WriteLine("Poisson d'avril 2022 (date au format long) : " + dateParsee.ToLongDateString());

// Affichage : Format long (heure seulement) : 09:58:14
Console.WriteLine("Aujourd’hui (heure au format long) : " + aujourdhui.ToLongTimeString());

// Affichage : Format court (heure seulement) : 09:58
Console.WriteLine("Aujourd’hui (heure au format court) : " + aujourdhui.ToShortTimeString());

// Affichage : Format par défaut : 2022-10-17 09:58:14
Console.WriteLine("Aujourd’hui (format par défaut) : " + aujourdhui.ToString());

//Obtenir l'année : 2022
Console.WriteLine("L'année courante : " + aujourdhui.Year);

//Obtenir le mois: 10
Console.WriteLine("Le mois courant : " + aujourdhui.Month);

//Obtenir le jour : 17
Console.WriteLine("Le jour courant : " + aujourdhui.Day);

//Obtenir le jour : Monday
Console.WriteLine("Le jour de la semaine : " + aujourdhui.DayOfWeek);

//Obtenir la valeur du jour : 1
Console.WriteLine("Valeur de l'enum du jour de la semaine : " + (int) aujourdhui.DayOfWeek);

//Obtenir le jour de l'année : 290
Console.WriteLine("Le jour de l'année : " + (int)aujourdhui.DayOfYear);

//Ajouter une année
DateTime anneeProchaine = aujourdhui.AddYears(1);
Console.WriteLine("L'année prochaine  : " + anneeProchaine.ToShortDateString());

//Ajouter un mois
DateTime moisProchain = aujourdhui.AddMonths(1);
Console.WriteLine("Le mois prochain  : " + moisProchain.ToShortDateString());

//Aouter un jours
DateTime demain = aujourdhui.AddDays(1);
Console.WriteLine("Demain  : " + demain.ToShortDateString());

//Obtenir le nombre de jours entre deux dates
int nombreJours = moiProchain.Subtract(aujourdhui).Days;
Console.WriteLine($"Nombre de jours entre {moiProchain.ToShortDateString()} et {aujourdhui.ToShortDateString()} : {nombreJours} jours");

```

