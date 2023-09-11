# Méthode ToSring()

Comme vous l'avez appris, en .net tout est un objet. Ainsi, toutes les classes que nous créons héritent implicitement de la classe Object. Cette classe est une classe système qui offre des méthodes communes à tous les objets. Ainsi, toutes les classes que nous créons possèdent certaines méthodes cachées. 

Une de ces méthodes est la méthode **ToString()**. Vous l'avez déjà utilisée lorsque vous avez dû convertir par exemple un nombre en chaîne de caractères. 

Exemple :

```c#
int nb = 10;
string chaineNombre = nb.ToString();
```

Cette méthode retourne une représentation d'un objet sous forme de chaîne de caractères. Comme vous avez pu le constater, il arrive souvent que nous devions afficher les détails d'un objet dans un programme. Cette méthode sert justement à cela!

Par défaut, la méthode **ToString()** d'un objet retourne le **nom de la classe et l'espace de nom auquel elle appartient**. Prenons par exemple la classe Rectangle qui possède l'espace de nom DemoRectangle. Il est possible de substituer la méthode ToSring() par défaut afin de spécifier comment nous désirons représenter un objet Rectangle sous forme de chaîne de caractère. Voici comment faire :

1) Vous devez déclarer une méthode publique **ToString** dans votre classe en la préfixant du mot clé **override**

```c#
public override string ToString()
{

}
```

2) Vous devez implémenter la méthode pour qu'elle **retourne une chaîne de caractères**


```c#
public override string ToString()
{
    return $"Hauteur :  {Hauteur}\n Largeur : {Largeur}"; 
}
```
Il est possible d'utiliser la méthode ToString() de manière **implicite** ou **explicite** : 

```c#
public override string ToString()
{
   Rectangle rect = new Rectangle(10, 20);

    //Explicite
    Console.WriteLine(rect.ToString())  //Affichera : Hauteur : 10, Largeur : 20

    //Implicite 
    Console.WriteLine(rect)  //Affichera : Hauteur : 10, Largeur : 20

}
```

La méthode ToString() est également utilisé pour représenter un objet contenu dans certains contrôles d'un **formulaire WPF** (listbox, combobox, etc.). Par exemple, sinon nous avons la classe Personne suivantes : 

```c#
class Personne
{


    private string _nom;
    private string _prenom;
 
    public string Nom
    {
        get { return _nom; }
        set { _nom = value; }
    }

    public string Prenom
    {
        get { return _prenom; }
        set { _prenom = value; }
    }

 
    public Personne(string nom, string prenom)
    {
        Nom = nom;
        Prenom = prenom;
    }
 
    public override string ToString()
    {
        return $"{Nom}, {Prenom}";
    }
   
}
```
Et que nous avons une interface avec un listbox nommé lstPersonnes :

![Liste d'employés vide](./images/tostring_1.png)

Il est possible d'ajouter directement un objet Personne au listbox de la manière suivante :

```c#
Personne unePersonne = new Personne("Vézina", "Martin");
lstPersonnes.Items.Add(unePersonne);
```
Ainsi, l'objet sera présenté graphiquement dans le listbox en appelant la méthode ToString() de l'objet :

![Liste d'employés vide](./images/tostring_2.png)