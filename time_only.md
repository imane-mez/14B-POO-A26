---
outline: deep
---


# Type TimeOnly

Le type **TimeOnly** en C# est une nouveauté introduite dans .NET 6 pour représenter un moment de la journée, indépendamment d'une date. Avant .NET 6, la gestion du temps sans la date était souvent gérée avec DateTime, mais cela pouvait être source de confusion et d'erreurs, car DateTime inclut toujours une composante de date.

Voici quelques caractéristiques clés et exemples d'utilisation du type TimeOnly :

- **Représentation du Temps** : TimeOnly stocke un moment de la journée, allant **de 00:00:00 à 23:59:59.9999999**.

- **Indépendance de la Date**: Contrairement à DateTime, TimeOnly **ne contient aucune information de date**. 

- **Opérations de Temps**: TimeOnly permet des opérations telles que la **comparaison, l'ajout ou la soustraction de temps**.

## Cas d'utilisation

- Planification d'événements récurrents (comme des réunions ou des cours) sans se soucier de la date.
- Gestion des horaires de travail ou des plages horaires.
- Comparaison de moments de la journée pour des applications telles que des alarmes ou des rappels.


## Exemples d'utilisations

### Création d'une Instance de TimeOnly:

```c#
TimeOnly heure = new TimeOnly(14, 30); // 14:30 ou 2:30 PM
```

### Conversion depuis String

```c#
string heureString = "14:30"; // 2:30 PM
TimeOnly heure = TimeOnly.Parse(heureString);
```

### Conversion depuis DateTime

```c#
DateTime maintenant = DateTime.Now;
TimeOnly tempsActuel = TimeOnly.FromDateTime(maintenant); // Extrait le temps de l'instance DateTime
```

### Conversion depuis TimeSpan

```c#
TimeSpan dureeDepuisMinuit = new TimeSpan(10, 30, 0); // 10 heures et 30 minutes depuis minuit
TimeOnly heureCorrespondante = TimeOnly.FromTimeSpan(dureeDepuisMinuit);

```


### Ajout de Temps

```c#
TimeOnly heure = new TimeOnly(14, 30); // 14:30 ou 2:30 PM
TimeOnly uneHeurePlusTard = heure.AddHours(1); // Ajoute une heure
TimeOnly trenteMinutesAvant = heure.AddMinutes(-30); // Retire trente minutes
```

### Formatage

```c#
TimeOnly heure = new TimeOnly(14, 45); // 14:45

// Format Heure AM/PM
string format12Heures  = heure.ToString("hh:mm tt"); // "02:45 PM"

// Format Heure AM/PM
string format24Heures = heure.ToString("HH:mm"); // "14:45"
string formatCourt = heure.ToShortTimeString(); // "14:30" ou "2:30 PM" selon les paramètres régionaux

// Heures et Minutes avec Secondes
string formatAvecSecondes = heure.ToString("HH:mm:ss"); // "14:45:00"
string formatLong = heure.ToLongTimeString(); // "14:30:00" ou "2:30:00 PM" selon les paramètres régionaux

// Format Personnalisé avec Heures, Minutes et AM/PM
string formatPersonnalise = heure.ToString("hh 'heures' mm 'minutes' tt"); // "02 heures 45 minutes PM"

// Affichage des Secondes et des Millisecondes
var heureAvecSecondes = new TimeOnly(14, 45, 30, 500); // 14:45:30.500
var formatAvecMillisecondes = heureAvecSecondes.ToString("HH:mm:ss.fff"); // "14:45:30.500"

```