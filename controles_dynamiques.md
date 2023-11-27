---
outline: deep
---



# La génération de contrôle dynamiques

La génération de contrôle dynamique en WPF est un concept important pour les étudiants en informatique, car elle permet de créer des interfaces utilisateur flexibles et réactives. Cela permet de créer des ccontrôles (boutons, textes, listes, etc.) pendant l'exécution du programme plutôt qu'à la conception.

## Exemple : Création Dynamique d'un Bouton

Imaginons que vous voulez créer un bouton dynamiquement lorsqu'un utilisateur effectue une certaine action (par exemple, clique sur un autre bouton).

**Définition de la classe Personne :**

```c#
public class Personne
{
    private string _nom;
    private string _image;

    public string Nom
    {
        get { return _nom; }
        set { _nom = value; }
    }

    public string Image
    {
        get { return _image; }
        set { _image = value; }
    }

    public Personne(string nom, string image)
    {
        _nom = nom;
        _image = image;
    }
}

```

**Définition de l'Interface en XAML** :

```c#
<Window x:Class="ControlesDynamiquesExmple.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="MainWindow" Height="350" Width="525">
    <Grid>
       <ScrollViewer Height="300">
        <WrapPanel Name="wpImages">
            <!-- Les images seront ajoutées ici -->
        </WrapPanel>
    </ScrollViewer>
    </Grid>
</Window>
```

**Code du formulaire :**

```c#
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
        AfficherImages();
    }

    private void LoadImAfficherImagesages()
    {
        //Liste de personnes
        List<Personne> personnes = new List<Personne>
        {
            new Personne("Alice", "chemin/vers/alice.jpg"),
            new Personne("Bob", "chemin/vers/bob.jpg")
        };

        foreach (var personne in personnes)
        {
            
             //Création du bitmap de la personne
            BitmapImage biPersonne = new BitmapImage();
            biPersonne.BeginInit();
            biPersonne.UriSource = new Uri(plageHoraire.Film.Image);

             //Conserve en mémoire l'image pour ne pas block le fichier en écriture.
            biPersonne.CacheOption = BitmapCacheOption.OnLoad; 

            //Ignore les images en cache lors de la création.
            biPersonne.CreateOptions = BitmapCreateOptions.IgnoreImageCache;

            biPersonne.EndInit();


            //Création de la balise Image
            Image img = new Image();
            img.Stretch = Stretch.Uniform;
            img.Source = biFibiPersonnelm;
            img.Margin = new Thickness(2);
            img.HorizontalAlignment = HorizontalAlignment.Center;
            img.VerticalAlignment = VerticalAlignment.Center;
            img.Width = 125;
            img.Height = 125;

            //On l'objet personne dans le contrôle.
            img.Tag = personne;

            //Ajout de l'événement click sur l'image
            img.MouseLeftButtonUp += new MouseButtonEventHandler(Image_Click);
   
            //Ajout de l'image au WrapPanel
            wpImages.Children.Add(image);
        }
    }

    private void Image_Click(object sender, MouseButtonEventArgs e)
    {
        //Conversion de l'objet qui a généré l'événement en contrôle Image
        Image img = sender as Image;

        //Obtient l'objet Personne contenu dans la propriété tag du contrôle.
        Personne personne = img.Tag as Personne;

        if (personne is not null)
        {
            MessageBox.Show($"Nom: {personne.Nom}");
        }
    }
}



```

**Explications :**

- Pour chaque objet Personne, une image est créée à partir de la propriété Image
- L'objet Personne est stocké dans la propriété **Tag** de l'image. **Tous les contrôles WPF possède cette propriété.**
- Un gestionnaire d'événements **Image_Click** est attaché à chaque image. 
- Lorsqu'une image est cliquée, le gestionnaire d'événements extrait l'objet Personne du Tag et affiche son nom.

## Démonstration

Téléchargez la démonstraton : [DemoControlesDynamique.zip](https://gitlab.com/420-14b-fx/contenu/-/blob/main/bloc3/cours%2025/DemoControlesDynamique.zip)
