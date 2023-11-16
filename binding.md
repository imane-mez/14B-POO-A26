---
outline: deep
---

# Le Binding de données en WPF

Le "**binding**" en WPF est une technique puissante qui permet de lier des propriétés d'éléments d'interface graphique à des données. 



## DataContext

### Définition

DataContext est une propriété des éléments WPF qui définit le contexte de données pour le binding. Il s'agit de la source de données par défaut pour les propriétés de binding de l'élément et de ses enfants, sauf si le contexte de données est explicitement défini sur ces enfants.

### Utilisation 

DataContext est typiquement utilisé pour définir la source globale de données pour un élément de l'interface utilisateur et tous ses éléments enfants. Par exemple, si vous définissez le DataContext d'une fenêtre à un objet, tous les bindings dans cette fenêtre pourront par défaut utiliser les propriétés de cet objet.

### Portée 

DataContext peut être hérité. Si vous définissez le DataContext sur un conteneur parent, tous les enfants de ce conteneur pourront utiliser ce DataContext sauf s'ils ont leur propre DataContext défini.

### Exemple

Voici un exemple utilisant une classe Personne, pour afficher les d'un objet personne dans les champs d'un formulaire.

Soit la classe personne suivante : 

```c#
public class Personne
{
    private string nom;
    private string prenom;
    private ushort age;

    public string Nom
    {
        get { return nom; }
        set { nom = value; }
    }

    public string Prenom
    {
        get { return prenom; }
        set { prenom = value; }
    }

    public ushort Age
    {
         get { return age; }
        set { age = value; }
    }

```


Suppons un formulaire WPF contenant le StackPanel suivant :

```c#
 <StackPanel>
     <StackPanel Orientation="Horizontal">
         <Label Content="Nom" Margin="5" Width="75"/>
         <TextBox Text="{Binding Nom}" Margin="5"  Width="100"/>
     </StackPanel>

     <StackPanel Orientation="Horizontal">
         <Label Content="Prenom" Margin="5" Width="75"/>
         <TextBox Text="{Binding Prenom}" Margin="5" Width="100"/>
     </StackPanel>

     <StackPanel Orientation="Horizontal">
         <Label Content="Age" Margin="5" Width="75"/>
         <TextBox Text="{Binding Age}" Margin="5"  Width="100"/>
     </StackPanel>

 </StackPanel>
```

Code du formulaire : 
```c#
  public partial class MainWindow : Window
 {
     private Personne _personne;

     public Personne Personne
     {
         get { return _personne; }
         set { _personne = value; }
     }


     public MainWindow()
     {
         InitializeComponent();
    
         Personne = new Personne { Nom = "Dupont", Prenom = "Jean", Age = 30 };

         DataContext = Personne; //Binding du DataContext à l'objet Personne
     }
 }

```
Dans cet exemple, le binding de chaque contrôle est spécifié dans l'attribut **Text** en utilisant la valeur **{Binding NomPropriete}**. Ainsi, les valeurs des propriétés Nom, Prenom et Age de l'objet associé au DataContext du formulaire seront affiché.

### Type de binding

Le Binding en WPF  offre plusieurs modes qui déterminent comment les données sont transférées entre la source et la cible du binding. Voici les modes de binding les plus couramment utilisés :


#### TwoWay

- **Description** : Le mode TwoWay permet un binding bidirectionnel, ce qui signifie que toute modification de la propriété de la source de données ou de la propriété de la cible de binding entraîne une mise à jour de l'autre.

- **Utilisation Typique** : Ce mode est souvent utilisé pour des formulaires ou d'autres interfaces utilisateur interactives où les modifications apportées par l'utilisateur doivent être répercutées dans le modèle de données et vice versa.

#### OneWay (Par défaut)

- **Description** : En mode OneWay, les modifications de la source de données sont répercutées sur la propriété de la cible de binding, mais pas l'inverse.

- **Utilisation Typique** : Ce mode est utile pour des scénarios d'affichage seulement, où les données de la source doivent être affichées dans l'interface utilisateur, mais les modifications apportées dans l'interface utilisateur ne doivent pas être renvoyées à la source.

#### OneTime

- **Description** : Avec OneTime, le transfert des données se produit une seule fois au moment où le binding est établi. Après cela, les modifications ultérieures de la source de données ne sont pas répercutées dans la cible.

- **Utilisation Typique** : Ce mode est idéal pour des valeurs qui ne changent pas après le chargement initial ou pour des ressources statiques.

#### OneWayToSource

- **Description** : Le mode OneWayToSource est l'inverse de OneWay. Les modifications de la cible de binding sont répercutées dans la source de données, mais les modifications de la source ne sont pas répercutées dans la cible.

- **Utilisation Typique** : Ce mode peut être utilisé pour des contrôles d'entrée utilisateur où les changements doivent être envoyés à la source de données mais où la source de données elle-même ne change jamais (ou ses changements ne doivent pas être reflétés dans l'interface utilisateur).

## ItemsSource

### Définition

ItemsSource est une propriété spécifique à des contrôles qui affichent une collection d'éléments, comme ListBox, ComboBox, ou ListView. Elle définit la source de données pour la collection d'éléments à afficher dans le contrôle.

### Utilisation

ItemsSource est utilisé pour lier une collection de données (comme une liste ou un tableau) à un contrôle. Par exemple, vous pouvez lier une liste d'objets à un ListView en utilisant ItemsSource.


### Portée

La propriété ItemsSource concerne uniquement le contrôle auquel elle est appliquée et est utilisée pour définir les éléments à afficher dans ce contrôle.

### Exemple ListView

Le ListView dans WPF est un contrôle puissant qui permet d'afficher une liste d'éléments. Il est très utilisé pour afficher des données sous forme de liste, avec la possibilité de personnaliser l'affichage. 

**Liaison de Données**

Le ListView peut afficher des données provenant d'une source, comme une collection d'objets. Cela se fait via le "Data Binding" en utilsant la propriété **ItemSource**.

Voici un exemple de ListView affichant les données sous forme de Grid :

```c#
<ListView Name="lstPersonnes" Width="300" Height="200">
    <ListView.View>
        <GridView>
            <GridViewColumn Header="Nom" DisplayMemberBinding="{Binding Nom}" Width="100"/>
            <GridViewColumn Header="Prenom" DisplayMemberBinding="{Binding Prenom}"  Width="100"/>
            <GridViewColumn Header="Age" DisplayMemberBinding="{Binding Age}" Width="50" />
        </GridView>
    </ListView.View>
</ListView>
```

Voici le code du formalaire 

```c#
 public partial class MainWindow : Window
 {
     

     private List<Personne> _personnes;

     public List<Personne> Personnes
     {
         get { return _personnes; }
         set { _personnes = value; }
     }


     public MainWindow()
     {
         InitializeComponent();

         Personnes = new List<Personne>()
         {
             new Personne { Nom = "Dupont", Prenom = "Jean", Age = 30 },
             new Personne { Nom = "Durand", Prenom = "Marie", Age = 25 },
           
         };

         lstPersonnes.ItemsSource = Personnes; //Binding de la liste de personnes au listbox

        
     }
 }
```

Suite à une modification de la source de données du binding, il est possible de forcer une mise à jour de l'interface :

```c#
lstPersonnes.Items.Refresh();
```

### Templates et Personnalisation

Le ListView permet de personnaliser l'affichage des éléments via des "**Data Templates**".

Voici un exemple de création d'un template pour afficher les détails de chaque Person dans un format spécifique.

```c#
<ListView Name="lstPersonnes" Width="300" Height="200">
  <ListView.ItemTemplate>
    <DataTemplate>
      <StackPanel>
        <TextBlock Text="{Binding Nom}" FontWeight="Bold"/>
        <TextBlock Text="{Binding Prenom}"/>
        <TextBlock Text="{Binding Age}" />
      </StackPanel>
    </DataTemplate>
  </ListView.ItemTemplate>
</ListView>
```

### Formattage du texte d'un binding


Il est possible de modifier le format d'affichage de données dans un TextBlock utilisant le Data Binding dans des cas simple. 

Imaginons que vous ayez une propriété DateNaissance de type DateTime dans votre classe et que vous souhaitiez afficher la date de naissance d'une personne dans un format spécifique.

Dans votre fichier XAML, vous pouvez utiliser le data binding pour lier cette propriété à un TextBlock, tout en spécifiant un format d'affichage :

```c#
<TextBlock Text="{Binding DateNaissance, StringFormat='dd/MM/yyyy'}"/>
```

De même manière, vous pourriez modifier le format d'affichage d'un montant :

```c#
<TextBlock Text="{Binding Montant, StringFormat='C', ConverterCulture='fr-CA'}"/>
```