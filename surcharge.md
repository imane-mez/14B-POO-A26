### Appel d'un constructeur
Un constructeur agit un peu comme une fonction. Il est donc possible pour un constructeur d'appeler au autre constructeur. Voici un exemple :

```c#
class Personne
{
    public string nom;
    public string age;
    public string nomEnfant;
    

    // Premier constructeur
    public Personne(string nom, byte age)
    {
        this.nom = nom;
        this.age = age;
    
    }

    // Deuxième constructeur qui utilise le premier constructeur
    public Personne(string nom, byte age, string nomEnfant) : this(nom, age) // Appel du premier constructeur
    {
        this.nomEnfant = nomEnfant; // Mise à jour du nom pour l'enfant
      
    }
}
```
Dans cet exemple, le deuxième construteur appel le premier constructeur en lui passant le nom et age de la personne en paramètre et par la suite va mettre à jour le nom de l'enfant.