---
outline: deep
---
# Conventions pour les identificateurs en C#

Dans tous les cas un identificateur doit être significatif dans le contexte où il est utilisé. Pour le reste, les identificateurs se différencient par leur casse, c'est-à-dire, la combinaison de lettres majuscules et minuscules qui les composent.  Deux conventions sont utilisées.

## Casse Pascal (UpperCamelCase)

La première lettre de l'identificateur et la première lettre de chaque mot concaténé suivant sont en majuscules. Vous pouvez utiliser la casse Pascal pour les identificateurs comportant trois caractères ou plus.  
Par exemple :
- NbPointsDeVie
- Solde
- CalculerSalaireHebdomadaire(...)

## Casse mixte (lowerCamelCase)

La première lettre de l'identificateur est en minuscule et la première lettre de chaque mot concaténé suivant est en majuscules.  
Par exemple :
- nomFamille
- type
- couleurDeRemplissage

## Casse en majuscule avec trait de soulignement

Toutes les lettes sont en majuscule et les mots sont séparés par un trait de soulignement (_). 
Exemple : 
- NB_CARACTERES_MAX

::: warning Notes particulières pour tous les identifiants
- Les accents sont retirés des identificateurs.
- Les identificateurs sont accordés
- Exemples :
    - NbPoutinesMangees
:::

## Identificateur avec le casse Pascal (UpperCamelCase)

- Classe	
- Propriété (accesseurs get et set)	
- Fonction	
- Interface
- Type enum	
    - Valeur d'un type enum
- Espace de noms

## Identificateur avec le casse mixte (lowerCamelCase)

- Paramètre d'une méthode
- Attribut privé d'une classe 
- Variable locale
- Nom d’un contrôle graphique d’un formulaire.

### Cas particulier

Pour les **attributs privés d'une classe**, on utilise la case mixte tout en ajoutant le préfixe "_" à l'identificateur.  

Par exemple :
- _nbButs
- _age
- _prenom

## Identificateur en majuscule et trait de soulignement

- Constante 

## Ordre des éléments dans une classe

Lors de la création d'une classe, les différents éléments devront **toujours** être dans cet ordre :
 - constantes
 - attributs
 - propriétés
 - constructeur
 - méthodes

## Préfixe pour les noms des contrôles graphiques des formulaires

- Label : lbl
- Button : btn
- TextBox : txt
- RadioButton : opt
- CheckBox : chk
- ListBox : lst
- ComboBox : cbo
- GroupBox : gbo
- PictureBox : pbo
- Timer : tmr
- StackPanel : spn
- Image : img
- Grid : grd
- Panel : pnl
- WrapPanel : wpn
- ScrollBar : sbr
- DatePicker : dtp
- Form : frm (sdans le cas d'un formulaire secondaire créé par notre code)

