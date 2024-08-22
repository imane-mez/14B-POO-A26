---
outline: deep
---

# Le type TimeSpan

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