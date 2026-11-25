---
outline: deep
---

# Le ListView en WPF

Le `ListView` est un contrôle WPF qui permet d’afficher une liste d’objets, un peu comme un `ListBox` amélioré.

Il peut afficher des objets :

- en liste simple (comme le `ListBox` standard) ;
- en mode détaillé avec plusieurs colonnes (`GridView`) ;
- avec un _template_ personnalisé pour afficher de belles cartes, des images, etc. ;
- et surtout, il peut **lier automatiquement une liste d’objets grâce au binding**.

## Fonctionnement de base

Exemple simple : afficher une liste d’employés.

```c#
public class Employe
{
    public string Nom { get; set; }
    public string Poste { get; set; }
    public double Salaire { get; set; }

    public override string ToString()
    {
        return $"{Nom} - {Poste}";
    }
}
```

Dans le XAML :

```xml
<ListView x:Name="lstEmployes" />
```

Dans le code-behind :

```c#
lstEmployes.ItemsSource = listeEmployes;
```

::: tip À retenir
Quand on n’utilise **pas** de template, le `ListView` affiche le résultat de la méthode `ToString()` de chaque objet. C’est pourquoi il est utile de surcharger `ToString()` dans la classe affichée.
:::

## Comprendre le binding dans un ListView

Le binding (liaison de données) est le cœur du fonctionnement du `ListView`. Il faut bien distinguer **deux niveaux de binding** :

1. **Le binding de la collection** : on relie la liste d’objets au contrôle à l’aide de la propriété **`ItemsSource`**.
2. **Le binding de chaque élément** : à l’intérieur du template (ou des colonnes), chaque `{Binding Propriete}` fait référence aux propriétés **d’un seul objet** de la liste, appelé _l’élément courant_.

### 1. Lier la collection avec ItemsSource

```c#
lstEmployes.ItemsSource = listeEmployes;
```

Lorsqu’on affecte une collection à `ItemsSource`, le `ListView` crée **une ligne par objet** de la collection. On n’a pas besoin d’ajouter les éléments un par un : WPF s’en occupe automatiquement.

### 2. Le DataContext implicite de chaque ligne

Pour **chaque ligne** générée, WPF définit automatiquement le `DataContext` sur l’objet correspondant de la collection. C’est ce qui explique que, dans un template, on écrit directement :

```xml
<TextBlock Text="{Binding Nom}" />
```

Ici, `{Binding Nom}` ne pointe pas vers le formulaire, mais vers **la propriété `Nom` de l’objet affiché sur cette ligne**. Il n’y a donc pas besoin de préciser l’objet : le `ListView` s’occupe de connecter chaque ligne au bon élément.

::: warning Attention
Pour qu’un binding fonctionne, la cible doit être une **propriété publique** (`public ... { get; set; }`), et non un simple champ. Un champ privé ou une propriété mal nommée affichera une cellule vide **sans provoquer d’erreur**.
:::

### 3. Mettre à jour l’affichage

Avec une `List<T>` classique, le `ListView` ne « sait » pas quand la liste change. Après un ajout ou une suppression, on force le rafraîchissement :

```c#
lstEmployes.Items.Refresh();
```

## Affichage en mode tableau (GridView)

Le `ListView` peut fonctionner comme un **tableur**, parfait pour afficher plusieurs informations d’un employé.

```xml
<ListView x:Name="lstEmployes">
    <ListView.View>
        <GridView>
            <GridViewColumn Header="Nom" DisplayMemberBinding="{Binding Nom}" Width="150"/>
            <GridViewColumn Header="Poste" DisplayMemberBinding="{Binding Poste}" Width="150"/>
            <GridViewColumn Header="Salaire ($)" DisplayMemberBinding="{Binding Salaire}" Width="100"/>
        </GridView>
    </ListView.View>
</ListView>
```

Chaque `GridViewColumn` utilise `DisplayMemberBinding="{Binding Propriete}"` pour afficher une propriété de l’objet dans la colonne correspondante.

## Affichage personnalisé avec DataTemplate

Pour afficher chaque employé avec un style particulier, on utilise un `DataTemplate` dans `ItemTemplate` :

```xml
<ListView x:Name="lstEmployes">
    <ListView.ItemTemplate>
        <DataTemplate>
            <StackPanel Orientation="Horizontal" Margin="5">
                <TextBlock Text="{Binding Nom}" FontWeight="Bold" Width="150"/>
                <TextBlock Text="{Binding Poste}" Width="120"/>
                <TextBlock Text="{Binding Salaire, StringFormat='C', ConverterCulture='fr-CA'}" Foreground="Gray"/>
            </StackPanel>
        </DataTemplate>
    </ListView.ItemTemplate>
</ListView>
```

Dans ce template, chaque `{Binding ...}` fait référence à l’objet `Employe` affiché sur la ligne. On peut même formater les données, par exemple afficher le salaire en devise avec `StringFormat='C'`.

## Afficher des images dans un ListView (par binding)

Un cas très fréquent est l’affichage d’une **image par ligne** (photo d’un employé, affiche d’un film, etc.).

Supposons que la classe possède une propriété contenant le **chemin du fichier image** :

```c#
public class Employe
{
    public string Nom { get; set; }
    public string Poste { get; set; }
    public double Salaire { get; set; }

    // Chemin complet vers le fichier image sur le disque
    public string Image { get; set; }
}
```

### Le problème du « verrou » (lock) sur le fichier image

En WPF, si on lie directement une propriété `Source` d’un contrôle `Image` à un chemin de fichier, **WPF garde le fichier ouvert** tant que l’image est affichée. Cela provoque deux problèmes courants :

- impossible de **supprimer, déplacer ou remplacer** le fichier tant que l’application l’affiche ;
- si la **même image** est affichée dans **deux contrôles `Image` en même temps** (par exemple dans la liste **et** dans un panneau de détails du formulaire), le fichier peut rester verrouillé, ce qui génère une `IOException` quand on tente de le modifier.

### La solution : BitmapImage avec CacheOption="OnLoad"

Pour éviter ce verrou, on crée explicitement un `BitmapImage` avec l’option **`CacheOption="OnLoad"`**. Cette option demande à WPF de **charger entièrement l’image en mémoire au moment du chargement**, puis de **refermer immédiatement le fichier**. L’image n’est donc plus liée au fichier sur le disque : elle peut être partagée par plusieurs contrôles sans jamais provoquer de verrou.

```xml
<ListView x:Name="lstEmployes">
    <ListView.ItemTemplate>
        <DataTemplate>
            <StackPanel Orientation="Horizontal" Margin="5">

                <!-- Image chargée en mémoire (OnLoad) : aucun verrou sur le fichier -->
                <Image Width="50" Height="50" Margin="0,0,10,0">
                    <Image.Source>
                        <BitmapImage CacheOption="OnLoad" UriSource="{Binding Image}" />
                    </Image.Source>
                </Image>

                <StackPanel VerticalAlignment="Center">
                    <TextBlock Text="{Binding Nom}" FontWeight="Bold"/>
                    <TextBlock Text="{Binding Poste}" Foreground="Gray"/>
                </StackPanel>

            </StackPanel>
        </DataTemplate>
    </ListView.ItemTemplate>
</ListView>
```

::: tip Pourquoi ça fonctionne même avec deux contrôles Image ?
Avec `CacheOption="OnLoad"`, chaque `BitmapImage` copie les données de l’image en mémoire puis **libère le fichier**. Donc, si la même photo est affichée à la fois dans le `ListView` et dans un second contrôle `Image` (par exemple un aperçu de l’élément sélectionné), **aucun des deux ne garde le fichier ouvert**. Le fichier reste libre : on peut le supprimer ou le remplacer sans erreur.
:::

::: warning Le piège du comportement par défaut
Par défaut, `CacheOption` vaut `OnDemand` : WPF ne charge l’image qu’au besoin et **garde le fichier ouvert**. C’est justement ce comportement qui cause les verrous. Il faut donc **toujours** préciser `CacheOption="OnLoad"` lorsqu’on affiche une image provenant d’un fichier que l’on pourrait vouloir modifier ou supprimer.
:::

### Exemple : la même image dans la liste et dans un aperçu

Voici comment afficher l’image de l’employé **sélectionné** dans un second contrôle (un aperçu agrandi), sans jamais verrouiller le fichier. On garde le XAML simple (pas de `DataContext`) et on gère la sélection dans le **code-behind**.

XAML :

```xml
<StackPanel Orientation="Horizontal">

    <!-- La liste avec une vignette par ligne -->
    <ListView x:Name="lstEmployes" Width="250"
              SelectionChanged="lstEmployes_SelectionChanged">
        <ListView.ItemTemplate>
            <DataTemplate>
                <StackPanel Orientation="Horizontal" Margin="5">
                    <Image Width="40" Height="40" Margin="0,0,10,0">
                        <Image.Source>
                            <BitmapImage CacheOption="OnLoad" UriSource="{Binding Image}" />
                        </Image.Source>
                    </Image>
                    <TextBlock Text="{Binding Nom}" VerticalAlignment="Center"/>
                </StackPanel>
            </DataTemplate>
        </ListView.ItemTemplate>
    </ListView>

    <!-- Aperçu de l'élément sélectionné : rempli dans le code-behind -->
    <Image x:Name="imgApercu" Width="150" Height="150" Margin="20"/>

</StackPanel>
```

Code-behind :

```c#
public partial class MainWindow : Window
{
    private List<Employe> _employes;

    public MainWindow()
    {
        InitializeComponent();

        _employes = new List<Employe>()
        {
            new Employe { Nom = "Jean Dupont", Poste = "Vendeur", Image = @"C:\Images\jean.png" },
            new Employe { Nom = "Marie Durand", Poste = "Gérante", Image = @"C:\Images\marie.png" },
        };

        lstEmployes.ItemsSource = _employes; // Binding de la collection au ListView
    }

    private void lstEmployes_SelectionChanged(object sender, SelectionChangedEventArgs e)
    {
        if (lstEmployes.SelectedItem is Employe employe)
        {
            // Nouveau BitmapImage en mode OnLoad : le fichier n'est jamais verrouillé,
            // même s'il est déjà affiché dans le ListView en même temps.
            BitmapImage image = new BitmapImage();
            image.BeginInit();
            image.CacheOption = BitmapCacheOption.OnLoad;
            image.UriSource = new Uri(employe.Image);
            image.EndInit();

            imgApercu.Source = image;
        }
        else
        {
            imgApercu.Source = null;
        }
    }
}
```

Les deux contrôles `Image` (celui du `ListView` et `imgApercu`) utilisent chacun leur propre `BitmapImage` en mode `OnLoad` : le même fichier peut donc être affiché deux fois **simultanément** sans rester verrouillé.

## Afficher des images provenant de ressources

Au lieu de lire des images sur le disque, on peut **intégrer les images directement dans le projet** (ressources embarquées). C’est utile pour des images fixes (icônes, images par défaut, logos) qui accompagnent toujours l’application.

### 1. Ajouter l’image au projet

1. Déposer le fichier image dans un dossier du projet, par exemple `Images/`.
2. Dans les **propriétés** du fichier (clic droit → Propriétés), choisir :
   - **Action de génération** (_Build Action_) : `Resource`.

L’image est alors **compilée dans l’exécutable** : elle n’a plus besoin d’exister comme fichier séparé à côté du programme.

### 2. Référencer la ressource avec un URI « pack »

On accède à une ressource embarquée grâce à la syntaxe **pack URI** :

```
pack://application:,,,/NomDuDossier/NomDuFichier.png
```

Pour une image fixe dans un template, on peut l’indiquer directement :

```xml
<Image Width="50" Height="50"
       Source="pack://application:,,,/Images/defaut.png" />
```

::: tip Fichier disque ou ressource ?

- **Fichier sur le disque** : utile pour des images qui changent (photos ajoutées par l’utilisateur). Attention aux verrous → `CacheOption="OnLoad"`.
- **Ressource embarquée** : idéale pour des images fixes livrées avec l’application. Elles ne risquent pas d’être supprimées par l’utilisateur et sont toujours disponibles.
  :::

## Récupérer l’élément sélectionné

Le `ListView` permet d’obtenir directement l’objet choisi par l’utilisateur grâce à la propriété `SelectedItem`.

```c#
// Avec un transtypage explicite
Employe e = (Employe)lstEmployes.SelectedItem;

// Ou avec l'opérateur as (retourne null si le type ne correspond pas)
Employe e = lstEmployes.SelectedItem as Employe;
```

::: warning
Lorsqu’aucun élément n’est sélectionné, `SelectedItem` vaut `null`. Il faut donc vérifier la valeur avant de l’utiliser :

```c#
if (lstEmployes.SelectedItem is Employe e)
{
    // utiliser e en toute sécurité
}
```

:::
