# La composition d'objets

La composition d'objets en programmation est une manière de modéliser les relations entre différents objets. En termes simples, cela signifie qu'un objet est composé d'un ou de plusieurs autres objets. C'est une façon de dire que certains objets dépendent d'autres objets pour fonctionner.

Imaginez que vous devez concevoir un programme permettant gérer la vente des mobiliers de cuisine. Un mobilier de cuisine est composée d'une table et d'un ensemble de chaises. Chaque partie est un objet en soi, et la voiture est une composition de ces parties.

Voici un exemple : 

`Table.cs`
```c#


/// <summary>
/// Classe représentant une table de cuisine.
/// </summary>
public class Table
{
    /// <summary>
    /// Marge de profit en % lors de la vente.
    /// </summary>
    private const float MARGE_PROFIT = 0.20f;

    /// <summary>
    /// Modèle de table.
    /// </summary>
    private String _modele;

    /// <summary>
    /// Coût de fabrication.
    /// </summary>
    private decimal _coutFabrication;

    /// <summary>
    /// Obtient ou défini le modèle de la table
    /// </summary>
    public String Modele
    {
        get { return this._modele; }
        private set { this._modele = value; }
    }

    /// <summary>
    /// Obtient ou défini le coût de fabrication.
    /// </summary>
    public decimal CoutFabrication
    {
        get { return this._coutFabrication; }
        private set { this._coutFabrication = value; }
    }

    /// <summary>
    /// Obtient ou défni le prix de vente de la table
    /// </summary>
    public decimal PrixVente
    {
        get { return CalculerPrixVente(); }
    }

    /// <summary>
    /// Constructeur paramétré qui accepte les deux attributs d'une table.
    /// </summary>
    /// <param name="modele">Modèle de table.</param>
    /// <param name="coutFabrication">Coût de fabrication.</param>
    public Table(String modele, decimal coutFabrication)
    {
        Modele = modele;
        CoutFabrication = coutFabrication;
    }

    /// <summary>
    /// Permet d'obtenir le prix de vente suggéré selon la marge de profit.
    /// </summary>
    /// <returns>Prix de vente suggéré.</returns>
    private decimal CalculerPrixVente()
    {
        return this.CoutFabrication * (decimal)(1 + MARGE_PROFIT);
    }

  
}

```


`Chaise.cs`
```c#

/// <summary>
/// Classe représentant une chaise de cuisine.
/// </summary>
public class Chaise
{
   

    /// <summary>
    /// Marge de profit en % lors de la vente.
    /// </summary>
    private const float MARGE_PROFIT = 0.25f;

     
    /// <summary>
    /// Modèle de chaise.
    /// </summary>
    private String _modele;

    /// <summary>
    /// Indique si la chaise est de type capitaine.
    /// </summary>
    private bool _estCapitaine;

    /// <summary>
    /// Coût de fabrication.
    /// </summary>
    private decimal _coutFabrication;

       

    /// <summary>
    /// Obtient ou défini le modèle de table.
    /// </summary>
    public String Modele
    {
        get { return _modele; }
        private set { _modele = value; }
    }

    /// <summary>
    /// Obtient ou défini si la chaise est de type capitaine.
    /// </summary>
    public bool EstCapitaine
    {
        get { return _estCapitaine; }
        private set { _estCapitaine = value; }
    }

    /// <summary>
    /// Obtient ou défini le coût de fabrication.
    /// </summary>
    public decimal CoutFabrication
    {
        get { return _coutFabrication; }
        private set { _coutFabrication = value; }
    }

    /// <summary>
    /// Obtient le prix de vente
    /// </summary>
    public decimal PrixVente
    {
        get { return CalculerPrixVente(); }
    }
    

    /// <summary>
    /// Constructeur paramétré qui accepte les trois attributs d'une chaise.
    /// </summary>
    /// <param name="modele">Modèle de chaise.</param>
    /// <param name="estCapitaine">Indique si la chaise est capitaine.</param>
    /// <param name="coutFabrication">Coût de fabrication.</param>
    public Chaise(String modele, bool estCapitaine, decimal coutFabrication)
    {
        Modele = modele;
        EstCapitaine = estCapitaine;
        CoutFabrication = coutFabrication;
    }

    /// <summary>
    /// Permet d'obtenir le prix de vente suggéré selon la marge de profit.
    /// </summary>
    /// <returns>Prix de vente suggéré.</returns>
    private decimal CalculerPrixVente()
    {
        return CoutFabrication * (decimal) (1 + MARGE_PROFIT);
    }


}

```

Voici maintenant comment peut être représenté la composition d'un mobilier de cuisine qui pourrait être vendu moins cher par rapport à l'achat de chaque article individuellement

`MobilierCuisine.cs`
```c#
/// <summary>
/// Classe représentant un mobilier de cuisine.
/// </summary>
public class MobilierCuisine
{


    /// <summary>
    /// Réduction en % lors de l'achat d'un mobilier par rapport à l'achat de chaque article individuellement.
    /// </summary>
    private const float REDUCTION = 0.07f;


    /// <summary>
    /// La table du mobilier.
    /// </summary>
    private Table _table;

    /// <summary>
    /// Les chaises du mobilier.
    /// </summary>
    private Chaise[] _lesChaises;

 
    /// <summary>
    /// Obtient ou défini la table du mobilier.
    /// </summary>
    public Table Table
    {
        get { return _table; }
        private set { _table = value; }
    }

    /// <summary>
    /// Obtient ou défini les chaises du mobilier.
    /// </summary>
    public Chaise[] LesChaises
    {
        get { return _lesChaises; }
        set { _lesChaises = value; }
    }

    /// <summary>
    /// Obtient lombre de chaises dans le mobilier.
    /// </summary>
    public int NbChaises
    {
        get { return _lesChaises.Length; }
    }

    /// <summary>
    /// Constructeur paramétré qui accepte les deux attributs d'un mobilier de cuisine.
    /// </summary>
    /// <param name="table">La table du mobilier.</param>
    /// <param name="lesChaises">Les chaises du mobilier.</param>
    public MobilierCuisine(Table table, Chaise[] lesChaises)
    {
        Table = table;
        LesChaises = lesChaises;
    }

    /// <summary>
    /// Obtient le prix de vente
    /// </summary>
    public decimal PrixVente
    {
        get { return CalculerPrixVente(); }
    }

    /// <summary>
    /// Permet d'obtenir le prix de vente suggéré selon la réduction.
    /// </summary>
    /// <returns>Prix de vente suggéré.</returns>
    public decimal CalculerPrixVente()
    {
        decimal prixVente = 0;

        // Ajout du prix de la table
        prixVente += Table.PrixVente;

        // Ajout du prix de chaque chaise.
        for (int i = 0; i < LesChaises.Length; i++)
            prixVente += LesChaises[i].PrixVente;

        // Réduction pour l'achat d'un mobilier.
        prixVente = prixVente * (decimal) (1 - REDUCTION);

        return prixVente;
    }

}
```

Voici un exemple du programme :

`programme.cs`

```c#

    private static void Main(string[] args)
    {
        // Création d'un mobilier Bistro constitué d'une table, de 4 chaises normales et de 2 chaises capitaines.

        // Vecteur de 6 chaises.
        Chaise[] vectChaisesBistro = new Chaise[6];

        // Ajout des chaises normales dans le vecteur.
        for (int i = 0; i < 4; i++)
            vectChaisesBistro[i] = new Chaise("Bistro", false, 90.50m);

        // Ajout des chaises capitaines dans le vecteur.
        for (int i = 4; i < 6; i++)
            vectChaisesBistro[i] = new Chaise("Bistro", true, 130.25m);

        // Création de la table.
        Table tableBistroCarree = new Table("Bistro carrée", 879.00m);

        // Création du mobilier de cuisine.
        MobilierCuisine mobilierBistro = new MobilierCuisine(tableBistroCarree, vectChaisesBistro);

        // Appel de la méthode statique qui affiche certaines informations sur le mobilier.
        Program.AfficherInfoMobilier(mobilierBistro);
    }


    /// <summary>
    /// Affiche certaines informations sur le mobilier.
    /// </summary>
    /// <param name="mobilier">Le mobilier pour lequel on désire afficher des informations.</param>
    private static void AfficherInfoMobilier(MobilierCuisine mobilier)
    {
        // Affichage du prix de vente suggéré du mobilier.
        Console.WriteLine($"Prix de vente suggéré = {mobilier.PrixVente:c}");

        // Affichage du modèle de la table.
        Console.WriteLine($"\nModèle de la table : {mobilier.Table.Modele}");

        // Affichage du prix de vente suggéré de la table.
        Console.WriteLine($"Prix de vente de la table : {mobilier.Table.PrixVente:c}" );

        // Affichage du nombre de chaise dans le mobilier.
        Console.WriteLine($"Nombre de chaises : {mobilier.NbChaises}");

        
        // Affichage du modèle de la 3e chaise.
        Console.WriteLine($"\nModèle de la 3e chaise : {mobilier.LesChaises[2].Modele}");

        
    }

```