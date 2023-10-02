

# Les type DateTime et TimeSpan en C#

Les applications .NET peuvent utiliser des informations de date et d’heure de plusieurs façons. Les utilisations les plus courantes des informations de date et d’heure sont les suivantes :

- Pour refléter seulement une date, les informations d'heure n'étant pas importantes.
- Pour refléter seulement une heure, les informations de date n'étant pas importantes.
- Pour refléter une date et une heure abstraites, qui ne sont pas liées à un moment et un endroit spécifique (par exemple, la plupart des magasins d'une chaîne internationale ouvrent en semaine à 9h00).

## Le type DateTime

Une valeur DateTime définit une date/heure spécifique. Ce type est utile lorsque vous devez :

- Utiliser seulement une date.
- Utiliser seulement une heure.
- Utiliser une date et une heure abstraite.
- Utiliser une date et une heure dont le fuseau horaire est important.
- Utiliser une date et une heure UTC.

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


```

## Le type TimeSpan

La structure TimeSpan représente un **intervalle de temps**. Ses deux utilisations courantes sont :

- Refléter un intervalle de temps entre deux valeurs de date/heure. Par exemple, la **soustraction d'une valeur DateTime** d'une autre retourne une valeur **TimeSpan**.
- Une durée en jours, heures, minutes ou secondes.
- Mesurer un temps écoulé.

Par exemple, la structure TimeSpan peut être utilisée pour refléter les heures d'ouverture ou de fermeture quotidiennes d'un magasin, ou elle peut être utilisée pour représenter l'heure où se produit un événement régulier, où indique la durée d'une pièce musicale.

Voici quelques exemples d'utilisation d'un type TimeSpan :

```c#
// Représente une durée : 3 jours, 8 heures et 30 minutes (0 seconde et 0 milisecondes).
TimeSpan dureeFestivites = new TimeSpan(3, 8, 30, 0, 0);

//Nombre de jours dans la durée des festivités :3
Console.WriteLine("Nombre de jours contenues dans la durée des festivités : " + dureeFestivites.Days);


//Durée total en jours des festivités :  3,35416666666667
Console.WriteLine("Durée en jours (total) des festivités : " + dureeFestivites.TotalDays);

//Nombre d'heures dans la durée des festivités : 8
Console.WriteLine("Nombre d'heures contenues dans la durée des festivités : " + dureeFestivites.Hours);

//Durée totale en heures des festivités : 80,5
Console.WriteLine("Durée en heures (total) des festivités : " + dureeFestivites.TotalHours);

//Nombre de minutes dans la durée des festivités : 30
Console.WriteLine("Nombre de minutes de contenues dans la durée des festivités : " + dureeFestivites.Minutes);

//Durée totale en minutes des festivités : 4830
Console.WriteLine("Durée en minutes (total) des festivités : " + dureeFestivites.TotalMinutes);

//Nombre de secondes dans la durée des festivités : 0
Console.WriteLine("Nombre de secondes de contenues dans la durée des festivités : " + dureeFestivites.Seconds);

//Durée totale en secondes des festivités : 289800
Console.WriteLine("Durée en secondes (total) des festivités : " + dureeFestivites.TotalSeconds);

//Durée totale en millisecondes des festivités : 289800000
Console.WriteLine("Durée en millisecondes (total) des festivités : " + dureeFestivites.TotalMilliseconds);

// Différence entre deux dates; ça produit un objet TimeSpan.
TimeSpan depuisEvenementWtc = aujourdhui - dateCelebre;
Console.WriteLine("Nombre de jours depuis le 11 septembre 2001 : " + depuisEvenementWtc.Days);

// Création d'une durée (interprétée comme un moment dans une journée) à partir d'une chaîne de caractères.
TimeSpan moment = TimeSpan.Parse("14:45:20");
Console.WriteLine("Un moment dans une journée : " + moment.ToString());

//Ajout d'une durée
TimeSpan duree = new TimeSpan(0, 10, 0); //10 minutes
moment = moment.Add(duree);
Console.WriteLine("Ajout de 10 minutes à moment dans une journée : " + moment.ToString());

//Création d'une durée à partir d'une durée en millisecondes.
TimeSpan nouveauMomment = TimeSpan.FromMilliseconds(moment.TotalMilliseconds);
Console.WriteLine("Création d'une durée à partir de miliseconddes : " + nouveauMomment.ToString());

//Formatage de l'affichage du temps
Console.WriteLine("Formatage de l'affichage sans les secondes : " + moment.ToString(@"hh\:mm"));


```