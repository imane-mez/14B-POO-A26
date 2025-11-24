# Listview en WPF

Le ListView est un contrôle WPF qui permet d’afficher une liste d’objets, un peu comme un ListBox amélioré.
Il peut afficher des objets :

- en liste simple (comme le listebox standard)
- ou en mode détaillé avec plusieurs colonnes
- avec un Template personnalisé pour afficher de belles cartes, images, etc.
- et surtout, il peut lier automatiquement une liste d’objets grâce au binding.

## Fonctionnement de base

Exemple simple : afficher une liste d’employés

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

## Affichage en mode tableau (GridView)

Le ListView peut fonctionner comme un **tableur**, parfait pour afficher plusieurs infos d’un employé.

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

## Affichage personnalisé avec DataTemplate

Pour afficher chaque employé avec un style particulier :

```c#
<ListView x:Name="lstEmployes">
    <ListView.ItemTemplate>
        <DataTemplate>
            <StackPanel Orientation="Horizontal" Margin="5">
                <TextBlock Text="{Binding Nom}" FontWeight="Bold" Width="150"/>
                <TextBlock Text="{Binding Poste}" Width="120"/>
                <TextBlock Text="{Binding Salaire}" Foreground="Gray"/>
            </StackPanel>
        </DataTemplate>
    </ListView.ItemTemplate>
</ListView>

```

### Comment récupérer l’employé sélectionné ?

Le ListView permet d’obtenir directement l’objet choisi.

```c#

Employe e = (Employe)lstEmployes.SelectedItem;

//ou

Employe e - lstEmployes.SelectedItem as Employe;


```

