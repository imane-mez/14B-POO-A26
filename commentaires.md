# Documenter votre code avec des commentaires XML

Comme vous le savez, les commentaires XML sont un genre particulier de commentaire, ajouté au-dessus de la définition d’un type ou d’un membre défini par l’utilisateur. Ils sont spéciaux, car ils peuvent être traités par le compilateur pour générer un fichier de documentation XML au moment de la compilation. Le fichier XML généré par le compilateur peut être distribué avec votre application.NET afin que Visual Studio et d’autres IDE puissent utiliser l'IntelliSense pour afficher des informations rapides sur les types ou les membres. De plus, le fichier XML peut être exécuté par l’intermédiaire d’outils tels que DocFX permettant de générer une documentation.

Les commentaires de documentation XML utilisent des barres obliques triples (**///**) et le corps d’un commentaire au format XML.

Voici un rappel des principales balises XML utilisées dans les commentaires et leur utilité.

## summary

La balise **summary** ajoute des informations succinctes relatives à un type ou un membre.

```c#
/// <summary>
/// Cette classe permet d'effectuer des opérations mathématiques
/// </summary>
public class Math
{
    
}

```

Cette balise est importante, car son contenu est la principale source d’informations sur les types ou les membres dans l'IntelliSense ou un document de référence sur votre code.

## remarks

La balise **remarks** complète les informations relatives aux types ou aux membres fournies par la balise **summary**. 

```c#
/// <summary>
/// Cette classe permet d'effectuer des opérations mathématiques
/// <remark>Permet d'additionner et soustraire </remark>
/// </summary>
public class Math
{

}
```

## returns

La balise **returns** décrit la valeur de retour d'une méthode. L’exemple suivant illustre la balise **returns** sur la méthode additionner.


```c#
/// <summary>
/// Additionne deux nombres entiers et retourne le résultat.
/// </summary>
/// <returns>
/// La somme des deux entiers.
/// </returns>
public static int Additionner(int a, int b)
{
    return a + b;
}

```
## value

La balise **value** est similaire à la balise **returns**, excepté que vous l’utilisez pour les propriétés. Pour la plupart, les balises **summary** d'une propriété indiqueront généralement **"Obtient ou définit une valeur ..."** , tandis que les balises de **value** indiqueront généralement les valeurs attendues, y compris la valeur par défaut. En supposant que la classe Math a une propriété statique appelée PI :


```c#
/// <summary>
/// Cette classe permet d'effectuer des opérations mathématiques
/// <remark>Permet d'additionner et de soustraire des nombres entiers </remark>
/// </summary>
public class Math
{
	
    /// <summary>Obtient la valeur de PI.</summary>
    /// <value>Retourne la valeur 3.1416.</value>
    public static double PI 
    { 
        get{ return 3.1416 ;}
    }

}
```
## param

La balise **param** permet de décrire les paramètres d’une méthode. Voici un exemple de la méthode Additionner. Le nom du paramètre est spécifié avec l'attribut obligatoire **name** :

```c#
/// <summary>
/// Additionne deux nombres entiers et retourne le résultat
/// </summary>
/// <returns>
/// La somme des deux entiers
/// </returns>
/// <param name="a">Un nombre entier.</param>
/// <param name="b">un nombre entier.</param>
public static int Additionner(int a, int b)
{
    return a + b;
}

```

## exception

En utilisant la balise **exception**, vous informez vos développeurs qu’une méthode peut lever des exceptions spécifiques. Voici comment nous pourrions indiquer que la méthode Additionner lève une exception si la valeur d'un des deux nombres a atteint la taille maximale d'un entier et que l'autre nombre est supérieur à zéro:

```c#
/// <summary>
/// Additionne deux nombres entiers et retourne le résultat
/// </summary>
/// <returns>
/// La somme des deux entiers
/// </returns>
/// <param name="a">Un nombre entier.</param>
/// <param name="b">un nombre entier.</param>
/// <exception cref="System.OverflowException">Lancée lorsqu'un paramètre a une valeur maximale
/// et que l'autre est supérieure à 0.</exception>
public static int Additionner(int a, int b)
{
    if ((a == int.MaxValue && b > 0) || (b == int.MaxValue && a > 0))
            throw new System.OverflowException();

    return a + b;
}

```

## Recommandations

La documentation du code est recommandée pour de nombreuses raisons. Voici quelques bonnes pratiques, des scénarios de cas d’usage généraux et des éléments que vous devez connaître quand vous utilisez des balises de documentation XML dans votre code C#.

- Par souci de cohérence, **tous les types visibles publiquement et leurs membres** doivent être documentés. 
- Les membres privés peuvent également être documentés à l’aide de commentaires XML. Toutefois, cela expose le fonctionnement interne (potentiellement confidentiel) de votre code.
- Au minimum, **les classes et leurs membres** doivent avoir une balise **summary**, car leur contenu est nécessaire pour l'IntelliSense.
- Les méthodes devraients avoir les balises **summary**, **returns** s'il y a une valeur de retour et **params** s'il y a des parmètres.
- Le texte de la documentation doit être écrit à l’aide de phrases complètes se terminant par un point.

## Docfx  - Générateur de documentation

Docfx  est un générateur de documentation pour .NET, qui prend actuellement en charge C #, VB et F #. Il génère une documentation de référence sur le code à partir de commentaires XML dans votre code source. Il vous permet également d'utiliser des fichiers Markdown pour créer des rubriques supplémentaires telles que des didacticiels et des procédures, et pour personnaliser la documentation de référence générée. 

Docfx  crée un site Web HTML statique à partir de votre code source et de vos fichiers Markdown, qui peut être facilement hébergé sur n'importe quel serveur Web.

De plus, Docfx  vous offre la flexibilité de personnaliser la mise en page et le style de votre site Web grâce à des modèles. 

Voici un tutoriel vous expliquant comment utiliser Docfx  pour générer votre documentation à partir de votre code source :https://youtu.be/fg6QiqhCyg4

Documenation Docfx : https://dotnet.github.io/docfx/index.html



## Démo - Docfx 
Télécharger les fichiers de départ de la démonstration : [S4C1-DemoValidationFormulaire-Départ](https://gitlab.com/420-14b-fx/contenu/-/tree/main/bloc1/cours%2007?ref_type=heads)

