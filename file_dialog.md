---
outline: deep
---


# Gestion de fichier en WPF

Il arrive parfois qu'une application doive permettre à un utilisateur de parcourir et de sélectionner des fichiers sur son ordinateur. L'**OpenFileDialog** est un objet permettant l'ouverture d'une fenêtre de dialogue permettant la sélection d'un fichier.  Celle-ci vous offre des fonctionnalités similaires à celles offertes dans l'Explorateur Windows pour naviguer dans les dossiers et sélectionner des fichiers.

## Création d'un OpenFileDialog

En WPF, la classe **OpenFileDialog** fait partie de l'espace de nom **Microsoft.Win32**

Création d'une instance de la classe.
```c#
OpenFileDialog openFileDialog = new OpenFileDialog();
```

Si l'utilisateur a sélectionné un fichier et cliqué sur le bouton Ok, alors la valeur retournée par la méthode **ShowDialog()** sera **True**. Sinon elle sera **False**. La propriété **FileName** contient le chemin d'accès ainsi que le nom du fichier sélectionné.

```c#
if (openFileDialog.ShowDialog() == true)
{
    string nomFichier = openFileDialog.FileName;

}
```

Avant l'ouverture du OpenFileDialog, il est possible de spécifier :

- Le répertoire initial :

```c#
openFileDialog.InitialDirectory = @"c:\";
```

- Le titre de la fenêtre :

```c#
openFileDialog.Title = "Parcourir les fichiers texte"
```
- 
Le type d'extension sélectionné par défaut.

```c#
openFileDialog1.DefaultExt = "txt";
```

- Les filtres d'extension possible pour la sélection d'un fichier. Seuls les fichiers ayant l'extension sélectionnée seront affichés.

```c#
openFileDialog1.Filter =  "fichiers txt (*.txt)|*.txt|Tous les fichiers (*.*)|*.*"; 
```

## Classes utiles pour la gestion des fichier

Voici quelques classes statiques utiles pour la gestion de fichier en C# :

## Classe File
Fournis des méthodes statiques pour copier, supprimer et déplacer un ficher :

- **void Copy (string fichierSource, string fichierDestination, bool remplacer)** : Permets de copier un fichier source vers une destination.
    - fichierSource : Fichier à copier.
    - fichierDestination :  nom du fichier. Ne peut pas être un répertoire.
    - Remplacer : true si le fichier de destination peut être remplacé ; sinon, false.

- **void Move (string fichierSource, string fichierDestination)** : Permets de déplacer un fichier spécifié à un nouvel emplacement, en permettant de spécifier un nouveau nom.
    - fichierSource : Nom du fichier à déplacer. Peut inclure un chemin d’accès absolu ou relatif.
    - fichierDestination : nouveau nom et chemin d’accès au fichier.

- **void Delete (string cheminFichier)** : Permets de supprimer le fichier spécifié.
    - cheminFichier : Nom et chemin d'accès du fichier à supprimer.

- **Exits(string cheminFichier)** : Indique si un fichier existe.
    - cheminFichier : Fichier à vérifier

## Classe Path

Effectue des opérations sur des instances de String qui contiennent des informations relatives au chemin d'accès d'un fichier ou d'un répertoire.

- **bool Exists (string? chemin)** : Indique si un fichier ou répertoire existe.
    - chemin : Chemin d'accès au fichier ou répertoire à vérifier.

- **string? GetFileName (string? cheminFichier)** : Retourne le nom et l’extension du fichier contenu dans la chaîne de caractères reçue en paramètre.

- **string? GetFileNameWithoutExtension (string? path)** : Retourne le nom sans l’extension du fichier contenu dans la chaîne de caractères reçue en paramètre.

- **string? GetExtension (string? cheminFichier)** : Retourne l’extension (y compris le point ".") du fichier contenu dans la chaîne de caractère reçue en paramètre.

## Démonstration

Téléchez la démonstration :  [S12C2-DemoBindingImage](https://gitlab.com/420-14b-fx/contenu/-/blob/main/bloc3/cours%2024/S12C2-DemoBindingImage.zip)

