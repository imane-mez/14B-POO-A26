
# Classes statiques et membres de classe statique 

## Classe statique (static)

Une classe statique est identique à une classe non statique, à une différence près : **une classe statique ne peut pas être instanciée**. En d’autres termes, vous ne pouvez pas utiliser l’opérateur **new** pour créer une variable du type de la classe. Étant donné qu’il n’y a aucune variable d’instance, vous accédez aux membres d’une classe statique en utilisant le nom de classe.

Par exemple, si vous avez une classe statique nommée ConvertisseurUnites qui a une méthode publique nommée :

```c#
public static class ConvertisseurUnites{

    public static float CentimetresEnPources(float pCentimetres)
    {
        ///Code de la méthjode

    }
}

```
Alors il vous est possible d'appeler la méthode comme suit : 

```c#
float pouces = ConvertisseurUnites.CentimetresEnPources(centimetres);

```

Une classe statique permet d'utiliser un ensemble de méthodes utilisant seulement des paramètres d'entrée et qui n'ont pas besoin d'obtenir ou de définir des champs d'instances internes. Par exemple, la classe `System.Math` en est un bon exemple. Cette classe permet d'effectuer des opérations mathématiques de toutes sortes.


Voici quelques spécifications sur les classes statiques :
- Elle contient uniquement des membres statiques.
- Elle ne peut pas être instanciée.
- Elle ne peut pas être héritée et ne peut pas hériter d'aucune classe.
- Elle ne peut pas contenir de constructeurs d’instances.


Voici un exemple de classe statique :

```c#
/// <summary>
/// Classe permettant la conversion d'unité.
/// </summary>
public static class ConvertisseurUnites
{
    
    /// <summary>
    /// Permet la conversion de centimètres en pouces
    /// </summary>
    /// <param name="pCentimetres">Nombre de centimètres</param>
    /// <returns>Nombre de pouces</returns>
    public static float CentimetresEnPources(float pCentimetres)
    {
        return pCentimetres / 2.54f;
    }

    /// <summary>
    /// Permet la conversion de pouces en centimètres
    /// </summary>
    /// <param name="pPouces">Nombre de centimètres</param>
    /// <returns>Nombre de pouces</returns>
    public static float PoucesEnCentimetres(float pPouces)
    {
        return pPouces * 2.54f;
    }

}
```
Voici un exemple de son utilisation :

```c#
static void Main(string[] args)
{
    Console.Write("Veuillez inscrire le nombre de centimètres : ");

    float centimetres = float.Parse(Console.ReadLine());

    float pouces = ConvertisseurUnites.CentimetresEnPources(centimetres);

    Console.WriteLine($"{centimetres} centimètre(s) = {pouces} pouces");

}
```

## Membres statiques
**Une classe non statique peut contenir des méthodes, des attributs, des propriétés ou des événements statiques**. Le membre statique peut être appelé sur une classe même quand aucune instance de la classe n’a été créée. Le membre statique est toujours accessible par le nom de la classe, et non par le nom de l’instance.

**Une seule copie d’un membre statique existe, quel que soit le nombre d’instances de la classe qui ont été créées.**

**Les méthodes et les propriétés statiques ne peuvent pas accéder aux attributs, méthodes et événements non statiques** 

Il est plus courant de déclarer une classe non statique avec certains membres statiques que de déclarer une classe entière comme statique. 

Deux utilisations courantes des champs statiques consistent à :
 - Conserver un décompte du nombre d’objets qui ont été instanciés
 - Stocker une valeur qui doit être partagée entre toutes les instances.

Vous déclarez des membres de classe statique en utilisant le mot clé static avant le type de retour du membre, comme illustré dans l’exemple suivant :

```c#
/// <summary>
/// Représente un Chat
/// </summary>
class Chat
{    
    //Nombre d'instances de la classe
    private static int nbInstances = 0;

    /// <summary>
    /// Permet de construire un chat
    /// </summary>
    /// <remarks>Augment le nombre d'instance de la classe</remarks>

    public Chat()
    {
        Chat.nbInstances++;
    }



    /// <summary>
    /// Permet d'obtenir le nombre d'instance Chat
    /// </summary>
    /// <returns>Le nombre d'instance de la classe</returns>
    public static int CombienDeChats()
    {
        return Chat.nbInstances;

    }

}
```
Voici un exemple de son utilisation :

```c#
Chat sushi = new Chat();
Console.WriteLine($"Il y a {Chat.CombienDeChat()} Chat(s) adopté(s).");
Chat minou = new Chat();
Console.WriteLine($"Il y a {Chat.CombienDeChat()} Chat(s) adopté(s).");
```
Résultat :
```
Il y a 1 Chat(s) adopté(s).
Il y a 2 Chat(s) adopté(s).
```

## Constructeur statique

Un constructeur peut également être statique. Il est utilisé pour initialiser des membres statiques de la classe, des valeurs par défaut, ou effectuer d'autres tâches liées à la classe elle-même plutôt qu'à une instance particulière de la classe. 

**Celui-ci doit être privé afin d'empêcher la classe d'être instanciée**.

Les constructeurs statiques sont appelés automatiquement lorsque la classe est chargée en mémoire, avant même que vous ne créiez une instance de la classe.

```c#
/// <summary>
/// Représente un Chat
/// </summary>
class Chat
{    
    //Nombre d'instances de la classe
    private static int nbInstances;

    /// <summary>
    /// Constructeur statique pour initialiser le compteur
    /// </summary>
    /// <remarks>Augment le nombre d'instance de la classe</remarks>
    public static Chat()
    {
       nbInstances = 0;
    }


    /// <summary>
    /// Permet de construire un chat
    /// </summary>
    /// <remarks>Augment le nombre d'instance de la classe</remarks>

    public Chat()
    {
        Chat.nbInstances++;
    }



    /// <summary>
    /// Permet d'obtenir le nombre d'instance Chat
    /// </summary>
    /// <returns>Le nombre d'instance de la classe</returns>
    public static int CombienDeChats()
    {
        return Chat.nbInstances;

    }

}
```

