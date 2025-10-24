
# Les exceptions

Il arrive parfois qu'une application cesse brutalement de fonctionner à la suite d'une erreur grave qui n'avait pas été prévue par le programmeur. Des exemples très simples d'erreurs pouvant survenir sont par exemple :
- une division par zéro, 
- la tentative d'ouvrir un fichier inexistant
- la manipulation de données non conformes aux attentes. 

Ce type d'erreur s'appelle une **exception**. Il est du devoir du programmeur de prévoir ces cas graves d'erreur qui peuvent survenir et d'éviter que l'application ne cesse de fonctionner brutalement; 

ceci évitera plusieurs désagréments à l'utilisateur : 
    - perte de donnée, 
    - perte de l'état de l'application, 
    - redémarrage de l'application, 
    - perte de temps, 
    - frustration, 
    - etc. 
    
Pour gérer des erreurs de ce type, un procédé très efficace consiste à utiliser ce qui est connu sous le nom d'exceptions dans le langage C#. Ceci se fera en utilisant judicieusement les instructions suivantes :

- try 
- catch 
- finally 
- throw 


## try - catch - finally

Utilisez des blocs **try- catch** autour du code susceptible de générer une exception et assurez-vous que votre code peut continuer son exécution à la suite à cette exception. Dans les blocs **catch**, veillez à toujours classer les exceptions de la plus dérivée à la moins dérivée. Les exceptions dérivées ne seront pas attrapées si elles sont précédées d’un bloc catch du type Exception.

```c#
{
	//Instructions pouvant lever des exceptions.
}
catch (TypeException1 e)
{
	//Instructions à exécuter si une exception de type "TypeException1" est levée.
}
catch (TypeException2 e)
{
	//Instructions à exécuter si une exception de type "TypeException2" est levée.
}
finally
{
    //Instructions à exécuter dans tous les cas (erreur ou pas d'erreur) après les blocs "catch" appropriés.
}
```

**Exemple**

```c#
try
{
    Console.Write("Entrez un diviseur pour le chiffre 30 : ");
    byte diviseur = Byte.Parse(Console.ReadLine());
    Console.WriteLine("Résultat de la division entière : {0}", 30 / diviseur);
}
// Meilleure gestion des exceptions en utilisant des types d'exceptions spécifiques.
catch (FormatException fe)
{
    Console.WriteLine("Message personnalisé : {0}", "Vous devez entrer un nombre.");
    Console.WriteLine("Message système : {0}", fe.Message);
}
catch (OverflowException ofe)
{
    Console.WriteLine("Message personnalisé : {0}", "Le nombre entré doit être entre 0 et 255.");
    Console.WriteLine("Message système : {0}", ofe.Message);
}
catch (DivideByZeroException dbze)
{
    Console.WriteLine("Message personnalisé : {0}", "Il n'est pas possible de diviser par zéro.");
    Console.WriteLine("Message système : {0}", dbze.Message);
}

```

## throw

L'instruction **throw** permet de **lancer une exception** lorsqu'une situation imprévue survient ou bien lorsqu'une information reçue en paramètre dans une classe (par un constructeur, un accesseur en écriture ou une méthode) est invalide. Si l'exception lancée n'est pas attrapée, le programme cessera de fonctionner brutalement.


**throw new TypeException(message);**

**Exemple**

```c#
/// <summary>
/// Titre du film.
/// </summary>
public string Titre
{
    get { return _titre; }
    private set 
    {
        if (string.IsNullOrWhiteSpace(value))
            throw new ArgumentException(nameof(Titre), "Le titre ne peut pas être nul, vide ou ne contenir que des espaces");
        
        //Cette ligne ne sera pas exécuté dans le cas d'une erreur.
        _titre = value.Trim(); 
    }
}

```

## Principales classes d'exception


|Classe d'exception                 |Utilisation        |
|:----------                        |:-----------       |
|Exception                          |	Représente tous les types d'erreurs possibles. Il est préférable d'utiliser une classe plus spécifique au lieu d'utiliser cette classe directement.	        |
|SystemException                      |	Représente les erreurs qui se produisent durant l'exécution du code; presque toutes les erreurs sont de ce type. Il est préférable d'utiliser une classe plus spécifique au lieu d'utiliser cette classe directement.	        |
|**IndexOutOfRangeException**                      |	Exception levée lors d'une tentative d'accès à un élément d'un tableau ayant un index en dehors des limites du tableau.	        |
|**ArgumentException**                   |	Exception levée lorsqu'un argument non valide est fourni à une méthode. À n'utiliser que si les deux cas particuliers ci-dessous ne s'appliquent pas.            |
|ArgumentNullException                   |	Exception levée lorsqu'une référence null est passée à une méthode pour laquelle cet argument n'est pas valide. Pour lancer une exception de ce type, il faut utiliser le constructeur avec deux paramètres : **throw new ArgumentNullException(params, message)**|
|**ArgumentOutOfRangeException**                   |	Exception levée lorsque la valeur d'un argument est en dehors de la plage des valeurs autorisées, telle que définie par la méthode appelée. Par exemple, lorsque la valeur « 15 » est passée comme paramètre du mois lors de la création d'un objet DateTime. Pour lancer une exception de ce type, il faut utiliser le constructeur avec deux paramètres : **throw new ArgumentOutOfRangeException(param, message)**|
|InvalidOperationException                   |	Exception levée en cas d'appel de méthode non valide pour l'état actuel de l'objet.            |
|ArithmeticException                   |	Exception levée en cas d'erreurs au cours d'une opération arithmétique, de casting ou de conversion. À n'utiliser que s'il n'y a pas de type d'exceptions plus spécifique.            |
|DivideByZeroException                 | Exception levée lors d'une tentative de division d'une valeur intégrale ou décimale par zéro.|
|**FormatException**                   | Exception levée lorsque le format d'un argument ne correspond pas aux spécifications de paramètres de la méthode appelée. Par exemple, lorsqu'une chaîne invalide est passée à la méthode String.Format(...).|
|**OverflowException**                 |Exception levée lorsqu'une opération arithmétique, de cast ou de conversion engendre un dépassement de capacité dans un contexte contrôlé.|
|**FileNotFoundException**             |Exception levée lors d'une tentative d'accès à un fichier qui n'existe pas sur le disque échoue.
|StackOverflowException                |Exception levée lorsque la capacité de la pile d'exécution est dépassée en raison d'un trop grand nombre d'appels à la méthode imbriquée.


## Démonstration
Télécharger le fichier suivant pour la démonstration : [S8C2 - GestionException](https://gitlab.com/420-14b-fx/contenu/-/raw/main/bloc2/cours%2016/S9C2-GestionExceptions.zip?ref_type=heads)


<!--
## Exercice 1
::: tip S9E1 - Gestion des exceptions

### Objectif 
Mettre en pratique la gestion des exceptions à l'intérieur des classes et des formulaires.

### Problème 

1) À partir de l'exercice [S8C1-DemoMultiFormulaireCRUD](/formulaire_secondaire.html#exercice-2), vous devez maintenant modifier le code de la classe **Employe.cs** afin d'ajouter les validations au propriétés suivantes :
- Nom : Ne peut pas être nul ou vide et doit contenir au moins 3 caractères.
- La date de naissance doit être antérieure ou égale à la date du jour.
- Le salaire hebdomadaire doit être supérieur à 0.

Vous devez lancer le bon type d'exception selon le type d'erreur.

2) Vous devez également modifier votre code dans les formulaires d'ajout et de modification pour ajouter la validation des données saisies par l'utilisateur selon les contraintes de la classes employés et également gérer les cas où des exceptions non prévues pourraient se produire en utilisant l'instruction **try..cath**

:::

-->