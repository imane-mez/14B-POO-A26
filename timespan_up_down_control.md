# Affichage du temps en WPF

Il n'existe malheureusement pas de contrôle WPF permettant la gestion du temps. Pour ce faire, vous devrez utiliser une librairie externe. 

Voici comment faire pour utiliser la librairie https://www.nuget.org/packages/Extended.Wpf.Toolkit
afin d'utiliser le contrôle [TimeSpanUpDown](https://github.com/xceedsoftware/wpftoolkit/wiki/TimeSpanUpDown).

1) Cliquer avec le bouton de droite de la souris sur votre projet WPF et sélecitionner **Gérer les packages NuGet ...**
2) Sélectionner l'ongle **Parcourir**
3) inscrire **Extended.Wpf.Toolkit** dans la barre de recherche
4) Sélectionner l'item **Extended.Wpf.Toolkit**
5) Cliquer sur le bouton **Installer** dans la section de droite

Dans le formulaire WPF dans lequel vous désirez utiliser le contrôle :

1) Dans la balise Windows ajouter l'attribut suivant : 

```html
<Window 
        xmlns:xctk="http://schemas.xceed.com/wpf/xaml/toolkit" 
>

```

3) Utiliser la balise suivante pour utilsier le contrôle : 

```html
   <xctk:TimeSpanUpDown x:Name="tsTemps" Height="25" Width="100" HorizontalAlignment="Left"/>
```

4) Pour affecter une valeur au contrôle.  

```c#
this.tsTemps.Value = new TimeSpan(0, 8, 30, 0);

```

5) Pour affecter lire une valeur du contrôle

```c#
TimeSpan temps = (TimeSpan) tsTemps.Value;

```

6) Pour n'afficher que les heures et les secondes, vous pouvez ajouter les attributs suivant au contrôle.

```html
<xlt:TimeSpanUpDown x:Name="tsHeure" Width="100" Height="25" 
        ShowDays="False" 
        ShowSeconds="False"/>

```
## Demonstration

**Télécharger la démonstration** : [ExempleDatePickerTimeSpanUpDown](https://gitlab.com/420-14b-fx/contenu/-/blob/main/bloc2/cours%2014/ExempleDatePickerTimeSpanUpDown.zip?ref_type=heads)