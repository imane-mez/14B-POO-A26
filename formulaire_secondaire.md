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
        lblMessage.Text = $"Bonjour {Personne.Prenom} {Personne.Nom}";

    }
}
```

Voici comment afficher une personne à partir de ce formulaire

MainWindow.cs

```c#


 Personne p = new Personne(txtPrenom.Text, txtNom.Text);

 //Instanciation d'un objet du type du formulaire secondare
 //en passant l'objet personne à afficher comme paramètre du constructeur.
 FormSecondaire frmSecondaire = new FormSecondaire(p);

 //Affichage du formulaire
 frmSecondaire.ShowDialog();
```

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
Il est maintenant possible de récupérer cette valeur dans le formulaire principale et déterminer quelle action entreprendre :

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


## Démonstration

 Télécharger le projet de départ de la démonstration : [S8C1-DemoCRUD - Départ.zip](https://gitlab.com/420-14b-fx/contenu/-/raw/main/bloc2/cours%2015/S8C1-DemoCRUD%20-%20D%C3%A9part.zip)

Télécharger la démonstration complétée pour la création d'un employé : [S8C1-DemoCRUD - Create.zip](https://gitlab.com/420-14b-fx/contenu/-/raw/main/bloc2/cours%2015/S8C1-DemoCRUD%20-%20Create.zip?ref_type=heads)

