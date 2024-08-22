---
outline: deep
---

# Manipulation de chaîne de caractères

L'objet `String` en C# fournit de nombreuses méthodes pour manipuler et interagir avec des chaînes de caractères. Voici une explication de quelques-unes des méthodes les plus couramment utilisées, accompagnée d'exemples pour chaque méthode.

## Length

La propriété `Length` retourne le nombre de caractères dans la chaîne.

``` c#
string texte = "Bonjour";
int longueur = texte.Length;
Console.WriteLine("Longueur de la chaîne : " + longueur); // Affiche 7
```

## Accès à des caractères individuels dans une chaîne

Vous pouvez accéder à un caractère spécifique dans une chaîne en utilisant la syntaxe suivante :


``` c#
string texte = "Bonjour";
char premierCaractere = texte[0]; // Accède au premier caractère 'B'
char dernierCaractere = texte[texte.Length - 1]; // Accède au dernier caractère 'r'

Console.WriteLine("Premier caractère : " + premierCaractere); // Affiche "Premier caractère : B"
Console.WriteLine("Dernier caractère : " + dernierCaractere); // Affiche "Dernier caractère : r"

``` 


 ## Substring(int indexDepart, int longeur)

 Cette méthode extrait une sous-chaîne à partir de la chaîne d'origine, en commençant à l'index de départ spécifié et pour une longueur donnée.

``` c#
string texte = "Bonjour tout le monde";
string sousChaine = texte.Substring(8, 4);
Console.WriteLine(sousChaine); // Affiche "tout"
``` 

## IndexOf(string valeur)

Cette méthode retourne l'index de la première occurrence d'une sous-chaîne spécifiée dans la chaîne. Si la sous-chaîne n'est pas trouvée, elle retourne -1.

``` c#
string texte = "Bonjour tout le monde";
int index = texte.IndexOf("tout");
Console.WriteLine("Index de 'tout' : " + index); // Affiche 8
```

## Replace(string ancienneValeur, string nouvelleValeur)

Cette méthode remplace toutes les occurrences d'une sous-chaîne spécifiée par une autre sous-chaîne.

``` c#
string texte = "Bonjour tout le monde";
string texteModifie = texte.Replace("le monde", "les amis");
Console.WriteLine(texteModifie); // Affiche "Bonjour tout les amis"
```

## ToUpper() et ToLower()

Ces méthodes convertissent tous les caractères de la chaîne en majuscules (ToUpper()) ou en minuscules (ToLower()).

``` c#
string texte = "Bonjour";
string majuscules = texte.ToUpper();
string minuscules = texte.ToLower();
Console.WriteLine(majuscules); // Affiche "BONJOUR"
Console.WriteLine(minuscules); // Affiche "bonjour"
```

## Trim()

Cette méthode supprime tous les espaces blancs (et autres caractères de spécifiés) au début et à la fin de la chaîne.


``` c#
string texte = "  Bonjour  ";
string texteTrimmed = texte.Trim();
Console.WriteLine("[" + texteTrimmed + "]"); // Affiche "[Bonjour]"
```

## StartsWith(string valeur) et EndsWith(string valeur)

Ces méthodes vérifient si la chaîne commence (StartsWith) ou se termine (EndsWith) par une sous-chaîne spécifiée.

``` c#
string texte = "Bonjour tout le monde";
bool commenceParBonjour = texte.StartsWith("Bonjour");
bool termineParMonde = texte.EndsWith("monde");
Console.WriteLine(commenceParBonjour); // Affiche "True"
Console.WriteLine(termineParMonde); // Affiche "True"
``` 

## Contains(string valeur)

Cette méthode vérifie si une sous-chaîne spécifiée est présente dans la chaîne.

``` c#
string texte = "Bonjour tout le monde";
bool contientTout = texte.Contains("tout");
Console.WriteLine(contientTout); // Affiche "True"
```

## split(char separateur)

Cette méthode divise la chaîne en un tableau de sous-chaînes, en utilisant un caractère séparateur.

``` c#
string texte = "Bonjour, tout, le, monde";
string[] mots = texte.Split(',');
for (int i=0; i < mots.length, i++)
{
    Console.WriteLine(mots[i].Trim());
}
// Affiche : 
// Bonjour
// tout
// le
// monde

```

## Join(string separateur, string[] valeurs)

Cette méthode concatène tous les éléments d'un tableau de chaînes en une seule chaîne, en utilisant une chaîne séparateur entre chaque élément.

``` c#
string[] mots = { "Bonjour", "tout", "le", "monde" };
string phrase = string.Join(" ", mots);
Console.WriteLine(phrase); // Affiche "Bonjour tout le monde"
```

## IsNullOrEmpty(string value)

Cette méthode vérifie si une chaîne est null ou vide ("").

``` c#
string texte = "";
bool estVide = string.IsNullOrEmpty(texte);
Console.WriteLine(estVide); // Affiche "True"
```

## IsNullOrWhiteSpace(string value)

Cette méthode vérifie si une chaîne est null, vide (""), ou ne contient que des espaces blancs (comme des espaces, des tabulations, etc.).

``` c#
string texte1 = null;
string texte2 = "";
string texte3 = "   "; // Contient uniquement des espaces blancs
string texte4 = "Bonjour";

// Vérification avec IsNullOrWhiteSpace
bool estNullOuBlanc1 = string.IsNullOrWhiteSpace(texte1);
bool estNullOuBlanc2 = string.IsNullOrWhiteSpace(texte2);
bool estNullOuBlanc3 = string.IsNullOrWhiteSpace(texte3);
bool estNullOuBlanc4 = string.IsNullOrWhiteSpace(texte4);

Console.WriteLine("texte1 : " + estNullOuBlanc1); // Affiche "True"
Console.WriteLine("texte2 : " + estNullOuBlanc2); // Affiche "True"
Console.WriteLine("texte3 : " + estNullOuBlanc3); // Affiche "True"
Console.WriteLine("texte4 : " + estNullOuBlanc4); // Affiche "False"

```

## PadLeft(int longeurTotale, char caractere)

Cette méthode ajoute des caractères au début de la chaîne pour atteindre une largeur totale spécifiée. Si la chaîne est déjà plus longue que la largeur spécifiée, elle n'est pas modifiée.

``` c#
string texte = "Bonjour";
string textePadLeft = texte.PadLeft(10, '*');

Console.WriteLine(textePadLeft); // Affiche "***Bonjour"
```


## PadRight(int longeurTotale, char caractere)

Cette méthode ajoute des caractères à la fin de la chaîne pour atteindre une largeur totale spécifiée. Comme pour `PadLeft`, si la chaîne est déjà plus longue que la largeur spécifiée, elle n'est pas modifiée.

``` c#
string texte = "Bonjour";
string textePadRight = texte.PadRight(10, '!');

Console.WriteLine(textePadRight); // Affiche "Bonjour!!!"
```

## Insert(int indexDebut, string valeur)

La méthode `Insert` permet d'insérer une chaîne à un index spécifié dans une autre chaîne. Vous pouvez l'utiliser pour ajouter des caractères au début, à la fin ou à une position spécifique.

``` c#
string texte = "Bonjour";
string texteAvecPrefixe = texte.Insert(0, "Salut, ");

Console.WriteLine(texteAvecPrefixe); // Affiche "Salut, Bonjour"


string texte2 = "Bonjour";
string texteAvecSuffixe = texte.Insert(texte2.Length, " à tous");

Console.WriteLine(texteAvecSuffixe); // Affiche "Bonjour à tous"

```

<!--
## Compare(string strA, string strB)

Cette méthode compare deux chaînes et retourne un entier indiquant leur ordre lexicographique. Elle retourne :

- Un nombre négatif si strA précède strB.
- Zéro si strA est identique à strB.
- Un nombre positif si strA suit strB.
-->

