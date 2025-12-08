---
outline: deep
---

# Utilisation du fichier appsettings.json

Dans une application .NET, il est fortement recommandé de ne pas écrire directement dans le code certaines informations susceptibles de changer :

- la chaîne de connexion à la base de données,
- le chemin d'accès à un dossier d’images,
- des paramètres de configuration,
- des clés API (avec prudence),
- ou tout autre réglage que l’on veut modifier sans recompiler l’application.

C’est exactement le rôle du fichier **appsettings.json** :

Un fichier de configuration externe, lisible, modifiable, et chargé automatiquement par l’application.


## 1. Ajouter le fichier appsettings.json au projet

1. Clique droit sur votre projet
2. Ajouter > Nouvel élément
3. Choisis “**Fichier config JSON JavaScript**”
4. Nom du fichier : **appsettings.json**

Ensuite, configurer le fichier pour qu’il soit copié correctement dans le dossier de sortie :

1. Clique droit > **Propriétés**
2. **Action de génération** → Contenu
3. **Copier dans le répertoire de sortie** → Copier si plus récent



## 2. Structure du fichier appsettings.json

Un fichier JSON est basé sur un système de sections.
Voici un exemple contenant à la fois une chaîne de connexion et un chemin d'accès aux images :


```c#
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;port=3306;Database=demo_db;Uid=root;Pwd=;"
  },

  "Chemins": {
    "DossierImages": "C:/MesImages/Produits"
  }
}

```
Ici, 

- **ConnectionStrings** représente une section réservée (par convention) aux chaînes de connexion.
- **Chemins** représentente une section personnalité que vous pouvez nommer comme vous le voulez. 
- **DossierImages** représente une clé avec sa valeur qui est le chemin d'accès aux images.

3. Installation des packages NuGet nécessaires

Pour lire un fichier JSON de configuration dans un projet non-web (WPF, WinForms, Console), on doit installer :

- **Microsoft.Extensions.Configuration**
- **Microsoft.Extensions.Configuration.Json**

Ces packages fournissent les classes utiles pour charger le fichier appsettings.json.

## 4. Lecture des valeurs du fichier appsettings.json dans le code

Voici le code standard pour configurer et lire le fichier :

```c#
using Microsoft.Extensions.Configuration;

// Nom du fichier
private const string APPSETTINGS_FILE = "appsettings.json";

// Noms des clés
private const string CONNECTION_STRING_NAME = "DefaultConnection";
private const string DOSSIER_IMAGES_KEY = "Chemins:DossierImages";

// Chargement du fichier appsettings.json
private static readonly IConfiguration _config =
    new ConfigurationBuilder()
    .AddJsonFile(APPSETTINGS_FILE, optional: false, reloadOnChange: true)
    .Build();

// Lecture de la chaîne de connexion
string connectionString = _config.GetConnectionString(CONNECTION_STRING_NAME);

// Lecture du chemin d'accès au dossier des images
string dossierImages = _config[DOSSIER_IMAGES_KEY];


```

## Pourquoi utiliser un fichier appsettings.json

- **Modifiable sans recompiler** : On peut changer un paramètre sans toucher au code.
- **Organisation centrale** : Toutes les configurations dans un seul fichier.
- **Lisible et simple** : Format JSON facile à comprendre.
- **Évite les valeurs “en dur”** :	Meilleures pratiques professionnelles.
- **Peut contenir tout type de réglages** :	Pas seulement les chaînes de connexion !