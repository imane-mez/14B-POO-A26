---
outline: deep
---

# Indexeur

Un indexeur est un type de propriété spécial qui permet d'accéder aux éléments d'un objet de manière similaire à un tableau. C# nous permet la définition d'**indexeurs personnalisés**, d'**indexeurs génériques** et également la **surcharge d'indexeur**. Un indexeur peut être défini comme **Public** ou **Private**.

## Utilité

Il est particulièrement utile dans les classes qui représentent une collection, une liste, ou un ensemble de données.

## Syntaxe

**Déclaration**

```c#
public Type this[Type index]
{
    get{
         // renvoie la valeur selon l'index spécifié dans une collection interne    
    }
    set{
        // définit la valeur à l'index spécifié dans une collection interne    
    }
}
```

Ici, **Type** est le type des éléments de la collection et **index** est l'argument qui permettra de trouver l'élément l'élément dans la collection (généralement la position).

Prenons par exemple la classe Contacts suivante qui contiendrait la liste de vos amis :

```c#
class Contacts
{
    /// <summary>
    /// Liste d'amis privée
    /// </summary>
    private List<Ami> _amis;

   
    public Contacts()
    {
        _amis = new();
    }

   
    public void Ajouter(Ami ami)
    {
        if (ami is null)
            throw new ArgumentNullException("ami", "Le paramètre ami ne peut pas être nul.");

        _amis.Add(ami);
    }

    public bool Supprimer(Ami ami)
    {
        if (ami is null)
            throw new ArgumentNullException("ami", "Le paramètre ami ne peut pas être nul.");

        return _amis.Remove(ami);
    }

}
```
Dans cet exemple la liste d'ami est privé donc inacessible à l'extérieur de la classe.

Voici maintenant comment nous pourrions accéder ou de modifier un ami de la liste à partir de sa position dans la liste en définissant l'indexeur de la classe : 

```c#
public Ami this[int index]
{
    get {

        if (index < 0 || index > _amis.Count)
            throw new IndexOutOfRangeException("L'indice est à l'extérieur des valeurs 			possibles dans la collection.");
        return _amis[index]; 
    }
    set {

        if (index < 0 || index > _amis.Count)
            throw new IndexOutOfRangeException("L'indice est à l'extérieur des valeurs 			possibles dans la collection.");

        _amis[index] = value; 
    }
}
```

Il est maintenant possible d’obtenir ou de modifier un ami comme vous le feriez pour un vecteur :

```c#
contacts = new Contacs();
contacts.Ajouter(new Ami("Boucher", "J-P", "418-651-1234"));
contacts[0].Prenom = "Jean-Philippe";
Console.WriteLine(contacts[0]);
```

## Surcharger un indexeur

Vous pouvez surcharger un indexeur avec différents types de données pour l’index. L'exemple suivant surcharge l’indexeur avec un index de type string afin d’obtenir un ami à partir de son numéro de téléphone.

```c#
public Ami this[string telephone]
{
    get
    {

        if (string.IsNullOrEmpty(telephone))
            throw new ArgumentNullException(nameof(telephone), "Le téléphone ne peut pas être nul ou vide");

        foreach (Ami ami in _amis)
        {
            if (ami.Telephone == telephone)
                return ami;
        }

	    throw new ArgumentNullException(nameof(telephone), "Aucun ami ne possède ce numéro de téléphone");

    }
    
}
```
::: danger Attention!
Si une valeur n'est pas trouvé alors vous devez lancer une exception et non pas retourner null.
:::

Il serait donc maintenant possible d’obtenir un ami dans la liste à partir de son numéro de téléphone de la manière suivante :

```c#
contacts = new Contacs();
contacts.Ajouter(new Ami("Boucher", "J-P", "418-651-1234"));
contacts["418-651-1234"].Nom = "Jean-Philippe";
Console.WriteLine(contacts[0]);
```

## Indexeur à plusieurs paramètres 

Un indexeur peut avoir plusieurs paramètres et chaque paramètre peut être d’un type différent :

```c#
public Type this[Type param1, … ,Type paramN ]
{
    get{
        // renvoie la valeur selon les index spécifiés
    }
    set{
        // définit la valeur selon les index spécifiés
    }
}
```

## Démonstration

Téléchargez la démonstration : [Exemple - indexeurs](https://gitlab.com/420-14b-fx/contenu/-/blob/main/bloc3/cours%2026/ExempleIndexeurs.zip)

## Exercice
::: tip S13E1 - Exercices sur l'utilisation les indexeurs

### Objectifs
Mettre en pratique la création et l'utilisation d'indexeur en c#

### Préparation
1) Créer un projet console nommé "**S13E1-Indexeurs**"

### Problème

1) Créer une classe Employe ayant les propriétés et méthodes suivantes :

**Propriétés publiques**:
- (string) Nom
- (string) Prénom
- (string) NAS

**Méthodes publiques**
- Constructeur paramétré permettant d'initialiser toutes les propriétés
- ToString() : Afficher l’information de l’employé 

2) Créer une classe nommée **ListeEmployes** ayant les propriétés et les méthodes suivantes :

**Attribut privé**:
- (List\<Employe\>) _employes : Contient la liste des employés

**Propriété public**
- (int) NbEmployes : Retourne le nombre d’employés dans la liste
- [int index] : Obtient ou Défini un employé à partir d’une position dans la liste d’employés. L’index ne doit pas être à l’extérieure des plages de valeurs possibles pour la liste d’employés.
- [string nas] : Obtient un employé dans la liste d’employés à partir de son NAS. Le NAS ne peut pas être vide ou nul. Si l’employé n’existe pas, alors on retourne nul.

**Constructeur**
- Sans paramètre : Initialise la liste des employés.

**Méthodes publiques :**
- Void Ajouter(Employe pEmploye) : Permet d’ajouter un employé à la liste. L’employé ne doit pas être nul.
- Bool Supprimer(Employe pEmploye) : Permet de supprimer un employé de la liste. L’employé ne doit pas être nul. Retourne vrai si la suppression a fonctionné. Faux sinon.

3) Tester l'ajout, la modification et la suppression d'employés dans une liste d'employés (LiseEmploye).


### Solution
Téléchargez la solution : [S12E2-CompositionObjets-Solution](https://gitlab.com/420-14b-fx/contenu/-/blob/main/bloc3/cours23/S12E2-CompositionObjets%20-%20Solution.zip?ref_type=heads)

:::