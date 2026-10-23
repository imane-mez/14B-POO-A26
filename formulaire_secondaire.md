---
outline: deep
---

# Utilisation de plusieurs formulaires en WPF

Lors de la création d’une application WPF, il peut être intéressant voir nécessaire d’utiliser plusieurs fenêtres.  Voici divers contextes dans lesquels l’utilisation de plusieurs fenêtres peut être utile :

- Pour solliciter l'entrée ou la confirmation de l'utilisateur avant de pouvoir revenir à la fenêtre principale.
- Permettre aux utilisateurs d'effectuer plusieurs tâches simultanément sans avoir à passer constamment d'un écran ou d'une vue à l'autre.
- Des fenêtres secondaires peuvent agir comme des outils ou des palettes de fonctions pour l'application principale (comme un panneau d'outils de dessin dans une application graphique).
- Dans les applications ayant un workflow complexe, l'utilisation de fenêtres supplémentaires peut aider à diviser le flux de travail en sections plus gérables, offrant ainsi une expérience utilisateur plus claire et structurée.
- Pour les applications nécessitant la visualisation et la manipulation de grandes quantités de données, des fenêtres supplémentaires peuvent être utilisées pour afficher des ensembles de données différents simultanément.

## Création d’un formulaire secondaire : 
- Dans votre projet WPF, faites un clic droit sur le projet.
- Sélectionnez Ajouter   Fenêtre (WPF)
- Nommez la nouvelle fenêtre (préfixer le nom de Form) et cliquez sur Ajouter.

## Utiliser un formulaire secondaire

Un formulaire WPF est un objet comme tout autre objet, mais ayant une interface graphique. Ainsi comme tout objet, celui-ci possède ;
- Des propriétés
- Un constructeur
- Des méthodes et des événements

Ainsi, pour utiliser un formulaire secondaire, il s’agit de créer une instance de l’objet correspondant : 

```c#
//Déclaration et instanciation d'un objet du type du formulaire secondaire 
FormSecondaire frmSecondaire = new FormSecondaire();
```

## Afficher un formulaire secondaire

Il y a deux manières d’afficher un formulaire secondaire :

1) **Dialogue non modal** : 

    - Une fenêtre de dialogue non modale permet à l'utilisateur d'interagir avec la fenêtre parente pendant qu'elle est ouverte.
    - Elle n'oblige pas l'utilisateur à répondre immédiatement et permet de travailler en parallèle sur d'autres parties de l'application.

```c#
//Instanciation d'un objet du type du formulaire secondaire 
FormSecondaire frmSecondaire = new FormSecondaire();
//Affichage du formulaire. Show() ne bloque pas l'exécution du code suite à l'affichage du formulaire
frmSecondaire.Show();

//Le code ici sera exécuté suite à l'affichage du formulaire

```

2) **Dialogue modal**: 
    - Une fenêtre de dialogue modale est une fenêtre qui nécessite une action de l'utilisateur avant qu'il puisse retourner à la fenêtre parente.
    - Elle bloque l'accès à la fenêtre qui l'a générée jusqu'à ce que l'utilisateur ferme la boîte de dialogue modale.

```c#
//Instanciation d'un objet du type du formulaire secondaire 
FormSecondaire frmSecondaire = new FormSecondaire();

//ShowDialog() bloque l'exécution du code tant que le formulaire secondaire n'est pas fermé.
frmSecondaire.ShowDialog();

//Le code ici ne s'exécute pas tant que le formulaire secondaire n'est pas fermé.

```

## Comparaison en bref:

| Aspect                    |      Dialogue modal                                   |  Dialogue non modal |
| -------------             | -----------                                           | ---- |
| Interaction               | Bloque l'accès à la fenêtre mère                      | Permet l'accès à la fenêtre mère              |
| Utilisation Typique       | Confirmations, alertes, saisie de données cruciales   | Outils, options, informations complémentaires |
|Attention de l'utilisateur | Exige une action immédiate                            |  Permet des actions en parallèle              |
|Flux de travail            | Interruption du flux de travail                       |Flux de travail continu                        |

## Passer des valeurs à un formulaire

Étant donné qu’un formulaire est un objet, il est possible de lui ajouter des attributs, des propriétés et constructeurs. Les propriétés ainsi que le constructeur peuvent être utilisés pour passer des valeurs à un formulaire.  
Supposons que nous désirons faire afficher le nom et le prénom d’une personne dans un formulaire secondaire :

FormSecondaire.cs

```c#
public partial class FormSecondaire : Window
{
    /// <summary>
    /// Personne
    /// </summary>
    private Personne _personne;

    /// <summary>
    /// Obtient ou définit la personne utilisée dans le formulaire
    /// </summary>
    public Personne Personne
    {
        get { return _personne; }
        private set { _personne = value; }
    }

    public FormSecondaire(Personne personne)
    {
        InitializeComponent();

        //Affectation de la valeur du paramètre du constructeur 
        // à la propriété correspondante
        Personne = personne;
    }

    private void Window_Loaded(object sender, RoutedEventArgs e)
    {
        //Affichage des propriétés de l'objet Personne
        txtNom.Text = Personne.Nom;
        txtPrenom.Text = Personne.Prenom;
    }
}
```

Voici comment afficher une personne à partir de ce formulaire

MainWindow.cs

```c#


 Personne p1 = new Personne("Vézina", "Martin");

 //Instanciation d'un objet du type du formulaire secondare
 //en passant l'objet personne à afficher comme paramètre du constructeur.
 FormSecondaire frmSecondaire = new FormSecondaire(p);

 //Affichage du formulaire
 frmSecondaire.ShowDialog();
```

#### Démonstration

Télécharger la démonstration commplète : [DemoFormSecondaire](https://github.com/imane-mez/14B-POO-A26-Exercices/tree/main/bloc2/d%C3%A9mos/Cours%2014)

 
## Obtenir les valeurs d’un formulaire
Il arrive souvent qu’un formulaire secondaire soit utilisé pour obtenir de l’information d’un utilisateur. Par exemple, nous pourrions utiliser le formulaire secondaire suivant afin d’obtenir l’information nécessaire pour créer une personne :

![Formulaire secondaire](/images/formulaire_secondaire.png)

Ainsi lorsque l’utilisateur clique sur le bouton « Ajouter », cela devra créer une nouvelle personne et fermer le formulaire. S’il clique sur le bouton « Annuler », cela devra seulement fermer la fenêtre. Mais comment savoir sur quel bouton l’utilisateur a cliqué? 

Un peu comme le MessagBox, un formulaire possède une propriété nommée **DialogueResult** permettant de spécifier le résultat de la méthode **ShowDialog()** du formulaire. Cette propriété est de type **bool?** et peut donc avoir les 3 valeurs suivantes :
- Null
- True
- False

Ainsi, il peut être possible de spécifier que l’utilisateur a cliqué sur « Ajouter » en affectant la valeur **True** au DialogueResult et qu’il a cliqué sur Annuler en affectant la valeur **False**. La modification de la valeur de cette propriété a comme effet de fermer le formulaire.

FormAjoutPersonne.cs

```c#
  private void btnAjouter_Click(object sender, RoutedEventArgs e)
  {
    //Création de l'objet personne et affectation à la propriété correspondante du formulaire
 	Personne  = new Personne(txtPrenom.Text.Trim(), txtNom.Text.Trim());   

 	//Indique que l'utilisateur a cliqué sur Ajouter et ferme le formulaire
 	DialogResult = true;  
}

  private void btnAnnuler_Click(object sender, RoutedEventArgs e)
  {
      //Indique que l'utilisateur a cliqué sur Annuler et ferme le formulaire.
  	DialogResult = false;
  }
```
Il est maintenant possible de récupérer cette valeur dans le formulaire principal et déterminer quelle action entreprendre :

```c#
private void btnAjouterPersonne_Click(object sender, RoutedEventArgs e)
{
    
    //Création du formulaire d’ajout
    FormAjouterPersonne frmAjouterPersonne = new FormAjouterPersonne();

    //Affichage du formulaire et vérification si l'utilisateur a cliqué sur Ajouter
    if(frmAjouterPersonne.ShowDialog() == true)
    {
        //Ajout de l'objet créé à la liste de personnes
        ListePersonnes.Add(frmAjouterPersonne.Personne);
    }

} 

```


## Utiliser un même formulaire pour plusieurs actions (ajouter, modifier, supprimer)

Les formulaires d'ajout, de modification et de suppression se ressemblent beaucoup : ils affichent les mêmes champs. Plutôt que de créer trois formulaires, il est possible d'en utiliser **un seul** et d'adapter son comportement selon l'action demandée.

### 1. Définir les actions possibles

Une énumération permet d'indiquer l'action à effectuer :

```c#
public enum ActionFormulaire
{
    Ajouter,
    Modifier,
    Supprimer
}
```

### 2. Passer l'action (et l'objet) au constructeur

Le formulaire reçoit l'action ainsi que, pour la modification et la suppression, l'objet concerné. Pour un ajout, aucun objet n'existe encore : le paramètre est donc optionnel.

FormPersonne.cs

```c#
public partial class FormPersonne : Window
{
    private ActionFormulaire _action;

    /// <summary>
    /// Obtient ou définit la personne ajoutée, modifiée ou supprimée
    /// </summary>
    public Personne Personne
    {
        get
        {
            return _personne
        }

        private set
        {
            _personne = value;
        }

    public FormPersonne(ActionFormulaire action, Personne? personne = null)
    {
        InitializeComponent();

        _action = action;
        Personne = personne;
    }

    private void Window_Loaded(object sender, RoutedEventArgs e)
    {
        InitialiserFormulaire();
    }

    private void InitialiserFormulaire()
    {
        //Remplit les champs si une personne est fournie (modifier et supprimer)
        if (Personne != null)
        {
            txtPrenom.Text = Personne.Prenom;
            txtNom.Text = Personne.Nom;
        }

        //Adapte l'interface selon l'action
        switch (_action)
        {
            case ActionFormulaire.Ajouter:
                Title = "Ajouter une personne";
                btnConfirmer.Content = "Ajouter";
                break;
            case ActionFormulaire.Modifier:
                Title = "Modifier une personne";
                btnConfirmer.Content = "Modifier";
                break;
            case ActionFormulaire.Supprimer:
                Title = "Supprimer une personne";
                btnConfirmer.Content = "Supprimer";
                //Les champs sont affichés, mais ne peuvent pas être modifiés
                txtPrenom.IsReadOnly = true;
                txtNom.IsReadOnly = true;
                break;
        }
    }

    private void btnConfirmer_Click(object sender, RoutedEventArgs e)
    {
        switch (_action)
        {
            case ActionFormulaire.Ajouter:
                //Création d'une nouvelle personne

                break;
            case ActionFormulaire.Modifier:
                //Modification de la personne reçue

                break;
            case ActionFormulaire.Supprimer:
                //Rien à modifier : le formulaire principal supprimera la personne. Seulement demander confirmation à l'utilisateur.
                break;
        }

        DialogResult = true;
    }

    private void btnAnnuler_Click(object sender, RoutedEventArgs e)
    {
        DialogResult = false;
    }
}
```

::: tip Astuce
Il est possible de faire la validation des champs uniquement pour les actions **Ajouter** et **Modifier**, puisqu'il n'est pas nécessaire de valider des données qui ne sont pas modifiables lors d'une suppression.
:::

### 3. Utiliser le formulaire dans la fenêtre principale

Le formulaire principal choisit l'action en passant la valeur correspondante au constructeur, puis réagit selon le `DialogResult`.

```c#
private void btnAjouter_Click(object sender, RoutedEventArgs e)
{
    FormPersonne frm = new FormPersonne(ActionFormulaire.Ajouter);

    //...
}

private void btnModifier_Click(object sender, RoutedEventArgs e)
{
    Personne personne = lstPersonnes.SelectedItem as Personne;

    if (personne != null)
    {
        FormPersonne frm = new FormPersonne(ActionFormulaire.Modifier, personne);

        //...
    }
}

private void btnSupprimer_Click(object sender, RoutedEventArgs e)
{
    Personne personne = lstPersonnes.SelectedItem as Personne;

    if (personne != null)
    {
        FormPersonne frm = new FormPersonne(ActionFormulaire.Supprimer, personne);

        //...
    }
}
```

### Résumé

| Action    | Objet passé au constructeur | Champs        | Résultat si `DialogResult == true` |
| --------- | --------------------------- | ------------- | ---------------------------------- |
| Ajouter   | Aucun                       | Vides         | Ajouter la personne à la liste     |
| Modifier  | La personne sélectionnée    | Pré-remplis   | Rafraîchir l'affichage             |
| Supprimer | La personne sélectionnée    | Lecture seule | Retirer la personne de la liste    |


## Démonstration

 Télécharger le projet de départ de la démonstration : [S8C1-DemoCRUD - Départ.zip](https://github.com/imane-mez/14B-POO-A26-Exercices/blob/main/bloc2/d%C3%A9mos/Cours%2015/S8C1-DemoCRUD%20-%20D%C3%A9part.zip)

Télécharger la démonstration complétée pour la création d'un employé : [S8C1-DemoCRUD - Create.zip](https://github.com/imane-mez/14B-POO-A26-Exercices/blob/main/bloc2/d%C3%A9mos/Cours%2015/S8C1-DemoCRUD%20-%20Create.zip)
 
