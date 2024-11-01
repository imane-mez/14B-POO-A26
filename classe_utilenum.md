# Classe UtilEnum

La classe UtilEnum est une classe utilitaire pour les énumérations, qui fournit des méthodes permettant d'obtenir les descriptions associées aux constantes des énumérations, si elles existent. Cette fonctionnalité est utile lorsqu'on veut afficher des descriptions plus conviviales dans des interfaces utilisateur ou des rapports, plutôt que d'afficher les noms des constantes de l'énumération tels quels.


```c#
/// <summary>
/// Classe utilitaire pour les énumérations. Fournit des méthodes permettant d'obtenir les
/// descriptions associées aux constantes des énumérations lorsque celles-ci sont disponibles.
/// NOTE POUR LES ÉTUDIANTS : N'essayez pas de comprendre le code suivant.
/// </summary>
public static class UtilEnum
{
    #region MÉTHODES

    /// <summary>
    /// Extension permettant d'obtenir la description pour une constante d'une énumération, si disponible.
    /// S'il n'y a pas de description associée à la constante de l'énumération, permet d'obtenir la valeur
    /// de celle-ci.
    /// Source : https://msmvps.com/blogs/deborahk/archive/2009/07/10/enum-binding-to-the-description-attribute.aspx
    /// </summary>
    /// <param name="currentEnum">Énumération pour laquelle on désire obtenir une description.</param>
    /// <returns>
    /// Description associée à la constante de l'énumération ou bien la valeur s'il n'y a pas de description.
    /// </returns>
    public static string GetDescription(this Enum currentEnum)
    {
        string description;
        DescriptionAttribute da;

        FieldInfo fi = currentEnum.GetType().GetField(currentEnum.ToString());
        da = (DescriptionAttribute)Attribute.GetCustomAttribute(fi, typeof(DescriptionAttribute));
        if (da != null)
            description = da.Description;
        else
            description = currentEnum.ToString();

        return description;
    }

    /// <summary>
    /// Permet d'obtenir toutes les descriptions associées aux constantes d'une énumération, si disponible.
    /// S'il n'y a pas de description associée à une constante de l'énumération, permet d'obtenir
    /// la valeur de celle-ci.
    /// </summary>
    /// <returns>
    /// Les descriptions associées aux constantes de l'énumération ou bien les valeurs
    /// s'il n'y a pas de description.
    /// </returns>
    public static string[] GetAllDescriptions<T>()
    {
        Type enumType = typeof(T);
        List<String> lesDescriptions = new List<String>();
        foreach (Enum valeur in Enum.GetValues(enumType))
        {
            lesDescriptions.Add(valeur.GetDescription());
        }
        return lesDescriptions.ToArray();
    }

    #endregion
}

```

## Exemple d'utilisaton

Supposons l'énumération suivante :

```c#
public enum TypeDocument
{
    [Description("Rapport technique")]
    RapportTechnique,
    [Description("Mémoire")]
    Memoire,
    [Description("Article de recherche")]
    ArticleRecherche,
    Brouillon // Pas de description
}

```

## GetDescription(this Enum currentEnum) :

- Cette méthode est une méthode d'extension qui permet d'obtenir la description associée à une constante d'une énumération, à l'aide de l'attribut DescriptionAttribute.
- Si la constante de l'énumération a un attribut Description, la méthode retourne cette description.
- Si aucune description n'est associée, la méthode retourne simplement le nom de la constante.

Exemple : 

```c#
// Utilisation de la méthode GetDescription :
TypeDocument type = TypeDocument.RapportTechnique;
string description = statut.GetDescription(); // Retourne "Rapport technique"

type = TypeDocument.Brouillon;
description = statut.GetDescription(); // Retourne "Brouillon"
```

## GetAllDescriptions\<T\>() :

- Cette méthode générique permet d'obtenir toutes les descriptions des constantes d'une énumération.
- Si une constante a un attribut Description, la description est ajoutée à la liste.
- Si aucune description n'est associée, le nom de la constante est utilisé.

Exemple : 

```c#
// Utilisation de la méthode GetAllDescriptions :
string[] descriptions = UtilEnum.GetAllDescriptions<TypeDocument>();

// Le tableau descriptions contiendra :
 //["Rapport technique", "Mémoire", "Article de recherche", "Brouillon"]

```

## Utilité de ces méthodes :

- Interface utilisateur : Les descriptions sont souvent plus lisibles que les noms bruts des constantes. Par exemple, au lieu d'afficher ArticleRecherche, on affiche "Article de recherche".
- Rapports : Lors de la génération de rapports, les descriptions rendent les données plus compréhensibles pour les utilisateurs finaux.
- Localisation : L'utilisation de descriptions permet de gérer la traduction des valeurs d'énumérations de manière centralisée, en ajoutant simplement des attributs Description.

Ces méthodes permettent d'améliorer l'expérience utilisateur et la lisibilité du code tout en facilitant la gestion des énumérations dans des projets.