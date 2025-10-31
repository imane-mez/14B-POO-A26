# Les expressions régulières (Regex)

Une expression régulière (ou regular expression, abrégée Regex) est une chaîne de caractères spéciale utilisée pour décrire un motif de texte.

Elle permet de vérifier, rechercher ou extraire des données textuelles selon des règles précises de format.

Elle permet de vérifier, rechercher ou extraire des données textuelles selon des règles précises de format.

Exemple :

- Vérifier si un courriel contient un @ et un .
- Valider un numéro de téléphone
- Extraire tous les chiffres d’un texte

En C#, les expressions régulières sont gérées par la classe Regex du namespace :

```c#
using System.Text.RegularExpressions;

```

Cette classe fournit plusieurs méthodes statiques ou d’instance, dont les plus utilisées sont :

| Méthode | Description |
|----------|-------------|
| `IsMatch(string texte)` | Vérifie si le texte correspond au motif. |
| `Match(string texte)` | Retourne le premier élément qui correspond. |
| `Matches(string texte)` | Retourne toutes les correspondances. |
| `Replace(string texte, string remplacement)` | Remplace les parties qui correspondent. |
| `Split(string texte)` | Sépare le texte selon le motif. |


## Exemple - Identifier un numéro de dossier étudiant (DA)

Les numéros DA des étudiants ont souvent **exactement 7 chiffres**.
On peut facilement les reconnaître dans un texte avec une expression régulière.

```c#
string texte = "Voici les dossiers : 1234567, 7654321 et 1112223.";

MatchCollection numerosDA = Regex.Matches(texte, @"\b\d{7}\b");

foreach (Match m in numerosDA)
{
    Console.WriteLine($"DA trouvé : {m.Value}");
}

```

Explication du modif : 

| Élément | Signification |
|----------|----------------|
| `\b` | Limite de mot (pour éviter de trouver 12345678) |
| `\d{7}` | Exactement 7 chiffres |
| `\b` | Fin de mot |


Résultats : 

```
DA trouvé : 1234567
DA trouvé : 7654321
DA trouvé : 1112223
```

## Pourquoi le @ avant la chaîne ?

Le @ indique qu’il s’agit d’une chaîne verbatim (mot pour mot).
Ainsi, le caractère \ n’est pas interprété par C#.

```c#
// Sans @ : il faut doubler les barres
Regex.IsMatch(code, "^\\d{3}-\\d{3}-\\d{4}$");

// Avec @ : plus lisible 
Regex.IsMatch(code, @"^\d{3}-\d{3}-\d{4}$");
```

## Symboles fréquents dans les regex

| Symbole | Signification | Exemple | Correspond à |
|----------|----------------|----------|---------------|
| `.` | N’importe quel caractère sauf saut de ligne | `a.c` | `abc`, `axc`, etc. |
| `\d` | Un chiffre (0–9) | `\d{2}` | deux chiffres |
| `\w` | Un caractère alphanumérique (a–z, A–Z, 0–9, _) | `\w+` | mot |
| `\s` | Espace ou tabulation | `\s+` | un ou plusieurs espaces |
| `^` | Début de chaîne | `^A` | commence par A |
| `$` | Fin de chaîne | `Z$` | finit par Z |
| `+` | 1 ou plusieurs fois | `\d+` | nombre |
| `*` | 0 ou plusieurs fois | `\w*` | mot optionnel |
| `?` | 0 ou 1 fois | `-?\d+` | nombre optionnellement négatif |
| `|` | OU logique | `chat|chien` | “chat” ou “chien” |
| `()` | Groupe capturant | `(EMP|ADM)-\d+` | `EMP-123` ou `ADM-456` |
| `[]` | Ensemble de caractères | `[A-Z]` | lettre majuscule |

## Créer et réutiliser un objet Regex statique

Pour de meilleures performances, tu peux créer une **instance statique** réutilisable :

```c#
private static readonly Regex REGEX_DA = new Regex(@"^\d{7}$");

public static bool EstNumeroDAValide(string valeur)
{
    return REGEX_DA.IsMatch(valeur);
}
```

