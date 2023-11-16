---
outline: deep
---

# Fichier de configuration App.config

Le fichier **app.config** dans une application WPF est utilisé pour stocker des paramètres de configuration pour l'application. Ce fichier est particulièrement utile pour stocker des informations qui peuvent changer **sans nécessiter une recompilation de l'application**, comme des chaînes de connexion à des bases de données, des paramètres d'application, ou des informations de configuration spécifiques à l'environnement.

## Structure de Base d'un Fichier app.config

Un fichier **app.config** typique ressemble à ceci :

```c#
<?xml version="1.0" encoding="utf-8" ?>
<configuration>
    <appSettings>
        <add key="Cle1" value="Valeur 1"/>
        <add key="Cle2" value="Valeur 2"/>
    </appSettings>
    <connectionStrings>
        <add name="DatabaseConnectionString" connectionString="Server=AddresseServeur;Database=maBD;User Id=monUtilisateur;Password=monMotPasse;"/>
    </connectionStrings>
</configuration>
```

## Lecture de paramètres

Pour lire ces paramètres dans votre application WPF, vous utiliseriez le code suivant :

```c#
//Pour lire un paramètre de configuration. 
string valeur1 = ConfigurationManager.AppSettings["Cle1"]; //retournera : valeur 1


//Pour lire une châine de connexion
string connectionString = ConfigurationManager.ConnectionStrings["DatabaseConnectionString"].ConnectionString;

```
## Écriture de paramètres

```c#

Configuration config = ConfigurationManager.OpenExeConfiguration(ConfigurationUserLevel.None);

// Ajouter ou modifier une clé
config.AppSettings.Settings["MaCle"].Value = "MaValeur";

// Ou si la clé n'existe pas
config.AppSettings.Settings.Add("NouvelleCle", "NouvelleValeur");

// Enregistrer les modifications
config.Save(ConfigurationSaveMode.Modified);

// Rafraîchir la section appSettings
ConfigurationManager.RefreshSection("appSettings");

```

## Exemples d'Utilisation

- Paramètres d'Application : Stocker des valeurs telles que le chemin d'accès à un fichier ou des préférences utilisateur.

- Chaînes de Connexion : Stocker des informations de connexion à différentes bases de données, permettant de changer facilement de base de données sans recompiler.

- Paramètres Environnementaux : Changer des paramètres selon l'environnement de déploiement, par exemple des URLs de service en développement vs production.

## Conseils de Sécurité

- **Ne stockez pas d'informations sensibles** en clair dans app.config, surtout si l'application est distribuée.
- **Utilisez des mécanismes de cryptage** pour les chaînes de connexion ou autres données sensibles.

