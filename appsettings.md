---
outline: deep
---

# Fichier de configuration appsettings.json

Dans une application C#, le fichier `appsettings.json` est utilisé pour stocker des paramètres de configuration, comme des chaînes de connexion à une base de données, des clés API, ou tout autre paramètre que vous ne voulez pas coder en dur dans votre application.

C'est une bonne pratique, car cela rend votre application plus flexible et maintenable. Vous pouvez, par exemple, modifier la configuration sans avoir à recompiler l'application.


## Structure de Base d'un Fichier appsettings.json

Un fichier **app.config** typique ressemble à ceci :

```c#
{
  "AppSettings": {
    "ApplicationName": "MaSuperApplication",
    "Version": "1.0",
    "SupportEmail": "support@monapp.com"
  },
  "ConnectionStrings": {
    "DefaultConnection": "Server=myServer;Database=maBD;User Id=utilisateur;Password=motDePasse;"
  }
}
```

## Lecture du fichier appsettings.json

1) Ajouter des packages nécessaires

Pour utiliser facilement `appsettings.json`, vous devez installer les packages suivants dans votre projet:
- `Microsoft.Extensions.Configuration`
- `Microsoft.Extensions.Configuration.Json`

2) Chargement du fichier

Voici un exemple pour lire une valeur spécifique à partir du fichier :

```c#

using Microsoft.Extensions.Configuration;

class Program
{
    static void Main(string[] args)
    {
        // Charger la configuration
        Iconfiguration config = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
            .Build();

        // Lire une valeur
        string appName = config["AppSettings:ApplicationName"];
        string version = config["AppSettings:Version"];
        
        Console.WriteLine($"Nom de l'application : {appName}");
        Console.WriteLine($"Version : {version}");
    }
}

```

<!--
## Écriture dans fichier appsettings.json

Le fichier `appsettings.json` n'est pas conçu pour être modifié directement par le programme (c'est un fichier de configuration !). Mais si vous souhaitez tout de même modifier son contenu, vous pouvez le faire avec du code comme suit :

2) Chargement du fichier

Voici un exemple pour lire une valeur spécifique à partir du fichier :

```c#
using System.IO;
using Newtonsoft.Json.Linq;

class Program
{
    static void Main(string[] args)
    {
        //Chemin d'accès au fichier appsettings.json
        string filePath = Path.Combine(AppContext.BaseDirectory, "appsettings.json");

        // Lire le contenu actuel du fichier
        var json = JObject.Parse(File.ReadAllText(filePath));

        // Modifier une valeur
        json["AppSettings"]["ApplicationName"] = "NouvelleApplication";
        
        // Sauvegarder dans le fichier
        File.WriteAllText(filePath, json.ToString());

        Console.WriteLine("Configuration mise à jour !");
    }
}


```

-->

## Conseils de Sécurité

- **Ne stockez pas d'informations sensibles** en clair dans `app.config`, surtout si l'application est distribuée.
- **Utilisez des mécanismes de cryptage** pour les chaînes de connexion ou autres données sensibles.

